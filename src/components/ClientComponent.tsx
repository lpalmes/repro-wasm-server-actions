"use client";

import { renderCodeblockInServerAction } from "@/lib/server_actions";
import { useEffect, useState } from "react";

export function ClientComponent() {
	const [component, setComponent] = useState<JSX.Element | null>(null);

	async function fetchComponentAndRender() {
		const element = await renderCodeblockInServerAction("123");

		setComponent(element);
	}

	useEffect(() => {
		fetchComponentAndRender();
	}, []);
	return (
		<div>
			<button>client button</button>
			<div>{component}</div>
		</div>
	);
}
