export function Tag({ children, solid = false }: { children: React.ReactNode; solid?: boolean }) {
  return (
    <div
      className={`inline-flex h-8 items-center justify-center rounded-[40px] border border-blue px-5 text-sm font-medium lowercase shadow-[0_2px_45px_#3452ff66] ${
        solid ? 'bg-blue text-on-blue' : 'bg-blue/15'
      }`}
    >
      {children}
    </div>
  );
}
