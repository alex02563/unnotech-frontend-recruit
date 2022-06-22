import http from '@/plugins/axios/http'

const resquest = 'https://fe-interview-api.unnotech.com'

export function getListsBook () {
  return http.get(`${resquest}/books/`)
}

export function getListsBookInfo (id) {
  return http.get(`${resquest}/books/${id}`)
}

export function addNewBook (data) {
  return http.post(`${resquest}/books/`, data)
}

export function editBook (data) {
  return http.patch(`${resquest}/books/${data.id}`, data)
}

export function deleteBook (id) {
  return http.delete(`${resquest}/books/${id}/`)
}
