const getImagen = async () => {

    try {
        // FetchAPI sirve para hacer peticiones HTTP
        const apiKey = 'whGhYP64TqZ0m89ZLHYCzi8xntnHdTG2'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {
            data
        } = await resp.json()

        const {
            url
        } = data.images.original;
        const img = document.createElement('img')
        img.src = url;

        document.body.append(img)

    } catch (error) {
        console.error(error);
    }

}

getImagen();

// Podemos generar una promesa a través de fetch y procesar la respuesta con then y catch
// Directamente con async podemos decidir recivir directamente la respuesta y gestionar los errores con trycatch