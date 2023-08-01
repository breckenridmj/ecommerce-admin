"use client"

import * as z from "zod"

import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SettingsFormsProps {
    initialData: Store;
}

const formSchema = z.object ({
    name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formSchema>;

export const SettingsForm: React.FC<SettingsFormsProps> = ({
    initialData
}) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <Heading 
                    title="Settings"
                    description="Manage store preferences"
                />
                <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => {}}
                >
                    <Trash className="h-4 w-4" />
                </Button>
            </div>
            <Separator />
        </>
    );
};