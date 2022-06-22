import http from '@/plugins/axios/http'

const baseUrl = 'https://fe-interview-api.unnotech.com'

export function getListsBook () {
  return http.get(`${baseUrl}/books/`)
}

export function getListsBookInfo (id) {
  return http.get(`${baseUrl}/books/${id}`)
}

export function addNewBook (data) {
  return http.post(`${baseUrl}/books/`, data)
}

export function editBook (data) {
  return http.patch(`${baseUrl}/books/${data.id}`, data)
}

export function deleteBook (id) {
  return http.delete(`${baseUrl}/books/${id}/`)
}
