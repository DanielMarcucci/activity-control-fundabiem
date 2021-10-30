import { apiEndpoints } from "../api/contants"

class ActivityTypesService {
  endpoint = {}

  constructor() {
    this.endpoint = apiEndpoints.activityTypes
  }

  createActivityType = async (activityType) => {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityType)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  updateActivityType = async (id, activityType) => {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(activityType)
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  deleteActivityType = async (id) => {
    try {
      const response = await fetch(`${this.endpoint}/${id}`, {
        method: 'DELETE'
      })
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getActivityTypes = async () => {
    try {
      const response = await fetch(this.endpoint)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }

  getActivityType = async (id) => {
    try {
      const response = await fetch(`${this.endpoint}/${id}`)
      const result = await response.json()
      return result
    } catch (error) {
      throw error
    }
  }
}

export default ActivityTypesService