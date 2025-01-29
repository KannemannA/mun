export async function GET(context) {
    try {
        const urlParam = new URL(context.request.url).searchParams.get('data');
        const externalUrl = `http://45.174.150.1:56368/api/Registro?Filtro=${urlParam}`;
        const response = await fetch(externalUrl);

        if (!response.ok) {
            return new Response(
                JSON.stringify({ error: 'Error al obtener los datos' }),
                { status: 500 }
            );
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        return new Response(
            JSON.stringify({ error: `Error interno del servidor: ${error}` }),
            { status: 500 }
        );
    }
}