export enum ApiMethod {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface FetchApiParams {
  method: ApiMethod;
  url: string;
  headers?: Record<string, string>;
  data?: unknown;
  locale?: string;
}

export const fetchApi = async <T = undefined>({
  method,
  url,
  headers = {},
  data,
}: FetchApiParams): Promise<T | undefined> => {
  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
      body: data ? JSON.stringify(data) : null,
    });

    const responseText = await response.text();

    if (responseText) {
      return JSON.parse(responseText) as T;
    }

    return undefined;
  } catch (e) {
    // TODO: manage API errors
  }
};
