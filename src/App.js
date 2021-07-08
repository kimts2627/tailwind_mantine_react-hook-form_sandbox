import { Button, Checkbox, PasswordInput, TextInput } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Cross1Icon } from '@modulz/radix-icons';

function App() {
	const { control, handleSubmit, reset } = useForm();
	const notifications = useNotifications();

	const onSubmit = (data) => {
		console.dir(data);
	};

	const handleNoti = () => {
		const errors = control.formStateRef.current.errors;
		console.log(errors);
		if (errors.password) {
			notifications.showNotification({
				title: 'Password is required!',
				message: 'testing',
				icon: <Cross1Icon />,
				color: 'red',
			});
		}
		if (errors.username) {
			notifications.showNotification({
				title: 'Username is required!',
				message: 'testing',
				icon: <Cross1Icon />,
				color: 'red',
			});
		}
	};

	return (
		<div className="m-4 bg-blue-200 rounded-lg w-auto h-80 shadow-md p-5">
			<form onSubmit={handleSubmit(onSubmit)} className="w-80">
				<div className="mb-4">
					<Controller
						name="username"
						control={control}
						defaultValue=""
						rules={{ required: true }}
						render={({
							field: { onChange, onBlur, value, ref },
							fieldState: { error },
						}) => (
							<TextInput
								placeholder="username"
								label="Username"
								onChange={onChange}
								onBlur={onBlur}
								elementRef={ref}
								size="xs"
								value={value}
								error={error?.type === 'required'}
								required
							/>
						)}
					/>
				</div>

				<div className="mb-4">
					<Controller
						name="password"
						control={control}
						defaultValue=""
						rules={{ required: true }}
						render={({
							field: { onChange, onBlur, value, ref },
							fieldState: { error },
						}) => (
							<PasswordInput
								placeholder="password"
								label="Password"
								description=""
								onChange={onChange}
								onBlur={onBlur}
								elementRef={ref}
								size="xs"
								value={value}
								error={error?.type === 'required'}
								required
							/>
						)}
					/>
				</div>
				<div className="mb-4">
					<Controller
						name="rememberUsername"
						control={control}
						defaultValue={false}
						render={({ field: { onChange, onBlur, value, ref } }) => (
							<>
								<Checkbox
									onChange={onChange}
									onBlur={onBlur}
									elementRef={ref}
									value={value}
									label="Remember Username"
								/>
							</>
						)}
					/>
				</div>
				<div className="mb-4">
					<Button type="submit" className="mr-4" onClick={handleNoti}>
						Login
					</Button>
					<Button
						className="mr-4"
						variant="outline"
						onClick={() => {
							reset(
								{
									username: '',
									password: '',
									rememberUsername: false,
								},
								{
									keepErrors: false,
									keepDirty: false,
									keepTouched: false,
								}
							);
						}}
					>
						Reset
					</Button>
					<Button
						onClick={() =>
							notifications.showNotification({
								title: 'noti',
								message: 'notinoti',
							})
						}
					>
						Noti
					</Button>
				</div>
			</form>
		</div>
	);
}

export default App;
