
export default function Checkbox({ label, help, name, register, required }) {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
              type="checkbox"
              id={name}
              {...register(name, { required })}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={name} className="font-medium text-gray-700">
            {label}
          </label>
          <p className="text-gray-500">{help}</p>
        </div>
      </div>
    </div>
  )
}
