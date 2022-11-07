<template>
  <div>
    <div class="feedback-button" @click="toggleFeedbackModal()">
      <img src="../assets/feedback.png" alt="feedback" />
    </div>
    <div
      class="feedback-modal"
      @click.self="toggleFeedbackModal()"
      v-if="!showFeeadbackModal"
    >
      <div
        class="feedback-modal-wrapper"
        :class="dark ? 'dark' : 'light'"
        :style="{ width: width, height: height }"
      >
        <div class="close-button" @click="toggleFeedbackModal()">
          <img src="../assets/close.png" alt="" />
        </div>

        <form class="feedback-form" v-if="!success">
          <span class="feedback-title">SEND YOUR FEEDBACK</span>
          <textarea
            placeholder="Your message"
            v-model="model.message"
            cols="30"
            rows="10"
          ></textarea>
          <button class="submit-button">Send message</button>
        </form>
        <div class="success-area" v-else>
          <img src="../assets/check.png" alt="check" />
          <span>We have got your feedback!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FFeedback",
  props: {
    dark: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      showFeeadbackModal: false,
      success: false,
      model: {
        message: null,
      },
    };
  },
  methods: {
    toggleFeedbackModal() {
      this.showFeeadbackModal = !this.showFeeadbackModal;
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: rgba(155, 139, 139, 0.332);
  border-radius: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 32px;
  }
}
.feedback-modal {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: #00000080;
  .feedback-modal-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 40px;

    .close-button {
      position: absolute;
      right: 16px;
      top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      padding: 6px;
      cursor: pointer;
      img {
        width: 12px;
      }
    }

    .feedback-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .feedback-title {
        margin-bottom: 12px;
        font-size: 24px;
      }
      input {
        width: 100%;
      }
      textarea {
        border-radius: 12px;
        text-indent: 16px;
        padding-top: 16px;
        outline: 0;
        border: 0;
        color: #ffffff;
        resize: none;
        width: 100%;
      }
      .submit-button {
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0;
        border: 0;
        padding: 20px;
        width: 100%;
        border-radius: 12px;
        cursor: pointer;
      }
    }
    .submit-button {
      background-color: #243447;
      color: #ffffff;
    }

    .success-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
      }
      span {
        margin-top: 24px;
        font-size: 24px;
        font-weight: 700;
      }
    }
    &.dark {
      background-color: #141d26;
      .close-button {
        background-color: #ffffff70;
      }

      .feedback-form {
        .feedback-title {
          color: #ffffff;
        }
        textarea {
          background-color: #243447;
          color: #ffffff;
        }
      }

      .success-area {
        span {
          color: #ffffff;
        }
      }
    }
    &.light {
      background-color: #ffffff;
      .close-button {
        background-color: #ffffff70;
      }

      .feedback-form {
        .feedback-title {
          color: #243447;
        }
        textarea {
          background-color: #f3f6f4;
          color: #243447;
        }
      }

      .success-area {
        span {
          color: #243447;
        }
      }
    }
  }
}
</style>
