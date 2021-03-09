import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://coding-test.cube19.io/frontend/v1/',
})

const sleepRequest = (milliseconds, originalRequest) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(instance(originalRequest)),
      milliseconds
    )
  })
}

instance.interceptors.response.use(
  (response) => {
    console.log('response: ', response)
    return response
  },
  (error) => {
    const {
      config,
      response: { status },
    } = error
    const originalRequest = config

    if (status === 500) {
      return sleepRequest(1000, originalRequest)
    } else {
      return Promise.reject(error)
    }
  }
)

export default instance
