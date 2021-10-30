export default function Textarea({ label, name, register, required, rows }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        rows={rows}
				{...register(name, { required })}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
      />
    </>
  )
}