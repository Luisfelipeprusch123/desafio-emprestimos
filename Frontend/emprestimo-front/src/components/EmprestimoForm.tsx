import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Validação de dados com Zod
const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve ter pelo menos 2 caracteres.",
  }),
  cpf: z.string().length(11, {
    message: "CPF deve ter 11 dígitos.",
  }),
  idade: z.string().min(1, {
    message: "Idade é obrigatória.",
  }),
  salario: z.string().min(1, {
    message: "Salário é obrigatório.",
  }),
  localizacao: z.string().length(2, {
    message: "Localização deve ser a sigla do estado (ex: SP).",
  }),
});

interface ResponseData {
  usuario: string;
  dados: Array<{
    type: string;
    taxa: number;
  }>;
}

const EmprestimoForm: React.FC = () => {
  const [response, setResponse] = useState<ResponseData | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      cpf: "",
      idade: "",
      salario: "",
      localizacao: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post("http://localhost:3000/emprestimo", values);
      setResponse(res.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  }

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Solicitação de Empréstimo</CardTitle>
          <CardDescription>Preencha o formulário para solicitar um empréstimo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu CPF (apenas números)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idade</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Sua idade" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salario"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salário</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Seu salário" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="localizacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Localização</FormLabel>
                    <FormControl>
                      <Input placeholder="Sigla do estado (ex: SP)" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Enviar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {response && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Resposta do Servidor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-semibold">Usuário: {response.usuario}</p>
            <p className="mt-2 font-semibold">Dados:</p>
            <ul className="list-disc pl-5 mt-2">
              {response.dados.map((item, index) => (
                <li key={index}>
                  Tipo: {item.type}, Taxa: {item.taxa}%
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EmprestimoForm;
