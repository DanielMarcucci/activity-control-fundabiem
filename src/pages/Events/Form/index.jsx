import { useForm } from "react-hook-form"
import Input from "../../../components/Form/Input";
import Main from "../../../components/Layout/Main";

export default function EventForm(props) {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	// console.log(watch("example")); // watch input value by passing the name of it

	// /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
	// <form onSubmit={handleSubmit(onSubmit)}>
	//   {/* register your input into the hook by invoking the "register" function */}
	//   <input defaultValue="test" {...register("example")} />

	//   {/* include validation with required or other standard HTML validation rules */}
	//   <input {...register("exampleRequired", { required: true })} />
	//   {/* errors will return when field validation fails  */}
	//   {errors.exampleRequired && <span>This field is required</span>}

	//   <input type="submit" />
	// </form>
	return (
		<Main title="Eventos" showButtonNew={props.showButtonNew}>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-12 gap-3">
								{errors.exampleRequired && <span>This field is required</span>}
								<div className="col-span-12 sm:col-span-8">
									<Input type="text" label="Nombre del Evento" name="name" register={register} required />
								</div>
								<div className="hidden sm:block sm:col-span-4"></div>

								<div className="col-span-12 sm:col-span-4">
									<Input type="datetime-local" label="Fecha de Inicio" name="startDate" register={register} required />
								</div>

								<div className="col-span-12 sm:col-span-4">
									<Input type="datetime-local" label="Fecha de Inicio" name="endDate" register={register} required />
								</div>

								<div className="col-span-12">
									<label htmlFor="txtDescription" className="block text-sm font-medium text-gray-700">
										Descripción
									</label>
									<div className="mt-1">
										<textarea
											id="txtDescription"
											name="txtDescription"
											rows={3}
											className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
											placeholder=""
											defaultValue={''}
										/>
									</div>
								</div>

								<div className="col-span-12">
									<Input type="text" label="Lugar" name="address" register={register} required />
								</div>
							</div>
						</div>
						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Guardar
							</button>
						</div>
					</div>
				</form>
			</div>
		</Main>
	)
}