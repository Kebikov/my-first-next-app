const getData = async (url) => {
    const response = await fetch(`${url}`, {
        next: {
            revalidate: 60
        }
    });
    return response.json();
}

export default getData;