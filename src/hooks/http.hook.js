import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = "GET", body = null, mode = "cors", headers = {}) => {
      setLoading(true);

      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] =
            "application/x-www-form-urlencoded; charset=UTF-8";
        }

        const response = await fetch(url, { method, mode, body, headers });
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || "Щось пішло не так");
        }

        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
