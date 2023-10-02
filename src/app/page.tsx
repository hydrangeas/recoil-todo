import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main>
      <div className="container mx-auto max-w-md">
        <AddTodo />
        <TodoList />
      </div>
    </main>
  );
}
