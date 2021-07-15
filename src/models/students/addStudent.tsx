export type addStudentRequest = {
      token: string
      "students": [
        {
          "id": "number",
          "email": "string",
          "name": "string",
          "sex": "string",
          "specialty": "string",
          "group": "string",
          "color": "string",
          "rating": "number",
          "birthday": "string",
          "avatar": "string"
        }
      ]
    }

export type addStudentResponse = {
  success: boolean;
}
