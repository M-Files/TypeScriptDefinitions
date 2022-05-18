/// <reference path="./MFilesUI.d.ts" />
/**
 * Describes the windows object in an mfiles dashboard.
 */
interface IMFilesDashboardWindow
	extends Window {

	/**
	 * Declare the entry method M-Files expects implementations to define/provide.
	 */
	OnNewDashboard: ( dashboard: MFilesUI.IDashboard ) => void;

	/**
	 * MFiles global.
	 */
	MFiles: MFilesUI.ICommonFunctions;

	[index: string]: unknown;
}