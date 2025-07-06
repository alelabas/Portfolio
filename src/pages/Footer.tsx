const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center gap-y-5 bg-gray-800 text-white p-5 w-full">
			<div>
				<p className="text-sm text-gray-200 font-light">
					© 2025 Shopnow. All rights reserved.
				</p>
			</div>
			<div>
				<ul className="flex gap-x-5 text-sm text-gray-200 font-light">
					<li>Terminos y condiciones</li>
					<li>Promociones</li>
					<li>Ayuda</li>
				</ul>
			</div>
			<div>
				<ul className="flex gap-x-5 text-sm text-gray-200 font-light">
					<li>Linkedin</li>
					<li>Instagram</li>
					<li>Twitter</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
