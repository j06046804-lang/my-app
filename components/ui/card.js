export function Card({ children, className = "" }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md bg-white border border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}
