export default function Select({ children, onChange, onBlur, name, label, register, required }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        {...register(name, { required })}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        {children}
      </select>
    </>
  )
}