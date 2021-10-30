import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { useParams } from "react-router";
import Input from "../../../components/Form/Input";
import Main from "../../../components/Layout/Main";
import ActivityTypesService from "../../../services/activityTypesService";
import Checkbox from "../../../components/Form/Checkbox";
import Select from "../../../components/Form/Select";
import Textarea from "../../../components/Form/Textarea";

export default function ActivitiesForm() {
  const [activityType, setActivityType] = useState({})
  const [enabled, setEnabled] = useState(true)
  const { id } = useParams()
  console.log(id)
  const activityTypesService = new ActivityTypesService()


  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const loadActivityType = (activityTypeId) => {
    // activityTypesService.getActivityType()
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(data => {
        setActivityType({
          "id": 1,
          "name": "Prueba1",
          "description": "Esto es una prueba",
          "status": true,
          "published_at": "2021-10-23T07:55:16.000Z",
          "created_at": "2021-10-23T07:55:01.000Z",
          "updated_at": "2021-10-23T07:55:16.000Z",
          "activity_type_id": {
            "id": 1,
            "NAME": "Prueba",
            "STATUS": true,
            "published_at": "2021-10-23T06:20:33.000Z",
            "created_at": "2021-10-23T06:20:24.000Z",
            "updated_at": "2021-10-23T06:20:33.000Z"
          }
        })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    if (id) {
      loadActivityType(id)
    }
  }, [id])

  return (
    <Main title={(id ? "Editar" : "Nueva") + " Actividad"}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-12 gap-3">
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="col-span-12 sm:col-span-8">
                  <Input type="text" label="Nombre de la Actividad" name="name" register={register} required />
                </div>
                <div className="hidden sm:block sm:col-span-4"></div>

                <div className="col-span-12">
                  <Textarea label="Descripción" name="description" register={register} rows={3} />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Select label="Tipo de Actividad" name="activityTypeId" register={register} required>
                    <option>1 - Prueba</option>
                    <option>2 - MexicoTTTT</option>
                    <option>3 - PruebaTA2</option>
                  </Select>
                </div>

                <div className="col-span-12">
                  <Checkbox label="Activo" help="Para la disponibilidad de uso debe estar activo el estatus" name="status" register={register} required />
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
