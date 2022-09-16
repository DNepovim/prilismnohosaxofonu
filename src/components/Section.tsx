import React, { ReactNode } from "react"

export const Section: React.FC<{ children?: ReactNode; id?: string }> = ({
  children,
  id,
}) => <section id={id}>{children}</section>
