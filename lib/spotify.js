import fetch from 'isomorphic-unfetch'
import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

/**
   * THIS IS A NOT IN THE DOCUMENTATION, BUT IT WORKS FOR THE FIRST STEP
   * REQUEST USER AUTHORIZATION
   * 
   * @see https://developer.spotify.com/documentation/general/guides/authorization
   * @see https://developer.spotify.com/documentation/general/guides/authorization/code-flow
   * 
   * 1. Access to: 'https://accounts.spotify.com/authorize?
                    client_id=8e94bde7ddb84a1f7a0e51bf3bc95be8
                    &response_type=code
                    &redirect_uri=http%3A%2F%2Flocalhost:3000
                    &scope=user-read-currently-playing%20user-top-read'
   *
   *  @see https://developer.spotify.com/dashboard/applications
   *  @see https://developer.spotify.com/documentation/general/guides/authorization/scopes
   * 
   * 2. Replace with your spotify app data
            client_id -> remplaced by process.env.SPOTIFY_CLIENT_ID
            redirect_uri -> exactly the one in your Spotify application
            scope -> separated by '%20' if multiple scopes          
                      example: 'example_scope1%20example_scope2
   *
   * 3. Finally, you'll get a code in the URL: http://localhost:3000/?code=SAVE_THIS_CODE  
   *
   * 4. Follow the next steps in the guide:
            -> Request Access Token
            -> Request a refreshed Access Token
*/

export const revalidate = 0

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}