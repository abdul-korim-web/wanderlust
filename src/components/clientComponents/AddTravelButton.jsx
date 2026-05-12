"use client";
import { Button } from "@heroui/react";
import { useFormStatus } from "react-dom";
const AddTravelButton = () => {
    const { pending } = useFormStatus();
    return (
        <div>
            <Button
             isLoading={pending}
      isDisabled={pending}
            type="submit"
            variant="outline"
            className="rounded-2xl w-full bg-cyan-500 hover:bg-cyan-600 text-white h-14 text-lg font-semibold transition-all duration-300"
          >
           {pending ? "Adding..." : "Add Travel Package"}
          </Button>
        </div>
    );
}

export default AddTravelButton;
