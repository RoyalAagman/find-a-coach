<template>
  <section class="auth">
    <form class="auth-form" @submit.prevent="onSignup">
      <h1>Create Account</h1>

      <div class="control">
        <label for="email">Your Email</label>
        <input id="email" type="email" v-model="email" />
      </div>

      <div class="control">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password" />
      </div>

      <div class="control">
        <label for="confirm">Confirm Password</label>
        <input id="confirm" type="password" v-model="confirmPassword" />
      </div>

      <p v-if="!formIsValid" class="error">{{ errorMessage }}</p>

      <div class="actions">
        <button type="button" class="secondary" @click="onClear">Clear</button>
        <button type="submit" class="auth-button">Sign Up</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'UserSign',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      formIsValid: true,
      errorMessage: '',
    };
  },
  methods: {
    onSignup() {
      // simple validation: fields not empty and passwords match
      if (!this.email.trim() || !this.password || !this.confirmPassword) {
        this.formIsValid = false;
        this.errorMessage = 'All fields are required.';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.formIsValid = false;
        this.errorMessage = 'Password and confirmation do not match.';
        return;
      }

      // valid
      this.formIsValid = true;
      this.errorMessage = '';
      // emit signup event with credentials for parent/store handling
      this.$emit('signup', { email: this.email, password: this.password });
      // clear password fields
      this.password = '';
      this.confirmPassword = '';
    },
    onClear() {
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.formIsValid = true;
      this.errorMessage = '';
    },
  },
};
</script>

<style scoped>
.auth {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
}

.auth-form {
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(58, 0, 97, 0.04);
}

.auth-form h1 {
  margin: 0 0 1rem 0;
  text-align: center;
  color: #3a0061; /* theme purple */
  font-size: 1.25rem;
}

.control {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
}

.control label {
  font-weight: 600;
  margin-bottom: 0.35rem;
  color: #333;
  font-size: 0.95rem;
}

.control input {
  font: inherit;
  padding: 0.5rem 0.65rem;
  border: 1px solid #d0d6db;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.12s ease;
}

.control input:focus {
  border-color: #3a0061;
  box-shadow: 0 0 0 4px rgba(58, 0, 97, 0.06);
}

.error {
  color: #b00020;
  background: rgba(176, 0, 32, 0.04);
  padding: 0.5rem;
  border-radius: 6px;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.auth-button {
  background: #3a0061;
  color: #fff;
  border: none;
  padding: 0.55rem 1rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.12s ease, transform 0.06s ease;
}

.auth-button:hover {
  background: #2e004f;
}

.secondary {
  background: transparent;
  color: #3a0061;
  border: 1px solid transparent;
  padding: 0.45rem 0.85rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.12s ease;
}
.secondary:hover {
  border-color: #3a0061;
}

@media (max-width: 480px) {
  .auth-form {
    padding: 1rem;
  }
  .actions {
    justify-content: center;
  }
  .auth-button {
    width: 100%;
  }
  .secondary {
    display: none;
  }
}
</style>
