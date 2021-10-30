import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useHistory, useParams } from "react-router";
import Input from "../../../components/Form/Input";
import Main from "../../../components/Layout/Main";
import ActivityTypesService from "../../../services/activityTypesService";
import Checkbox from "../../../components/Form/Checkbox";

export default function ActivityTypeForm() {
	const [isLoading, setIsLoading] = useState(false)
	const { id } = useParams()
	const history = useHistory()

	const activityTypesService = new ActivityTypesService()

	const { register, handleSubmit, reset, setFocus, formState: { errors } } = useForm();
	const onSubmit = data => {
		if (data) {
			id ? update(id, data) : create(data)
		}
	}

	const loadActivityType = (activityTypeId) => {
		setIsLoading(true)
		activityTypesService.getActivityType(activityTypeId)
			.then(data => {
				reset(data)
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	const create = data => {
		setIsLoading(true)
		activityTypesService.createActivityType(data)
			.then(() => {
				reset()
				history.goBack()
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	const update = (id, data) => {
		setIsLoading(true)
		activityTypesService.updateActivityType(id, data)
			.then(data => {
				history.goBack()
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false))
	}

	useEffect(() => {
		if (id) {
			loadActivityType(id)
		}
		setFocus("NAME")
	}, [id, setFocus])

	return (
		<Main title={(id ? "Editar" : "Nuevo") + " Tipo de Actividad"}>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-12 gap-3">
								{errors.exampleRequired && <span>This field is required</span>}
								<div className="col-span-12 sm:col-span-8">
									<Input type="text" label="Nombre del Tipo de Actividad" name="NAME" register={register} required />
								</div>
								<div className="hidden sm:block sm:col-span-4"></div>

								<div className="col-span-12">
									<Checkbox label="Activo" help="Para la disponibilidad de uso debe estar activo el estatus" name="STATUS" register={register} />
									{/* <div className="mt-4 space-y-4">
										<div className="flex items-start">
											<div className="flex items-center h-5">
												<input
													id="comments"
													name="comments"
													type="checkbox"
													className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
												/>
											</div>
											<div className="ml-3 text-sm">
												<label htmlFor="comments" className="font-medium text-gray-700">
													Activo
												</label>
												<p className="text-gray-500">Para la disponibilidad de uso debe estar activo el estatus</p>
											</div>
										</div>
									</div> */}
								</div>
								{/* <div className="col-span-12 sm:col-span-6">
								<label htmlFor="country" className="block text-sm font-medium text-gray-700">
									Country / Region
								</label>
								<select
									id="country"
									name="country"
									autoComplete="country"
									className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								>
									<option>United States</option>
									<option>Canada</option>
									<option>Mexico</option>
								</select>
							</div> */}
							</div>
						</div>
						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								className={(isLoading ? "disabled:opacity-50 " : "") + "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}
								disabled={isLoading}
							>
								{!isLoading
									? "Guardar"
									: (
										<svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
									)
								}
							</button>
						</div>
					</div>
				</form>
			</div>
		</Main>
	)
}
