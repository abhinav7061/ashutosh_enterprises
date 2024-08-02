import { toast } from "sonner";

export async function makePostRequest(
    setLoading,
    endpoint,
    formData,
    message,
    onSuccess
) {
    try {
        setLoading(true);
        // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const baseUrl = 'http://localhost:3000/api/';
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            body: formData,
        });
        const resData = await response.json();

        if (response.ok) {
            setLoading(false);
            toast.success(message?.success ? message.success : resData.message);
            onSuccess();
        } else {
            setLoading(false);
            toast.error(message?.error ? message.error : resData.message);
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}

export async function makePutRequest(
    setLoading,
    endpoint,
    data,
    message,
    redirect,
) {
    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            setLoading(false);
            toast.success(message?.success ? message.success : data.message);
            redirect();
        } else {
            setLoading(false);
            toast.error(message?.error ? message.error : data.message);
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
}