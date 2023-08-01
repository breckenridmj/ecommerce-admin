"use client"

import { Store } from "@prisma/client";
import { Trash } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

interface SettingsFormsProps {
    initialData: Store;
}

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
        </>
    );
};