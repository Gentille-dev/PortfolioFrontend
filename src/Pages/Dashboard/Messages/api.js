
export const getMessages = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/v1/message/'); 
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching messages:', error);
      return [];
    }
  };
  