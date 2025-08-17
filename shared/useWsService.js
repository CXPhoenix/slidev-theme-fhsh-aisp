import { watch } from "vue";
import { useWebSocket } from "@vueuse/core";

/**
 * Connect to websocket service
 *
 * @param {string} url websocket server
 */
export function useWsService(url) {
  const { status, data, send, close } = useWebSocket(url, {
    autoReconnect: {
      retries: 5,
      delay: 500,
      onFailed() {},
    },
    heartbeat: {
      message: "ping",
      responseMessage: "pong",
      interval: 1000,
      pongTimeout: 1000,
    },
  });

  const getStatus = () => status;
  const closeConnection = () => {
    close();
  };

  /**
   * 
   * @param {import("vue").Ref} statesVar 
   */
  const getData = (statesVar) => {
    watch(data, async (newData, oldData) => {
        statesVar.value = newData;
    })
  }
  
  /**
   * 
   * @param {import("vue").Ref<string>} answerVar 
   */
  const sendAnswer = (answerVar) => {
    send(answerVar.value)
  }

  return {
    getStatus,
    closeConnection,
    getData,
    sendAnswer,
  }
}
