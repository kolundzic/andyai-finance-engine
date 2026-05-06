export type TalkCard = {
  readonly id: string;
  readonly title: string;
  readonly prompt: string;
  readonly response: string;
};

export const talkCards: TalkCard[] = [
  {
    id: "what-is-it",
    title: "What is AndyAI Finance Engine?",
    prompt: "Explain the product in simple language.",
    response:
      "AndyAI Finance Engine is a governed financial modeling surface. It helps organize business inputs, model runs, evidence, and approval steps before any important financial output is trusted.",
  },
  {
    id: "why-safe",
    title: "Why is it safer than a normal chatbot?",
    prompt: "Explain the safety boundary.",
    response:
      "The public surface separates proof from execution. It can show status and explain evidence, but it cannot write data, activate billing, call webhooks, or bypass human approval.",
  },
  {
    id: "what-proof",
    title: "What proof exists now?",
    prompt: "Explain current proof state.",
    response:
      "The public proof layer includes a homepage, finance-proof route, route map, talk candidate page, and read-only runtime status. The system has eyes, but the hands remain locked.",
  },
  {
    id: "client-value",
    title: "What is the client value?",
    prompt: "Explain value for a client.",
    response:
      "A client gets a clearer path from business input to reviewable financial output. The value is not only speed; it is controlled preparation, evidence, and human approval.",
  },
];

export const talkSafetyRows = [
  ["Microphone", "disabled", "green"],
  ["Recording", "disabled", "green"],
  ["Provider", "not connected", "green"],
  ["External AI calls", "disabled", "green"],
  ["Database writes", "blocked", "green"],
  ["Human approval", "required", "gold"],
] as const;

export function getTalkCardById(id: string): TalkCard | undefined {
  return talkCards.find((card) => card.id === id);
}
