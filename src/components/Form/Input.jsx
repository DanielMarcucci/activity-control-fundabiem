export default function Input({ label, name, register, required, type }) {
	return (
		<>
			<label className="block text-sm font-medium text-gray-700">{label}</label>
			<input
				type={type}
				{...register(name, { required })}
				className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
			/>
		</>
	)
}