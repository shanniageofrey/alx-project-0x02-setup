import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

export default function About() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Reusable Buttons</h1>
      <div className="flex gap-4 flex-wrap">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
}