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
		/* setIsLoading(true)
		activityTypesService.getActivityType(activityTypeId)
			.then(data => {
				reset(data)
			})
			.catch(err => console.error(err))
			.finally(() => setIsLoading(false)) */
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
		setFocus("name")
	}, [id, setFocus])

	return (
		<Main title={(id ? "Editar" : "Nueva") + " Estado Evento"}>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="shadow overflow-hidden sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-12 gap-3">
								{errors.exampleRequired && <span>This field is required</span>}
								<div className="col-span-12 sm:col-span-4">
									<Input type="text" label="Nombre" name="name" register={register} required />
								</div>
								<div className="col-span-12 sm:col-span-4">
									<Input type="text" label="Descripcion" name="description" register={register} required />
								</div>
								<div className="col-span-12">
									<Checkbox label="Activo" help="Para la disponibilidad de uso debe estar activo el estatus" name="status" register={register} />
									
								</div>
								
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
