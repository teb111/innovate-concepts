import axios from 'axios'

const headers = {
  'Api-Key': 'IkyLqI7AKQsOESAzPPmGiFGVhyzLCa8fxBGBTeHf',
  'Api-Secret': '1kasKItUSTy82JNY0q8U9qJffF8WEdPitD9BqZYyC7USmPaqrGfSXwgpiKcG',
  'Content-Type': 'application/json'
}

export const sendMail = async (reqBody) => {
  try {
    const { email, message, subject, name } = reqBody
    const mailData = {
      recipients: email,
      template: 'generic',
      params: {
        content: message,
        subject: subject
      },
      headers: {
        'from_name': name,
        'from_email': email
      }
    }

    const { data } = await axios.post(
      'https://notification.onewithzero.com/publish/request',
      mailData,
      { headers }
    )
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
