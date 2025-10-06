import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@radix-ui/react-checkbox";
// import { useEffect } from "react";

export default function Home() {
//   useEffect(() => {
//     console.log("rendered");
//   });
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col gap-y-4">
          <div>
            <Button variant="default">I am a button</Button>
          </div>
          <div>
            <Input placeholder="I am an input" />
          </div>
          <div>
            <Progress value={50} className="w-full" />
          </div>
          <div>
            <Textarea placeholder="I am a textarea" />
          </div>
        </div>
      </div>
    </>
  );
}
