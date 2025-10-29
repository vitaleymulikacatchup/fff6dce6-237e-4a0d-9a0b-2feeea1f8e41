"use client";

import { memo } from "react";
import { cls } from "@/lib/utils";

interface BadgeProps {
    text: string;
    variant?: "primary" | "card";
    className?: string;
}

const Badge = memo(({
    text,
    variant = "primary",
    className = "",
}: BadgeProps) => {
    return (
        <div className={cls(
            "px-3 py-1 rounded-theme w-fit",
            variant === "primary" ? "primary-button" : "card",
            className
        )}>
            <p className={cls(
                "text-xs",
                variant === "primary" ? "text-background" : "text-foreground"
            )}>
                {text}
            </p>
        </div>
    );
});

Badge.displayName = "Badge";

export default Badge;
