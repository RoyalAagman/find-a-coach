<template>
    <base-card>
	<section class="auth">
		<form class="auth-form" @submit.prevent="onSubmit">
			<h1>Login</h1>

			<div class="control">
				<label for="email">Your Email</label>
				<input id="email" type="email" v-model.trim="email" required />
			</div>

			<div class="control">
				<label for="password">Password</label>
				<input id="password" type="password" v-model.trim="password" required minlength="6" />
                <p v-if="!formIsValid"> Enter correct email and password.</p>
			</div>
			<div class="actions">
				<button type="submit" class="auth-button">Login</button>
			</div>
		</form>
	</section>
    </base-card>
</template>
<script>
export default {
	name: 'UserAuth',
	data() {
		return {
			email: '',
			password: '',
            formIsValid: true,
		};
	},
	methods: {
		onSubmit() {
            this.formIsValid = true;
            if(this.email === '' || this.email.includes('@') || this.password.length < 6){
                this.formIsValid = false;
                return ;
            }
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
	max-width: 420px;
	background: #fff;
	border-radius: 10px;
	padding: 1.25rem 1.5rem;
	box-shadow: 0 2px 12px rgba(0,0,0,0.06);
	border: 1px solid rgba(58,0,97,0.04);
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
	box-shadow: 0 0 0 4px rgba(58,0,97,0.06);
}

.actions {
	display: flex;
	justify-content: flex-end;
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
}
</style>