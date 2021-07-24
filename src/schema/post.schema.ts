import { object, string, ref } from "yup";


const payload = {
	body: object({
		title: string().required("Title is Required"),
		body: string()
			.required("Body is Required")
			.min(120, "Body is Too Short"),
	}),
};

const params = {
	params: object({
		postId: string().required("postId is Required"),
	})
}

export const createPostSchema = object({
	...payload,
});

export const updatePostSchema = object({
	...params,
	...payload,
});

export const deletePostSchema = object({
	...params,
});