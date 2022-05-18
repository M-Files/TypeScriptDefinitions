
/**
 * Describes required globals in shell module.
 */
interface IShellUIModule {

	/**
	 * Declare the entry method M-Files expects implementations to define/provide.
	 * @param shellUI - The new shellui object that is about to start.
	 * @returns - An object of event listeners to register for the shellUI object, or undefined.
	 *    Prefer not to register event listeners this way.
	 */
	OnNewShellUI: ( shellUI: MFilesUI.IShellUI ) => MFilesUI.IShellUIEventObject | void;
}

declare var ShellUIModule: IShellUIModule;
