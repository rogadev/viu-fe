import { json } from '@sveltejs/kit'

/**
 * @type {import('./$types').RequestHandler}
 */
export async function GET() {
  try {
    // Try the programs endpoint with a different path structure
    const response = await fetch(
      'https://www.viu.ca/programs/api/v1/programs',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return json(data, {
      headers: {
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    })
  } catch (error) {
    console.error('Error fetching programs:', error)
    return new Response('Error fetching programs', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  }
}
