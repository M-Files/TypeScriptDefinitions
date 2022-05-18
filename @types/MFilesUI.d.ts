/// <reference path="MFilesAPI.d.ts" />

declare module MFilesUI {

	/** Enumerations for command states. */
	export interface CommandState { }
	namespace CommandState {
		interface Undefined extends CommandState { } // 0
		interface Active extends CommandState { } // 1
		interface Inactive extends CommandState { } // 2
		interface Hidden extends CommandState { } // 3
	}

	/**
	 * Enumerations for command locations.
	 * Used for example when requested item is disabled or hidden in specified location.
	 */
	export interface CommandLocation { }
	namespace CommandLocation {
		interface All extends CommandLocation { } // 268435455
		interface ContextMenu extends CommandLocation { } // 2
		interface MainMenu extends CommandLocation { } // 1
		interface TaskPane extends CommandLocation { } // 4
		interface Undefined extends CommandLocation { } // 0
	}

	/**
	 * Enumerations for command groups in task pane.
	 */
	export interface TaskPaneGroup { }
	namespace TaskPaneGroup {
		interface GoTo extends TaskPaneGroup { } // 3
		interface Main extends TaskPaneGroup { } // 4
		interface New extends TaskPaneGroup { } // 1
		interface ViewAndModify extends TaskPaneGroup { } // 2
	}

	/**
	 * Enumerations for menu locations.
	 * Used to specify the detailed location to add custom commands.
	 */
	export interface MenuLocation { }
	namespace MenuLocation {
		interface ContextMenu_AfterWindowsCommands extends MenuLocation { } // 23
		interface ContextMenu_BeforeProperties extends MenuLocation { } // 42
		interface ContextMenu_BeforeWindowsCommands extends MenuLocation { } // 22
		interface ContextMenu_Bottom extends MenuLocation { } // 43
		interface ContextMenu_CollectionMembersSpecific extends MenuLocation { } // 35
		interface ContextMenu_DefaultCommand extends MenuLocation { } // 20
		interface ContextMenu_Deletion extends MenuLocation { } // 36
		interface ContextMenu_DocumentConversions extends MenuLocation { } // 41
		interface ContextMenu_Edit extends MenuLocation { } // 37
		interface ContextMenu_FileCreation extends MenuLocation { } // 25
		interface ContextMenu_FolderSpecific extends MenuLocation { } // 27
		interface ContextMenu_HistorySpecific extends MenuLocation { } // 33
		interface ContextMenu_Misc1_Bottom extends MenuLocation { } // 32
		interface ContextMenu_Misc1_Middle extends MenuLocation { } // 31
		interface ContextMenu_Misc1_Top extends MenuLocation { } // 30
		interface ContextMenu_Misc2_Bottom extends MenuLocation { } // 40
		interface ContextMenu_Misc2_Middle extends MenuLocation { } // 39
		interface ContextMenu_Misc2_Top extends MenuLocation { } // 38
		interface ContextMenu_ObjectCreation extends MenuLocation { } // 24
		interface ContextMenu_ObjectOperations extends MenuLocation { } // 26
		interface ContextMenu_PropertyFolder extends MenuLocation { } // 44
		interface ContextMenu_RelationshipsSpecific extends MenuLocation { } // 34
		interface ContextMenu_SingleFolderSpecific extends MenuLocation { } // 28
		interface ContextMenu_Top extends MenuLocation { } // 21
		interface ContextMenu_ViewVisibility extends MenuLocation { } // 29
	}

	/**
	 * Enumerations for default icons.
	 */
	export interface DefaultIcon { }
	namespace DefaultIcon {
		interface Assignment extends DefaultIcon { } // 15
		interface ChangeState extends DefaultIcon { } // 24
		interface CheckIn extends DefaultIcon { } // 1
		interface CheckOut extends DefaultIcon { } // 0
		interface Collection extends DefaultIcon { } // 22
		interface File extends DefaultIcon { } // 19
		interface GoOffline extends DefaultIcon { } // 14
		interface GoOnline extends DefaultIcon { } // 13
		interface History extends DefaultIcon { } // 4
		interface LogOut extends DefaultIcon { } // 12
		interface MakeCopy extends DefaultIcon { } // 6
		interface MarkComplete extends DefaultIcon { } // 16
		interface MFD extends DefaultIcon { } // 20
		interface PrivateView extends DefaultIcon { } // 21
		interface Properties extends DefaultIcon { } // 5
		interface PropertyFolder extends DefaultIcon { } // 18
		interface RelationShips extends DefaultIcon { } // 25
		interface Root extends DefaultIcon { } // 9
		interface SelectedState extends DefaultIcon { } // 26
		interface TraditionalFolder extends DefaultIcon { } // 17
		interface UndoCheckOut extends DefaultIcon { } // 2
		interface View extends DefaultIcon { } // 8
		interface Workflow extends DefaultIcon { } // 11
	}

	/**
	 * Enumerations for builtin commands.
	 */
	export interface BuiltinCommand { }
	namespace BuiltinCommand {
		interface AboutMFiles extends BuiltinCommand { } // 162
		interface AddCollectionMember extends BuiltinCommand { } // 95
		interface AddDashboardToViewLocBottom extends BuiltinCommand { } // 69
		interface AddDashboardToViewLocMain extends BuiltinCommand { } // 67
		interface AddDashboardToViewLocRight extends BuiltinCommand { } // 68
		interface AddDocumentFromScanner extends BuiltinCommand { } // 43
		interface AddFileFromScanner extends BuiltinCommand { } // 44
		interface AddGroupingLevel extends BuiltinCommand { } // 116
		interface AddRelationship extends BuiltinCommand { } // 98
		interface AddReportToViewLocBottom extends BuiltinCommand { } // 69
		interface AddReportToViewLocMain extends BuiltinCommand { } // 67
		interface AddReportToViewLocRight extends BuiltinCommand { } // 68
		interface AddShortcutToTaskPane extends BuiltinCommand { } // 66
		interface AddToFavorites extends BuiltinCommand { } // 62
		interface Applications extends BuiltinCommand { } // 136
		interface ApproveAssignment extends BuiltinCommand { } // 165
		interface BeginCoauthoring extends BuiltinCommand { } // 130
		interface BottomPane_Minimized extends BuiltinCommand { } // 152
		interface BottomPane_Normal extends BuiltinCommand { } // 151
		interface BottomPane_Off extends BuiltinCommand { } // 153
		interface BrowseInThisWindow extends BuiltinCommand { } // 120
		interface ChangeLanguage extends BuiltinCommand { } // 42
		interface ChangePassword extends BuiltinCommand { } // 41
		interface ChangeState extends BuiltinCommand { } // 26
		interface ChangeStateAdmin extends BuiltinCommand { } // 167
		interface ChangeViewMode extends BuiltinCommand { } // 106
		interface CheckIn extends BuiltinCommand { } // 11
		interface CheckInWithComments extends BuiltinCommand { } // 12
		interface CheckOut extends BuiltinCommand { } // 10
		interface CheckOutForCoauthoring extends BuiltinCommand { } // 129
		interface ChooseColumns extends BuiltinCommand { } // 83
		interface CleanView extends BuiltinCommand { } // 58
		interface ClearArchiveMarker extends BuiltinCommand { } // 29
		interface ClearLocalCache extends BuiltinCommand { } // 40
		interface ClientSettings extends BuiltinCommand { } // 37
		interface CompleteAssignment extends BuiltinCommand { } // 25
		interface ConvertToDocument extends BuiltinCommand { } // 6
		interface ConvertToDocumentFiles extends BuiltinCommand { } // 7
		interface ConvertToMultiFilePDF extends BuiltinCommand { } // 82
		interface ConvertToOneMultiFileDocument extends BuiltinCommand { } // 32
		interface ConvertToSearchablePDF extends BuiltinCommand { } // 46
		interface ConvertToSingleFileDocument extends BuiltinCommand { } // 31
		interface ConvertToSingleFilePDF extends BuiltinCommand { } // 81
		interface Copy extends BuiltinCommand { } // 73
		interface CreateOrGetShortcut extends BuiltinCommand { } // 64
		interface CreateShortcut extends BuiltinCommand { } // 65
		interface CurrentGroupingLevel extends BuiltinCommand { } // 117
		interface CustomizePropertyFolder extends BuiltinCommand { } // 144
		interface Cut extends BuiltinCommand { } // 74
		interface Delete extends BuiltinCommand { } // 76
		interface DeleteAll extends BuiltinCommand { } // 90
		interface Demote extends BuiltinCommand { } // 181
		interface Destroy extends BuiltinCommand { } // 91
		interface DiscardFileModifications extends BuiltinCommand { } // 171
		interface EditCollectionMembership extends BuiltinCommand { } // 96
		interface EditOneAnnotation extends BuiltinCommand { } // 159
		interface EditRelationship extends BuiltinCommand { } // 99
		interface EndCoauthoring extends BuiltinCommand { } // 131
		interface ExportObjects extends BuiltinCommand { } // 79
		interface ExportSearchBarConditions extends BuiltinCommand { } // 80
		interface ExternalRepositories extends BuiltinCommand { } // 176
		interface FIRST extends BuiltinCommand { } // 1
		interface GoOffline extends BuiltinCommand { } // 35
		interface GoOnline extends BuiltinCommand { } // 34
		interface GoToCustomView extends BuiltinCommand { } // 124
		interface GroupBy extends BuiltinCommand { } // 121
		interface GroupFoldersBy extends BuiltinCommand { } // 122
		interface GroupFoldersByFirstLetters extends BuiltinCommand { } // 115
		interface GroupObjectsByFirstLetters extends BuiltinCommand { } // 114
		interface GroupObjectsByObjectType extends BuiltinCommand { } // 54
		interface GroupViewsAndFolders extends BuiltinCommand { } // 55
		interface HideAllVisualAnnotations extends BuiltinCommand { } // 158
		interface HideOrShowEmptyFolders extends BuiltinCommand { } // 119
		interface HideView extends BuiltinCommand { } // 56
		interface HitHighlighting extends BuiltinCommand { } // 128
		interface ImportFilesAndFolders extends BuiltinCommand { } // 8
		interface InvertSelection extends BuiltinCommand { } // 86
		interface LabelThisVersion extends BuiltinCommand { } // 93
		interface LogOut extends BuiltinCommand { } // 36
		interface MakeCopy extends BuiltinCommand { } // 9
		interface MarkApproved extends BuiltinCommand { } // 163
		interface MarkComplete extends BuiltinCommand { } // 123
		interface MarkFolderForOfflineAvailability extends BuiltinCommand { } // 15
		interface MarkForArchiving extends BuiltinCommand { } // 28
		interface MarkForOfflineAvailability extends BuiltinCommand { } // 16
		interface MarkRejected extends BuiltinCommand { } // 164
		interface MFilesGuidedTour extends BuiltinCommand { } // 142
		interface MFilesHelp extends BuiltinCommand { } // 141
		interface ModifyVersionDetails extends BuiltinCommand { } // 92
		interface NavigationPane_Off extends BuiltinCommand { } // 155
		interface NavigationPane_On extends BuiltinCommand { } // 154
		interface NewAnnotation extends BuiltinCommand { } // 161
		interface NewAssignment extends BuiltinCommand { } // 23
		interface NewObject extends BuiltinCommand { } // 87
		interface NewOfflineFilter extends BuiltinCommand { } // 3
		interface NewPropertyFolder extends BuiltinCommand { } // 5
		interface NewSubobject extends BuiltinCommand { } // 94
		interface NewTraditionalFolder extends BuiltinCommand { } // 4
		interface NewView extends BuiltinCommand { } // 2
		interface NewWindow extends BuiltinCommand { } // 78
		interface NotificationSettings extends BuiltinCommand { } // 39
		interface OpenFolderLocation extends BuiltinCommand { } // 174
		interface Paste extends BuiltinCommand { } // 75
		interface PasteAsMultiFileDocument extends BuiltinCommand { } // 84
		interface Properties extends BuiltinCommand { } // 14
		interface Refresh extends BuiltinCommand { } // 88
		interface RejectAssignment extends BuiltinCommand { } // 166
		interface RemoveCollectionMembership extends BuiltinCommand { } // 97
		interface RemoveCurrentGroupingLevel extends BuiltinCommand { } // 118
		interface RemoveDashboardFromViewLocBottom extends BuiltinCommand { } // 72
		interface RemoveDashboardFromViewLocMain extends BuiltinCommand { } // 70
		interface RemoveDashboardFromViewLocRight extends BuiltinCommand { } // 71
		interface RemoveFromFavorites extends BuiltinCommand { } // 63
		interface RemoveOfflineAvailability extends BuiltinCommand { } // 17
		interface RemoveRelationship extends BuiltinCommand { } // 100
		interface RemoveReportFromViewLocBottom extends BuiltinCommand { } // 72
		interface RemoveReportFromViewLocMain extends BuiltinCommand { } // 70
		interface RemoveReportFromViewLocRight extends BuiltinCommand { } // 71
		interface Rename extends BuiltinCommand { } // 77
		interface ReplaceWithFile extends BuiltinCommand { } // 33
		interface ReplaceWithFileFromScanner extends BuiltinCommand { } // 45
		interface ResetUISettingsToDefaults extends BuiltinCommand { } // 60
		interface ResolveConflictDiscardThis extends BuiltinCommand { } // 135
		interface ResolveConflictKeepThis extends BuiltinCommand { } // 134
		interface RightPane_Minimized extends BuiltinCommand { } // 149
		interface RightPane_Normal extends BuiltinCommand { } // 148
		interface RightPane_Off extends BuiltinCommand { } // 150
		interface RollBack extends BuiltinCommand { } // 89
		interface SaveAnnotation extends BuiltinCommand { } // 160
		interface SaveAsCommonUISettings extends BuiltinCommand { } // 61
		interface SaveAsPDF extends BuiltinCommand { } // 50
		interface SelectAll extends BuiltinCommand { } // 85
		interface SendCoauthoringLink extends BuiltinCommand { } // 133
		interface SendCopyByEmail extends BuiltinCommand { } // 48
		interface SendLinkByEmail extends BuiltinCommand { } // 47
		interface SendPDFByEmail extends BuiltinCommand { } // 49
		interface ServerAdmin extends BuiltinCommand { } // 38
		interface SharedByMe extends BuiltinCommand { } // 169
		interface SharePublicLink extends BuiltinCommand { } // 168
		interface ShareViaSkyDrive extends BuiltinCommand { } // 137
		interface ShareViaSkyDriveAsPDF extends BuiltinCommand { } // 138
		interface ShowAllVisualAnnotations extends BuiltinCommand { } // 157
		interface ShowAssignments extends BuiltinCommand { } // 24
		interface ShowBottomPane extends BuiltinCommand { } // 52
		interface ShowCollectionMembers extends BuiltinCommand { } // 20
		interface ShowComments extends BuiltinCommand { } // 22
		interface ShowHistory extends BuiltinCommand { } // 18
		interface ShowMetadataInBottomPane extends BuiltinCommand { } // 140
		interface ShowMetadataInRightPane extends BuiltinCommand { } // 139
		interface ShowNavigationPane extends BuiltinCommand { } // 143
		interface ShowOfflineSyncStatus extends BuiltinCommand { } // 182
		interface ShowOriginalObject extends BuiltinCommand { } // 132
		interface ShowPreviewPane extends BuiltinCommand { } // 53
		interface ShowPropertiesPane extends BuiltinCommand { } // 52
		interface ShowRelationships extends BuiltinCommand { } // 19
		interface ShowRightPane extends BuiltinCommand { } // 53
		interface ShowSearchRefinementOptions extends BuiltinCommand { } // 173
		interface ShowSearchResultsFromMultipleVaults extends BuiltinCommand { } // 172
		interface ShowTaskPane extends BuiltinCommand { } // 177
		interface ShowVisualAnnotations extends BuiltinCommand { } // 156
		interface StartSearching extends BuiltinCommand { } // 175
		interface SubMenu_Archiving extends BuiltinCommand { } // 109
		interface SubMenu_BrowseRelatedObjects extends BuiltinCommand { } // 108
		interface SubMenu_Dashboards extends BuiltinCommand { } // 113
		interface SubMenu_DisplayMode extends BuiltinCommand { } // 105
		interface Submenu_DocumentX extends BuiltinCommand { } // 127
		interface SubMenu_NewFile extends BuiltinCommand { } // 102
		interface SubMenu_NewObject extends BuiltinCommand { } // 101
		interface SubMenu_OfflineAvailability extends BuiltinCommand { } // 107
		interface SubMenu_RefreshExtObjects extends BuiltinCommand { } // 112
		interface SubMenu_Reports extends BuiltinCommand { } // 113
		interface SubMenu_ScanningAndOCR extends BuiltinCommand { } // 111
		interface SubMenu_Send extends BuiltinCommand { } // 104
		interface Submenu_VaultX extends BuiltinCommand { } // 125
		interface Submenu_ViewX extends BuiltinCommand { } // 126
		interface SubMenu_WindowsCommands extends BuiltinCommand { } // 103
		interface SubMenu_Workflow extends BuiltinCommand { } // 110
		interface SubstituteUsers extends BuiltinCommand { } // 51
		interface TaskPane_Minimized extends BuiltinCommand { } // 179
		interface TaskPane_Normal extends BuiltinCommand { } // 178
		interface TaskPane_Off extends BuiltinCommand { } // 180
		interface UncustomizePropertyFolder extends BuiltinCommand { } // 145
		interface Undefined extends BuiltinCommand { } // 0
		interface Undelete extends BuiltinCommand { } // 30
		interface UndoCheckOut extends BuiltinCommand { } // 13
		interface UnhideView extends BuiltinCommand { } // 57
		interface UnhideViews extends BuiltinCommand { } // 59
		interface UploadFiles extends BuiltinCommand { } // 170
		interface UseCompactLayout extends BuiltinCommand { } // 147
		interface UseNormalLayout extends BuiltinCommand { } // 146
		interface ViewEditSubobjects extends BuiltinCommand { } // 21
		interface Workflow extends BuiltinCommand { } // 27
	}

	/** 
	 * Enumerations for emptiness state of a listing.
	 */
	export interface ListingEmptinessState { }
	namespace ListingEmptinessState {
		interface Empty extends ListingEmptinessState { } // 3
		interface NotEmpty extends ListingEmptinessState { } // 2
		interface NotYetKnown extends ListingEmptinessState { } // 1
	}

	/**
	 * Enumerations for search features.
	 */
	export interface SearchFeature { }
	namespace SearchFeature {
		interface FacetSearch extends SearchFeature { } // 1
		interface MultiVaultSearch extends SearchFeature { } // 2
		interface Undefined extends SearchFeature { } // 0
	}

	/**
	 * Enumerations for UI Ext events.
	 */
	export interface Event { }
	namespace Event {
		interface ActiveListingChanged extends Event { } // 17
		interface AddObjectFile extends Event { } // 53
		interface AddObjectsToFavorites extends Event { } // 81
		interface AddObjectToFavorites extends Event { } // 79
		interface AutoInstallScheduleChanged extends Event { } // 170
		interface BuiltinCommand extends Event { } // 22
		interface ChangeVaultLanguage extends Event { } // 100
		interface CheckInObject extends Event { } // 59
		interface CheckInObjects extends Event { } // 61
		interface CheckOutObject extends Event { } // 63
		interface CheckOutObjects extends Event { } // 65
		interface CloseWindow extends Event { } // 33
		interface ContentChanged extends Event { } // 26
		interface CreateObject extends Event { } // 35
		interface CrossApplicationBroadcast extends Event { } // 167
		interface CrossApplicationNotification extends Event { } // 168
		interface CustomCommand extends Event { } // 23
		interface DestroyObject extends Event { } // 37
		interface DestroyObjects extends Event { } // 39
		interface DestroyObjectVersion extends Event { } // 41
		interface DestroyObjectVersions extends Event { } // 43
		interface DragEntered extends Event { } // 160
		interface DragLeft extends Event { } // 161
		interface DragOver extends Event { } // 162
		interface FacetValuesError extends Event { } // 157
		interface FacetValuesReady extends Event { } // 156
		interface HidePane extends Event { } // 5
		interface HideTab extends Event { } // 146
		interface ItemsDropped extends Event { } // 159
		interface ListingActivated extends Event { } // 29
		interface ListingDeactivated extends Event { } // 30
		interface ListingUpdated extends Event { } // 169
		interface LoggedIn extends Event { } // 102
		interface LogOut extends Event { } // 99
		interface MinimizedStateChanged extends Event { } // 21
		interface ModifyObjectVersionLabels extends Event { } // 87
		interface NewBottomPane extends Event { } // 12
		interface NewCommands extends Event { } // 16
		interface NewCommonDialogShellFrame extends Event { } // 9
		interface NewEmbeddedShellFrame extends Event { } // 10
		interface NewNormalShellFrame extends Event { } // 8
		interface NewRightPane extends Event { } // 14
		interface NewSearchPane extends Event { } // 13
		interface NewShellFrame extends Event { } // 7
		interface NewShellListing extends Event { } // 15
		interface NewSpecialShellFrame extends Event { } // 152
		interface NewTab extends Event { } // 18
		interface NewTaskPane extends Event { } // 11
		interface NewTopPane extends Event { } // 166
		interface NewVaultEntry extends Event { } // 34
		interface Notification extends Event { } // 1
		interface ObjectAddedToFavorites extends Event { } // 80
		interface ObjectCheckedIn extends Event { } // 60
		interface ObjectCheckedOut extends Event { } // 64
		interface ObjectCheckoutsUndone extends Event { } // 70
		interface ObjectCheckoutUndone extends Event { } // 68
		interface ObjectCreated extends Event { } // 36
		interface ObjectDestroyed extends Event { } // 38
		interface ObjectFileAdded extends Event { } // 54
		interface ObjectFileRemoved extends Event { } // 56
		interface ObjectFileRenamed extends Event { } // 58
		interface ObjectLevelPropertySet extends Event { } // 90
		interface ObjectOfflineAvailabilityRemoved extends Event { } // 94
		interface ObjectOfflineAvailabilitySet extends Event { } // 93
		interface ObjectRemoved extends Event { } // 46
		interface ObjectRemovedFromFavorites extends Event { } // 84
		interface ObjectsAddedToFavorites extends Event { } // 82
		interface ObjectsCheckedIn extends Event { } // 62
		interface ObjectsCheckedOut extends Event { } // 66
		interface ObjectsDestroyed extends Event { } // 40
		interface ObjectsRemoved extends Event { } // 48
		interface ObjectsRemovedFromFavorites extends Event { } // 86
		interface ObjectsUndeleted extends Event { } // 52
		interface ObjectUndeleted extends Event { } // 50
		interface ObjectVersionDestroyed extends Event { } // 42
		interface ObjectVersionLabelsModified extends Event { } // 88
		interface ObjectVersionPermissionsSet extends Event { } // 78
		interface ObjectVersionRolledBack extends Event { } // 72
		interface ObjectVersionsDestroyed extends Event { } // 44
		interface OfflineSyncStarted extends Event { } // 171
		interface OfflineSyncStopped extends Event { } // 172
		interface PaneResized extends Event { } // 6
		interface PropertiesOfObjectVersionSet extends Event { } // 74
		interface PropertiesOfObjectVersionsSet extends Event { } // 76
		interface RemoveObject extends Event { } // 45
		interface RemoveObjectFile extends Event { } // 55
		interface RemoveObjectFromFavorites extends Event { } // 83
		interface RemoveObjectOfflineAvailability extends Event { } // 92
		interface RemoveObjects extends Event { } // 47
		interface RemoveObjectsFromFavorites extends Event { } // 85
		interface RenameObjectFile extends Event { } // 57
		interface RollBackObjectVersion extends Event { } // 71
		interface SearchCriteriaChanged extends Event { } // 153
		interface SearchCriteriaReset extends Event { } // 154
		interface SearchInitiated extends Event { } // 31
		interface SearchReady extends Event { } // 32
		interface SelectedItemsChanged extends Event { } // 25
		interface SelectionChanged extends Event { } // 24
		interface SetObjectLevelProperty extends Event { } // 89
		interface SetObjectOfflineAvailability extends Event { } // 91
		interface SetObjectVersionPermissions extends Event { } // 77
		interface SetPropertiesOfObjectVersion extends Event { } // 73
		interface SetPropertiesOfObjectVersions extends Event { } // 75
		interface ShowContextMenu extends Event { } // 27
		interface ShowMainMenu extends Event { } // 28
		interface ShowPane extends Event { } // 4
		interface ShowTab extends Event { } // 145
		interface Started extends Event { } // 2
		interface Stop extends Event { } // 3
		interface TabSelected extends Event { } // 19
		interface TabUnselected extends Event { } // 20
		interface TemporarySearchModified extends Event { } // 155
		interface UndeleteObject extends Event { } // 49
		interface UndeleteObjects extends Event { } // 51
		interface UndoObjectCheckout extends Event { } // 67
		interface UndoObjectCheckouts extends Event { } // 69
		interface VaultLanguageChanged extends Event { } // 101
	}

	/** Event Callback types */

	/**
	 * Callback to be triggered when an item or child item changes.
	 * @param { string } appGuid - The ID of the application sending the broadcast.
	 * @param { string } msgID - The ID of the message being broadcast.
	 * @param { * } data - The payload data of the broadcast.
	 */
	type CrossApplicationBroadcastCallback = (appGuid: string, msgID: string, data: any) => any;

	/**
	 * Callback to be triggered when an item or child item changes.
	 * @param { string } appGuid - The ID of the application sending the notification.
	 * @param { string } msgID - The ID of the message being sent.
	 * @param { * } data - The payload data of the notification.
	 */
	interface CrossApplicationNotificationCallback { (appGuid: string, msgID: string, data: any): any; }

	/**
	 * An interface for registering to listen events from M-Files Client Application state changes.
	 */
	interface ICommands {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: ICommandsEvents;

		/**
		 * Resolves a name for a command.
		 * @param {number} command - The command id, can be builtin command enum value or custom command id.
		 * @returns {string} - The command name.
		 */
		GetCommandName(command: number): string

		/**
		 * Sets command state for builtin or custom command in specified location.
		 * @param {number} command - The command id, can be builtin command enum value or custom command id.
		 * @param {CommandLocation} commandLocation - Command location which is affected.
		 * @param {CommandState} commandState - Command state to set.
		 */
		SetCommandState(command: number, commandLocation: CommandLocation, commandState: CommandState): void

		/**
		 * Creates a custom command.
		 * @param {string} commandName - String containing command name.
		 * @returns {number} - The command id of created custom command.
		 */
		CreateCustomCommand(commandName: string): number

		/**
		 * Deletes a custom command.
		 * @param {number} command - Command id of custom command.
		 */
		DeleteCustomCommand(command: number): void

		/**
		 * Sets icon for custom command. Only task pane is supported.
		 * @param {number} command - The command id of existing custom command.
		 * @param {DefaultIcon} icon - Index of task pane default icon.
		 */
		SetIcon(command: number, icon: DefaultIcon): void

		/**
		 * Sets icon for custom command. Only task pane is supported.
		 * @param {number} command - The command id of existing custom command.
		 * @param {string} iconPath - String containing path to icon.
		 */
		SetIconFromPath(command: number, iconPath: string): void

		/**
		 * Adds existing custom command to specified menu location.
		 * @param {number} customCommand - The command id of custom command to.
		 * @param {MenuLocation} location - Detailed menu location where to add existing custom command.
		 * @param {number} orderPriority - Order of command in this location.
		 */
		AddCustomCommandToMenu(customCommand: number, location: MenuLocation, orderPriority: number): void

		/**
		 * Adds existing custom command to specified menu location.
		 * @param {number} customCommand - The command id of custom command to.
		 * @param {MenuLocation} location - Detailed menu location where from remove the custom command.
		 */
		RemoveCustomCommandFromMenu(customCommand: number, location: MenuLocation): void

		/**
		 * Executes the specified command.
		 * @param {number} command - The command ID. Can be a built-in command enum value or a custom command ID.
		 * @param {*} arguments - Command argument or an arguments object, if the command requires arguments. Otherwise null.
		 */
		ExecuteCommand(command: number, arguments: any): void

		/**
		 * Gets the command state for builtin or custom command in specified location.
		 * @param {number} command - The command id, can be builtin command enum value or custom command id.
		 * @param {CommandLocation} commandLocation - Command location which is affected.
		 * @param {boolean} includeBuiltInState - Takes the built-in state of the command into account.
		 * @param {boolean} includeScriptSpecifiedState - Takes the script-specified state of the command into account.
		 * @returns {CommandState} - The command state.
		 */
		GetCommandState(
			command: number,
			commandLocation: CommandLocation,
			includeBuiltInState: boolean,
			includeScriptSpecifiedState: boolean
		): CommandState
	}

	/**
	 * The Commands specific event registration object.
	 */
	interface ICommandsEventObject {

		// TODO: Events
		OnCustomCommand?: (commandID: number) => void;
		OnBuiltinCommand?: (commandID: number, param: number | null) => boolean;
	}

	/**
	 * The Commands specific event registration interface.
	 */
	interface ICommandsEvents
		extends IEvents, ICommandsEventObject {

		// TODO: Events
		Register(event: Event.CustomCommand, sink: (commandID: number) => void): number;
		Register(event: Event.BuiltinCommand, sink: (commandID: number, param: number | null) => boolean): number;
	}

	/** An interface for object factory object. The object shows as global "MFiles" object. */
	interface ICommonFunctions {

		/**
		 * Creates a new MFiles API object.
		 * @param {string} name - The type name of the object to create, e.g. "ObjVer".
		 * @returns {any} - The new object.
		 */
		CreateInstance(name: string): any;

		/**
		 * Enables the exception to be propagated for caller process.
		 * @param {Error} exception - The exception to modify.
		 */
		EnableExceptionPropagation(exception: Error): void;

		/**
		 * Reports an exception. The exception may be displayed for user, or written to the event log.
		 * @param {Error} exception - The exception to handle.
		 */
		ReportException(exception: Error): void
		ReportException(exception: string): void
		ReportException(exception: any): void

		/**
		 * Throws an error with description.
		 * @param {string} description - The error description.
		 */
		ThrowError(name: string): void;

		/**
		 * Extracts the error description from the error exception object. The short description is convenient to the user.
		 * @param {Error} exception - The exception to examine.
		 * @returns {string} - The error description.
		 */
		GetErrorDescription(exception: Error): string;

		/**
		 * Extracts the long error description from the error exception object. The long description may contain the call stack.
		 * @param {Error} exception - The exception to examine.
		 * @returns {string} - The error description.
		 */
		GetLongErrorDescription(exception: Error): string;

		/**
		 * Persists string data to the registry.
		 * @param {string} name - The data value identification.
		 * @param {boolean} privateData - True if the data is saved to script application private data set.
		 * @param {string} data - True if the data is saved to script application private data set.
		 */
		MethodTemplate(name: string, privateData: boolean, data: string): void;

		/**
		 * Description
		 * @param {string} name - The data value identification.
		 * @param {boolean} privateData - True if the data is retrieved from script application private data set.
		 * @returns {string} - True if the data is saved to script application private data set.
		 */
		RetrieveStringData(name: string, privateData: boolean): string;

		/**
		 * Reads the text file content.
		 * @param {string} fileName - The file name to read. The file must be included in client extension application.
		 * @returns {string} - The text file content.
		 */
		ReadTextFile(fileName: string): string;

		/**
		 * Gets the current application path (full path). To be used with custom solutions, paths used with application interface do not need to use this method because they are always relative to the application path.
		 * @var {string} 
		 */
		ApplicationPath: string;

		/**
		 * Launch the context-sensitive help.
		 * @param {string} helpID - The context ID for the help.
		 */
		LaunchHelp(helpID: string): void;

		/**
		 * Create a timer to trigger an asynchronous method call after a specified time interval.
		 * @param {number} timeoutInMs - The timeout in milliseconds.
		 * @param {function} callbackMethod - The method to call.
		 * @returns {number} - The id of the timer for later killing.
		 */
		SetTimer(timeoutInMs: number, callbackMethod: () => void): number;


		/**
		 * Creates a managed object from a class in assembly.
		 * @param {string} assemblyFile - //!< The assembly from where the class is looked up. E.g. "myassembly.dll". The assembly is relative to the current application folder.
		 * @param {string} className - The object class to instantiate. E.g. "MyNamespace.MyClass".
		 * @returns {any} - Receives the managed object.
		 */
		CreateObjectCLR(assemblyFile: string, className: string): any;

		/**
		 * Kill a timer that was previously created with SetTimer-method.
		 * @param {number} timerId - paramDesc
		 */
		KillTimer(timerId: number): void;

		/**
		 * Returns calendar info.
		 * For internal use only. Do not call. Can be deprecated in future.
		 * (HIDDEN)
		 * @param {string} name - The requested calendar info.
		 * @returns {string} - Receives calendar info.
		 */
		GetCalendarInfo(stringId: string): string;

		/**
		 * Returns localized string resource.
		 * For internal use only. Do not call. Can be deprecated in future.
		 * (HIDDEN)
		 * @param {string} name - The identifier of string.
		 * @returns {string} - Receives localized text.
		 */
		GetStringResource(stringId: string): string;

		/**
		 * Reads the registry value from registry.
		 * @param {boolean} userSpecific - True to access registry keys under HKEY_CURRENT_USER, false to access under HKEY_LOCAL_MACHINE.
		 * @param {string} key - The registry key where to write.
		 * @param {string} valueName - The name of the value. Use empty string to write the default value of a registry key.
		 * @returns {*} The registry value, or empty if the registry value was not found.
		 */
		ReadFromRegistry(userSpecific: boolean, key: string, valueName: string): any;

		/**
		 * Writes a new value to the registry.
		 * @param {boolean} userSpecific - True to access registry keys under HKEY_CURRENT_USER, false to access under HKEY_LOCAL_MACHINE.
		 * @param {string} key - The registry key where to write.
		 * @param {string} valueName - The name of the value. Use empty string to write the default value of a registry key.
		 * @param {string | number} value - The value. Use empty string to indicate the default value of a registry key.
		 * @param {string} valueType - The type of the value. "REG_DWORD" for number values, "REG_SZ" for string values.
		 */
		WriteToRegistry(userSpecific: boolean, key: string, valueName: string, value: number, valueType: "REG_DWORD"): void;
		WriteToRegistry(userSpecific: boolean, key: string, valueName: string, value: string, valueType: "REG_SZ"): void;
		WriteToRegistry(userSpecific: boolean, key: string, valueName: string, value: any, valueType: any): void;

		/**
		 * Deletes the registry key recursively.
		 * @param {boolean} userSpecific - True to access registry keys under HKEY_CURRENT_USER, false to access under HKEY_LOCAL_MACHINE.
		 * @param {string} key - The registry key to delete.
		 */
		DeleteRegistryKey(userSpecific: boolean, key: string): void;

		/**
		 * Reads the registry value from registry.
		 * @param {boolean} userSpecific - True to access registry keys under HKEY_CURRENT_USER, false to access under HKEY_LOCAL_MACHINE.
		 * @param {string} key - The registry key where to write.
		 * @param {string} valueName - The name of the value. Use empty string to indicate the default value of a registry key.
		 * @returns {any} - The value.
		 */
		MethodTemplate(userSpecific: boolean, key: string, valueName: string): any;

		/**
		 * Deletes the registry value.
		 * @param {boolean} userSpecific - True to access registry keys under HKEY_CURRENT_USER, false to access under HKEY_LOCAL_MACHINE.
		 * @param {string} key - The registry key.
		 * @param {string} valueName - The name of the value to delete. Use empty string to indicate the default value of a registry key.
		 */
		DeleteRegistryValue(userSpecific: boolean, key: string, valueName: string): void;

		/**
		 * Executes the URL.
		 * @param {string} url The URL to execute.
		 */
		ExecuteURL(urlstring: string): void;


		/** Enumerations for command states. */
		CommandState: {

			/** Undefined. */
			Undefined: CommandState.Undefined & number;  // 0

			/** The command's menu item is active (enabled, visible and selectable).*/
			Active: CommandState.Active & number;  // 1

			/** The command's menu item is inactive (i.e. dimmed, grayed, not selectable but visible).*/
			Inactive: CommandState.Inactive & number;  // 2

			/** The command's menu item is hidden (not visible, not selectable).*/
			Hidden: CommandState.Hidden & number;  // 3
		};

		/** Enumerations for command locations. */
		CommandLocation: {

			/** Undefined. */
			Undefined: CommandLocation.Undefined & number;  // 0x0

			/** The command is located in main menu.. */
			MainMenu: CommandLocation.MainMenu & number;  // 0x1

			/** The command is located in context menu.. */
			ContextMenu: CommandLocation.ContextMenu & number;  // 0x2

			/** The command is located in task pane.. */
			TaskPane: CommandLocation.TaskPane & number;  // 0x4

			/** Affects to all locations.. */
			All: CommandLocation.All & number;  // 0xfffffff
		};

		/** Enumerations for command groups in task pane.. */
		TaskPaneGroup: {
			New: TaskPaneGroup.New & number // 1
			ViewAndModify: TaskPaneGroup.ViewAndModify & number // 2
			GoTo: TaskPaneGroup.GoTo & number // 3
			Main: TaskPaneGroup.Main & number // 4
		};

		/**
		 * Enumerations for menu locations.
		 * Used to specify the detailed location to add custom commands.
		 */
		MenuLocation: {
			ContextMenu_DefaultCommand: MenuLocation.ContextMenu_DefaultCommand & number;  // 20
			ContextMenu_Top: MenuLocation.ContextMenu_Top & number;  // 21
			ContextMenu_BeforeWindowsCommands: MenuLocation.ContextMenu_BeforeWindowsCommands & number;  // 22
			ContextMenu_AfterWindowsCommands: MenuLocation.ContextMenu_AfterWindowsCommands & number;  // 23
			ContextMenu_ObjectCreation: MenuLocation.ContextMenu_ObjectCreation & number;  // 24
			ContextMenu_FileCreation: MenuLocation.ContextMenu_FileCreation & number;  // 25
			ContextMenu_ObjectOperations: MenuLocation.ContextMenu_ObjectOperations & number;  // 26
			ContextMenu_FolderSpecific: MenuLocation.ContextMenu_FolderSpecific & number;  // 27
			ContextMenu_SingleFolderSpecific: MenuLocation.ContextMenu_SingleFolderSpecific & number;  // 28
			ContextMenu_ViewVisibility: MenuLocation.ContextMenu_ViewVisibility & number;  // 29
			ContextMenu_Misc1_Top: MenuLocation.ContextMenu_Misc1_Top & number;  // 30
			ContextMenu_Misc1_Middle: MenuLocation.ContextMenu_Misc1_Middle & number;  // 31
			ContextMenu_Misc1_Bottom: MenuLocation.ContextMenu_Misc1_Bottom & number;  // 32
			ContextMenu_HistorySpecific: MenuLocation.ContextMenu_HistorySpecific & number;  // 33
			ContextMenu_RelationshipsSpecific: MenuLocation.ContextMenu_RelationshipsSpecific & number;  // 34
			ContextMenu_CollectionMembersSpecific: MenuLocation.ContextMenu_CollectionMembersSpecific & number;  // 35
			ContextMenu_Deletion: MenuLocation.ContextMenu_Deletion & number;  // 36
			ContextMenu_Edit: MenuLocation.ContextMenu_Edit & number;  // 37
			ContextMenu_Misc2_Top: MenuLocation.ContextMenu_Misc2_Top & number;  // 38
			ContextMenu_Misc2_Middle: MenuLocation.ContextMenu_Misc2_Middle & number;  // 39
			ContextMenu_Misc2_Bottom: MenuLocation.ContextMenu_Misc2_Bottom & number;  // 40
			ContextMenu_DocumentConversions: MenuLocation.ContextMenu_DocumentConversions & number;  // 41
			ContextMenu_BeforeProperties: MenuLocation.ContextMenu_BeforeProperties & number;  // 42
			ContextMenu_Bottom: MenuLocation.ContextMenu_Bottom & number;  // 43
			ContextMenu_PropertyFolder: MenuLocation.ContextMenu_PropertyFolder & number;  // 44
		};

		/** Enumerations for default icons. */
		DefaultIcon: {
			CheckOut: DefaultIcon.CheckOut & number // 0
			CheckIn: DefaultIcon.CheckIn & number // 1
			UndoCheckOut: DefaultIcon.UndoCheckOut & number // 2
			History: DefaultIcon.History & number // 4
			Properties: DefaultIcon.Properties & number // 5
			MakeCopy: DefaultIcon.MakeCopy & number // 6
			View: DefaultIcon.View & number // 8
			Root: DefaultIcon.Root & number // 9
			Workflow: DefaultIcon.Workflow & number // 11
			LogOut: DefaultIcon.LogOut & number // 12
			GoOnline: DefaultIcon.GoOnline & number // 13
			GoOffline: DefaultIcon.GoOffline & number // 14
			Assignment: DefaultIcon.Assignment & number // 15
			MarkComplete: DefaultIcon.MarkComplete & number // 16
			TraditionalFolder: DefaultIcon.TraditionalFolder & number // 17
			PropertyFolder: DefaultIcon.PropertyFolder & number // 18
			File: DefaultIcon.File & number // 19
			MFD: DefaultIcon.MFD & number // 20
			PrivateView: DefaultIcon.PrivateView & number // 21
			Collection: DefaultIcon.Collection & number // 22
			ChangeState: DefaultIcon.ChangeState & number // 24
			RelationShips: DefaultIcon.RelationShips & number // 25
			SelectedState: DefaultIcon.SelectedState & number // 26
		};

		/** Enumerations for builtin commands. */
		BuiltinCommand: {
			Undefined: BuiltinCommand.Undefined & number;  // 0
			FIRST: BuiltinCommand.FIRST & number;  // 1
			NewView: BuiltinCommand.NewView & number;  // 2
			NewOfflineFilter: BuiltinCommand.NewOfflineFilter & number;  // 3
			NewTraditionalFolder: BuiltinCommand.NewTraditionalFolder & number;  // 4
			NewPropertyFolder: BuiltinCommand.NewPropertyFolder & number;  // 5
			ConvertToDocument: BuiltinCommand.ConvertToDocument & number;  // 6
			ConvertToDocumentFiles: BuiltinCommand.ConvertToDocumentFiles & number;  // 7
			ImportFilesAndFolders: BuiltinCommand.ImportFilesAndFolders & number;  // 8
			MakeCopy: BuiltinCommand.MakeCopy & number;  // 9
			CheckOut: BuiltinCommand.CheckOut & number;  // 10
			CheckIn: BuiltinCommand.CheckIn & number;  // 11
			CheckInWithComments: BuiltinCommand.CheckInWithComments & number;  // 12
			UndoCheckOut: BuiltinCommand.UndoCheckOut & number;  // 13
			Properties: BuiltinCommand.Properties & number;  // 14
			MarkFolderForOfflineAvailability: BuiltinCommand.MarkFolderForOfflineAvailability & number;  // 15
			MarkForOfflineAvailability: BuiltinCommand.MarkForOfflineAvailability & number;  // 16
			RemoveOfflineAvailability: BuiltinCommand.RemoveOfflineAvailability & number;  // 17
			ShowHistory: BuiltinCommand.ShowHistory & number;  // 18
			ShowRelationships: BuiltinCommand.ShowRelationships & number;  // 19
			ShowCollectionMembers: BuiltinCommand.ShowCollectionMembers & number;  // 20
			ViewEditSubobjects: BuiltinCommand.ViewEditSubobjects & number;  // 21
			ShowComments: BuiltinCommand.ShowComments & number;  // 22
			NewAssignment: BuiltinCommand.NewAssignment & number;  // 23
			ShowAssignments: BuiltinCommand.ShowAssignments & number;  // 24
			CompleteAssignment: BuiltinCommand.CompleteAssignment & number;  // 25
			ChangeState: BuiltinCommand.ChangeState & number;  // 26
			Workflow: BuiltinCommand.Workflow & number;  // 27
			MarkForArchiving: BuiltinCommand.MarkForArchiving & number;  // 28
			ClearArchiveMarker: BuiltinCommand.ClearArchiveMarker & number;  // 29
			Undelete: BuiltinCommand.Undelete & number;  // 30
			ConvertToSingleFileDocument: BuiltinCommand.ConvertToSingleFileDocument & number;  // 31
			ConvertToOneMultiFileDocument: BuiltinCommand.ConvertToOneMultiFileDocument & number;  // 32
			ReplaceWithFile: BuiltinCommand.ReplaceWithFile & number;  // 33
			GoOnline: BuiltinCommand.GoOnline & number;  // 34
			GoOffline: BuiltinCommand.GoOffline & number;  // 35
			LogOut: BuiltinCommand.LogOut & number;  // 36
			ClientSettings: BuiltinCommand.ClientSettings & number;  // 37
			ServerAdmin: BuiltinCommand.ServerAdmin & number;  // 38
			NotificationSettings: BuiltinCommand.NotificationSettings & number;  // 39
			ClearLocalCache: BuiltinCommand.ClearLocalCache & number;  // 40
			ChangePassword: BuiltinCommand.ChangePassword & number;  // 41
			ChangeLanguage: BuiltinCommand.ChangeLanguage & number;  // 42
			AddDocumentFromScanner: BuiltinCommand.AddDocumentFromScanner & number;  // 43
			AddFileFromScanner: BuiltinCommand.AddFileFromScanner & number;  // 44
			ReplaceWithFileFromScanner: BuiltinCommand.ReplaceWithFileFromScanner & number;  // 45
			ConvertToSearchablePDF: BuiltinCommand.ConvertToSearchablePDF & number;  // 46
			SendLinkByEmail: BuiltinCommand.SendLinkByEmail & number;  // 47
			SendCopyByEmail: BuiltinCommand.SendCopyByEmail & number;  // 48
			SendPDFByEmail: BuiltinCommand.SendPDFByEmail & number;  // 49
			SaveAsPDF: BuiltinCommand.SaveAsPDF & number;  // 50
			SubstituteUsers: BuiltinCommand.SubstituteUsers & number;  // 51
			ShowBottomPane: BuiltinCommand.ShowBottomPane & number;  // 52
			ShowPropertiesPane: BuiltinCommand.ShowPropertiesPane & number;  // 52  // Synonym. For backwards compatibility.
			ShowRightPane: BuiltinCommand.ShowRightPane & number;  // 53
			ShowPreviewPane: BuiltinCommand.ShowPreviewPane & number;  // 53  // Synonym. For backwards compatibility.
			GroupObjectsByObjectType: BuiltinCommand.GroupObjectsByObjectType & number;  // 54
			GroupViewsAndFolders: BuiltinCommand.GroupViewsAndFolders & number;  // 55
			HideView: BuiltinCommand.HideView & number;  // 56
			UnhideView: BuiltinCommand.UnhideView & number;  // 57
			CleanView: BuiltinCommand.CleanView & number;  // 58
			UnhideViews: BuiltinCommand.UnhideViews & number;  // 59
			ResetUISettingsToDefaults: BuiltinCommand.ResetUISettingsToDefaults & number;  // 60
			SaveAsCommonUISettings: BuiltinCommand.SaveAsCommonUISettings & number;  // 61
			AddToFavorites: BuiltinCommand.AddToFavorites & number;  // 62
			RemoveFromFavorites: BuiltinCommand.RemoveFromFavorites & number;  // 63
			CreateOrGetShortcut: BuiltinCommand.CreateOrGetShortcut & number;  // 64
			CreateShortcut: BuiltinCommand.CreateShortcut & number;  // 65
			AddShortcutToTaskPane: BuiltinCommand.AddShortcutToTaskPane & number;  // 66
			AddDashboardToViewLocMain: BuiltinCommand.AddDashboardToViewLocMain & number;  // 67  // Alias for compatibility
			AddReportToViewLocMain: BuiltinCommand.AddReportToViewLocMain & number;  // 67
			AddDashboardToViewLocRight: BuiltinCommand.AddDashboardToViewLocRight & number;  // 68  // Alias for compatibility
			AddReportToViewLocRight: BuiltinCommand.AddReportToViewLocRight & number;  // 68
			AddDashboardToViewLocBottom: BuiltinCommand.AddDashboardToViewLocBottom & number;  // 69  // Alias for compatibility
			AddReportToViewLocBottom: BuiltinCommand.AddReportToViewLocBottom & number;  // 69
			RemoveDashboardFromViewLocMain: BuiltinCommand.RemoveDashboardFromViewLocMain & number;  // 70  // Alias for compatibility
			RemoveReportFromViewLocMain: BuiltinCommand.RemoveReportFromViewLocMain & number;  // 70
			RemoveDashboardFromViewLocRight: BuiltinCommand.RemoveDashboardFromViewLocRight & number;  // 71  // Alias for compatibility
			RemoveReportFromViewLocRight: BuiltinCommand.RemoveReportFromViewLocRight & number;  // 71
			RemoveDashboardFromViewLocBottom: BuiltinCommand.RemoveDashboardFromViewLocBottom & number;  // 72  // Alias for compatibility
			RemoveReportFromViewLocBottom: BuiltinCommand.RemoveReportFromViewLocBottom & number;  // 72
			Copy: BuiltinCommand.Copy & number;  // 73
			Cut: BuiltinCommand.Cut & number;  // 74
			Paste: BuiltinCommand.Paste & number;  // 75
			Delete: BuiltinCommand.Delete & number;  // 76
			Rename: BuiltinCommand.Rename & number;  // 77
			NewWindow: BuiltinCommand.NewWindow & number;  // 78
			ExportObjects: BuiltinCommand.ExportObjects & number;  // 79
			ExportSearchBarConditions: BuiltinCommand.ExportSearchBarConditions & number;  // 80
			ConvertToSingleFilePDF: BuiltinCommand.ConvertToSingleFilePDF & number;  // 81
			ConvertToMultiFilePDF: BuiltinCommand.ConvertToMultiFilePDF & number;  // 82
			ChooseColumns: BuiltinCommand.ChooseColumns & number;  // 83
			PasteAsMultiFileDocument: BuiltinCommand.PasteAsMultiFileDocument & number;  // 84
			SelectAll: BuiltinCommand.SelectAll & number;  // 85
			InvertSelection: BuiltinCommand.InvertSelection & number;  // 86
			NewObject: BuiltinCommand.NewObject & number;  // 87
			Refresh: BuiltinCommand.Refresh & number;  // 88
			RollBack: BuiltinCommand.RollBack & number;  // 89
			DeleteAll: BuiltinCommand.DeleteAll & number;  // 90
			Destroy: BuiltinCommand.Destroy & number;  // 91
			ModifyVersionDetails: BuiltinCommand.ModifyVersionDetails & number;  // 92
			LabelThisVersion: BuiltinCommand.LabelThisVersion & number;  // 93
			NewSubobject: BuiltinCommand.NewSubobject & number;  // 94
			AddCollectionMember: BuiltinCommand.AddCollectionMember & number;  // 95
			EditCollectionMembership: BuiltinCommand.EditCollectionMembership & number;  // 96
			RemoveCollectionMembership: BuiltinCommand.RemoveCollectionMembership & number;  // 97
			AddRelationship: BuiltinCommand.AddRelationship & number;  // 98
			EditRelationship: BuiltinCommand.EditRelationship & number;  // 99
			RemoveRelationship: BuiltinCommand.RemoveRelationship & number;  // 100
			SubMenu_NewObject: BuiltinCommand.SubMenu_NewObject & number;  // 101
			SubMenu_NewFile: BuiltinCommand.SubMenu_NewFile & number;  // 102
			SubMenu_WindowsCommands: BuiltinCommand.SubMenu_WindowsCommands & number;  // 103
			SubMenu_Send: BuiltinCommand.SubMenu_Send & number;  // 104
			SubMenu_DisplayMode: BuiltinCommand.SubMenu_DisplayMode & number;  // 105
			ChangeViewMode: BuiltinCommand.ChangeViewMode & number;  // 106
			SubMenu_OfflineAvailability: BuiltinCommand.SubMenu_OfflineAvailability & number;  // 107
			SubMenu_BrowseRelatedObjects: BuiltinCommand.SubMenu_BrowseRelatedObjects & number;  // 108
			SubMenu_Archiving: BuiltinCommand.SubMenu_Archiving & number;  // 109
			SubMenu_Workflow: BuiltinCommand.SubMenu_Workflow & number;  // 110
			SubMenu_ScanningAndOCR: BuiltinCommand.SubMenu_ScanningAndOCR & number;  // 111
			SubMenu_RefreshExtObjects: BuiltinCommand.SubMenu_RefreshExtObjects & number;  // 112
			SubMenu_Dashboards: BuiltinCommand.SubMenu_Dashboards & number;  // 113  // Alias for compatibility
			SubMenu_Reports: BuiltinCommand.SubMenu_Reports & number;  // 113
			GroupObjectsByFirstLetters: BuiltinCommand.GroupObjectsByFirstLetters & number;  // 114
			GroupFoldersByFirstLetters: BuiltinCommand.GroupFoldersByFirstLetters & number;  // 115
			AddGroupingLevel: BuiltinCommand.AddGroupingLevel & number;  // 116
			CurrentGroupingLevel: BuiltinCommand.CurrentGroupingLevel & number;  // 117
			RemoveCurrentGroupingLevel: BuiltinCommand.RemoveCurrentGroupingLevel & number;  // 118
			HideOrShowEmptyFolders: BuiltinCommand.HideOrShowEmptyFolders & number;  // 119
			BrowseInThisWindow: BuiltinCommand.BrowseInThisWindow & number;  // 120
			GroupBy: BuiltinCommand.GroupBy & number;  // 121
			GroupFoldersBy: BuiltinCommand.GroupFoldersBy & number;  // 122
			MarkComplete: BuiltinCommand.MarkComplete & number;  // 123
			GoToCustomView: BuiltinCommand.GoToCustomView & number;  // 124
			Submenu_VaultX: BuiltinCommand.Submenu_VaultX & number;  // 125
			Submenu_ViewX: BuiltinCommand.Submenu_ViewX & number;  // 126
			Submenu_DocumentX: BuiltinCommand.Submenu_DocumentX & number;  // 127
			HitHighlighting: BuiltinCommand.HitHighlighting & number;  // 128
			CheckOutForCoauthoring: BuiltinCommand.CheckOutForCoauthoring & number;  // 129
			BeginCoauthoring: BuiltinCommand.BeginCoauthoring & number;  // 130
			EndCoauthoring: BuiltinCommand.EndCoauthoring & number;  // 131
			ShowOriginalObject: BuiltinCommand.ShowOriginalObject & number;  // 132
			SendCoauthoringLink: BuiltinCommand.SendCoauthoringLink & number;  // 133
			ResolveConflictKeepThis: BuiltinCommand.ResolveConflictKeepThis & number;  // 134
			ResolveConflictDiscardThis: BuiltinCommand.ResolveConflictDiscardThis & number;  // 135
			Applications: BuiltinCommand.Applications & number;  // 136
			ShareViaSkyDrive: BuiltinCommand.ShareViaSkyDrive & number;  // 137
			ShareViaSkyDriveAsPDF: BuiltinCommand.ShareViaSkyDriveAsPDF & number;  // 138
			ShowMetadataInRightPane: BuiltinCommand.ShowMetadataInRightPane & number;  // 139
			ShowMetadataInBottomPane: BuiltinCommand.ShowMetadataInBottomPane & number;  // 140
			MFilesHelp: BuiltinCommand.MFilesHelp & number;  // 141
			MFilesGuidedTour: BuiltinCommand.MFilesGuidedTour & number;  // 142
			ShowNavigationPane: BuiltinCommand.ShowNavigationPane & number;  // 143
			CustomizePropertyFolder: BuiltinCommand.CustomizePropertyFolder & number;  // 144
			UncustomizePropertyFolder: BuiltinCommand.UncustomizePropertyFolder & number;  // 145
			UseNormalLayout: BuiltinCommand.UseNormalLayout & number;  // 146
			UseCompactLayout: BuiltinCommand.UseCompactLayout & number;  // 147
			RightPane_Normal: BuiltinCommand.RightPane_Normal & number;  // 148
			RightPane_Minimized: BuiltinCommand.RightPane_Minimized & number;  // 149
			RightPane_Off: BuiltinCommand.RightPane_Off & number;  // 150
			BottomPane_Normal: BuiltinCommand.BottomPane_Normal & number;  // 151
			BottomPane_Minimized: BuiltinCommand.BottomPane_Minimized & number;  // 152
			BottomPane_Off: BuiltinCommand.BottomPane_Off & number;  // 153
			NavigationPane_On: BuiltinCommand.NavigationPane_On & number;  // 154
			NavigationPane_Off: BuiltinCommand.NavigationPane_Off & number;  // 155
			ShowVisualAnnotations: BuiltinCommand.ShowVisualAnnotations & number;  // 156
			ShowAllVisualAnnotations: BuiltinCommand.ShowAllVisualAnnotations & number;  // 157
			HideAllVisualAnnotations: BuiltinCommand.HideAllVisualAnnotations & number;  // 158
			EditOneAnnotation: BuiltinCommand.EditOneAnnotation & number;  // 159
			SaveAnnotation: BuiltinCommand.SaveAnnotation & number;  // 160
			NewAnnotation: BuiltinCommand.NewAnnotation & number;  // 161
			AboutMFiles: BuiltinCommand.AboutMFiles & number;  // 162
			MarkApproved: BuiltinCommand.MarkApproved & number;  // 163
			MarkRejected: BuiltinCommand.MarkRejected & number;  // 164
			ApproveAssignment: BuiltinCommand.ApproveAssignment & number;  // 165
			RejectAssignment: BuiltinCommand.RejectAssignment & number;  // 166
			ChangeStateAdmin: BuiltinCommand.ChangeStateAdmin & number;  // 167
			SharePublicLink: BuiltinCommand.SharePublicLink & number;  // 168
			SharedByMe: BuiltinCommand.SharedByMe & number;  // 169
			UploadFiles: BuiltinCommand.UploadFiles & number;  // 170
			DiscardFileModifications: BuiltinCommand.DiscardFileModifications & number;  // 171
			ShowSearchResultsFromMultipleVaults: BuiltinCommand.ShowSearchResultsFromMultipleVaults & number;  // 172
			ShowSearchRefinementOptions: BuiltinCommand.ShowSearchRefinementOptions & number;  // 173

			// LAST,
			// ALL = 0xfffffff
		};

		/** Enumerations for emptiness state of a listing. */
		ListingEmptinessState: {

			/** Eventual listing state is not yet known (i.e., in the middle of multi-phase search). */
			NotYetKnown: ListingEmptinessState.NotYetKnown & number;  // 1

			/** Listing is not empty. */
			NotEmpty: ListingEmptinessState.NotEmpty & number;  // 2

			/** Listing is empty. */
			Empty: ListingEmptinessState.Empty & number;  // 3
		};

		/** Enumerations for search features. */
		SearchFeature: {

			/** Undefined. */
			Undefined: SearchFeature.Undefined & number;  // 0x0

			/** The facet search is available. */
			FacetSearch: SearchFeature.FacetSearch & number;  // 0x1 

			/** The multi-vault search is available. */
			MultiVaultSearch: SearchFeature.MultiVaultSearch & number;  // 0x2
		};

		/** Enumerations for events. */
		Event: {
			ActiveListingChanged: Event.ActiveListingChanged & number;
			AddObjectFile: Event.AddObjectFile & number;
			AddObjectsToFavorites: Event.AddObjectsToFavorites & number;
			AddObjectToFavorites: Event.AddObjectToFavorites & number;
			BuiltinCommand: Event.BuiltinCommand & number;
			ChangeVaultLanguage: Event.ChangeVaultLanguage & number;
			CheckInObject: Event.CheckInObject & number;
			CheckInObjects: Event.CheckInObjects & number;
			CheckOutObject: Event.CheckOutObject & number;
			CheckOutObjects: Event.CheckOutObjects & number;
			CloseWindow: Event.CloseWindow & number;
			ContentChanged: Event.ContentChanged & number;
			CreateObject: Event.CreateObject & number;
			CrossApplicationBroadcast: Event.CrossApplicationBroadcast & number;
			CrossApplicationNotification: Event.CrossApplicationNotification & number;
			CustomCommand: Event.CustomCommand & number;
			DestroyObject: Event.DestroyObject & number;
			DestroyObjects: Event.DestroyObjects & number;
			DestroyObjectVersion: Event.DestroyObjectVersion & number;
			DestroyObjectVersions: Event.DestroyObjectVersions & number;
			DragEntered: Event.DragEntered & number;
			DragLeft: Event.DragLeft & number;
			DragOver: Event.DragOver & number;
			FacetValuesError: Event.FacetValuesError & number;
			FacetValuesReady: Event.FacetValuesReady & number;
			HidePane: Event.HidePane & number;
			HideTab: Event.HideTab & number;
			ItemsDropped: Event.ItemsDropped & number;
			ListingActivated: Event.ListingActivated & number;
			ListingDeactivated: Event.ListingDeactivated & number;
			LoggedIn: Event.LoggedIn & number;
			LogOut: Event.LogOut & number;
			MinimizedStateChanged: Event.MinimizedStateChanged & number;
			ModifyObjectVersionLabels: Event.ModifyObjectVersionLabels & number;
			NewBottomPane: Event.NewBottomPane & number;
			NewCommands: Event.NewCommands & number;
			NewCommonDialogShellFrame: Event.NewCommonDialogShellFrame & number;
			NewEmbeddedShellFrame: Event.NewEmbeddedShellFrame & number;
			NewNormalShellFrame: Event.NewNormalShellFrame & number;
			NewRightPane: Event.NewRightPane & number;
			NewSearchPane: Event.NewSearchPane & number;
			NewShellFrame: Event.NewShellFrame & number;
			NewShellListing: Event.NewShellListing & number;
			NewSpecialShellFrame: Event.NewSpecialShellFrame & number;
			NewTab: Event.NewTab & number;
			NewTaskPane: Event.NewTaskPane & number;
			NewTopPane: Event.NewTopPane & number;
			NewVaultEntry: Event.NewVaultEntry & number;
			Notification: Event.Notification & number;
			ObjectAddedToFavorites: Event.ObjectAddedToFavorites & number;
			ObjectCheckedIn: Event.ObjectCheckedIn & number;
			ObjectCheckedOut: Event.ObjectCheckedOut & number;
			ObjectCheckoutsUndone: Event.ObjectCheckoutsUndone & number;
			ObjectCheckoutUndone: Event.ObjectCheckoutUndone & number;
			ObjectCreated: Event.ObjectCreated & number;
			ObjectDestroyed: Event.ObjectDestroyed & number;
			ObjectFileAdded: Event.ObjectFileAdded & number;
			ObjectFileRemoved: Event.ObjectFileRemoved & number;
			ObjectFileRenamed: Event.ObjectFileRenamed & number;
			ObjectLevelPropertySet: Event.ObjectLevelPropertySet & number;
			ObjectOfflineAvailabilityRemoved: Event.ObjectOfflineAvailabilityRemoved & number;
			ObjectOfflineAvailabilitySet: Event.ObjectOfflineAvailabilitySet & number;
			ObjectRemoved: Event.ObjectRemoved & number;
			ObjectRemovedFromFavorites: Event.ObjectRemovedFromFavorites & number;
			ObjectsAddedToFavorites: Event.ObjectsAddedToFavorites & number;
			ObjectsCheckedIn: Event.ObjectsCheckedIn & number;
			ObjectsCheckedOut: Event.ObjectsCheckedOut & number;
			ObjectsDestroyed: Event.ObjectsDestroyed & number;
			ObjectsRemoved: Event.ObjectsRemoved & number;
			ObjectsRemovedFromFavorites: Event.ObjectsRemovedFromFavorites & number;
			ObjectsUndeleted: Event.ObjectsUndeleted & number;
			ObjectUndeleted: Event.ObjectUndeleted & number;
			ObjectVersionDestroyed: Event.ObjectVersionDestroyed & number;
			ObjectVersionLabelsModified: Event.ObjectVersionLabelsModified & number;
			ObjectVersionPermissionsSet: Event.ObjectVersionPermissionsSet & number;
			ObjectVersionRolledBack: Event.ObjectVersionRolledBack & number;
			ObjectVersionsDestroyed: Event.ObjectVersionsDestroyed & number;
			PaneResized: Event.PaneResized & number;
			PropertiesOfObjectVersionSet: Event.PropertiesOfObjectVersionSet & number;
			PropertiesOfObjectVersionsSet: Event.PropertiesOfObjectVersionsSet & number;
			RemoveObject: Event.RemoveObject & number;
			RemoveObjectFile: Event.RemoveObjectFile & number;
			RemoveObjectFromFavorites: Event.RemoveObjectFromFavorites & number;
			RemoveObjectOfflineAvailability: Event.RemoveObjectOfflineAvailability & number;
			RemoveObjects: Event.RemoveObjects & number;
			RemoveObjectsFromFavorites: Event.RemoveObjectsFromFavorites & number;
			RenameObjectFile: Event.RenameObjectFile & number;
			RollBackObjectVersion: Event.RollBackObjectVersion & number;
			SearchCriteriaChanged: Event.SearchCriteriaChanged & number;
			SearchCriteriaReset: Event.SearchCriteriaReset & number;
			SearchInitiated: Event.SearchInitiated & number;
			SearchReady: Event.SearchReady & number;
			SelectedItemsChanged: Event.SelectedItemsChanged & number;
			SelectionChanged: Event.SelectionChanged & number;
			SetObjectLevelProperty: Event.SetObjectLevelProperty & number;
			SetObjectOfflineAvailability: Event.SetObjectOfflineAvailability & number;
			SetObjectVersionPermissions: Event.SetObjectVersionPermissions & number;
			SetPropertiesOfObjectVersion: Event.SetPropertiesOfObjectVersion & number;
			SetPropertiesOfObjectVersions: Event.SetPropertiesOfObjectVersions & number;
			ShowContextMenu: Event.ShowContextMenu & number;
			ShowMainMenu: Event.ShowMainMenu & number;
			ShowPane: Event.ShowPane & number;
			ShowTab: Event.ShowTab & number;
			Started: Event.Started & number;
			Stop: Event.Stop & number;
			TabSelected: Event.TabSelected & number;
			TabUnselected: Event.TabUnselected & number;
			TemporarySearchModified: Event.TemporarySearchModified & number;
			UndeleteObject: Event.UndeleteObject & number;
			UndeleteObjects: Event.UndeleteObjects & number;
			UndoObjectCheckout: Event.UndoObjectCheckout & number;
			UndoObjectCheckouts: Event.UndoObjectCheckouts & number;
			VaultLanguageChanged: Event.VaultLanguageChanged & number;
		};

		MFExtApplicationPlatform: {
			None: MFilesAPI.MFExtApplicationPlatform.MFExtApplicationPlatformNone & number; // 0
			Desktop: MFilesAPI.MFExtApplicationPlatform.MFExtApplicationPlatformDesktop & number; // 1
			Web: MFilesAPI.MFExtApplicationPlatform.MFExtApplicationPlatformWeb & number; // 2
		}

		MFScheduledJobType: {
			Uninitialized: MFilesAPI.MFScheduledJobType & number;  // 0
			Backup: MFilesAPI.MFScheduledJobType & number;  // 1
			Restore: MFilesAPI.MFScheduledJobType & number;  // 2
			CopyVault: MFilesAPI.MFScheduledJobType & number;  // 3
			VerifyVault: MFilesAPI.MFScheduledJobType & number;  // 4
			ExportContent: MFilesAPI.MFScheduledJobType & number;  // 5
			ArchiveOldVersions: MFilesAPI.MFScheduledJobType & number;  // 6
			ImportContent: MFilesAPI.MFScheduledJobType & number;  // 7
			OptimizeVault: MFilesAPI.MFScheduledJobType & number;  // 8
			Recalculate: MFilesAPI.MFScheduledJobType & number;  // 9
			MigrateVault: MFilesAPI.MFScheduledJobType & number;  // 10
		};

		MFServerConnection: {
			Authenticated: MFilesAPI.MFServerConnection & number;  // 1
			Anonymous: MFilesAPI.MFServerConnection & number;  // 2
		};

		MFValueListItemPropertyDef: {
			ID: MFilesAPI.MFValueListItemPropertyDef & number; // 1
			Name: MFilesAPI.MFValueListItemPropertyDef & number;  // 2
			Owner: MFilesAPI.MFValueListItemPropertyDef & number; // 3
			Parent: MFilesAPI.MFValueListItemPropertyDef & number;  // 4
			Deleted: MFilesAPI.MFValueListItemPropertyDef & number;  // 5
			ObjectType: MFilesAPI.MFValueListItemPropertyDef & number;  // 6
			ExtID: MFilesAPI.MFValueListItemPropertyDef & number;  // 7
		};

		MFVaultConnectionTestResult: {
			OK: MFilesAPI.MFVaultConnectionTestResult & number;  // 0
			UserCancelledLoginAttempt: MFilesAPI.MFVaultConnectionTestResult & number;  // 1
		};

		MFViewCategory: {
			Normal: MFilesAPI.MFViewCategory & number;  // 0
			OfflineFilter: MFilesAPI.MFViewCategory & number;  // 1
			TemporarySearch: MFilesAPI.MFViewCategory & number;  // 2
		};

		MFBuiltInView: {
			CheckedOutToCurrentUser: MFilesAPI.MFBuiltInView.MFBuiltInViewCheckedOutToCurrentUser & number // 5
			Offline: MFilesAPI.MFBuiltInView.MFBuiltInViewOffline & number // 6
			RecentlyModifiedByMe: MFilesAPI.MFBuiltInView.MFBuiltInViewRecentlyModifiedByMe & number // 7
			Templates: MFilesAPI.MFBuiltInView.MFBuiltInViewTemplates & number // 8
			AssignedToMe: MFilesAPI.MFBuiltInView.MFBuiltInViewAssignedToMe & number // 9
			LatestSearches: MFilesAPI.MFBuiltInView.MFBuiltInViewLatestSearches & number // 11
			ByID: MFilesAPI.MFBuiltInView.MFBuiltInViewByID & number // 12
			BuiltIn: MFilesAPI.MFBuiltInView.MFBuiltInViewBuiltIn & number // 13
			RecentlyAccessedByMe: MFilesAPI.MFBuiltInView.MFBuiltInViewRecentlyAccessedByMe & number // 14
			Favorites: MFilesAPI.MFBuiltInView.MFBuiltInViewFavorites & number // 15
			OfflineMarkedForOfflineAvailability: MFilesAPI.MFBuiltInView.MFBuiltInViewOfflineMarkedForOfflineAvailability & number // -9001
			OfflineCheckedOut: MFilesAPI.MFBuiltInView.MFBuiltInViewOfflineCheckedOut & number // -9000
			AnyView: MFilesAPI.MFBuiltInView.MFBuiltInViewAnyView & number // -1
		};

		MFOnlineTransitionResultFlags: {
			None: MFilesAPI.MFOnlineTransitionResultFlags.MFOnlineTransitionResultFlagNone & number // 0
			statusChanged: MFilesAPI.MFOnlineTransitionResultFlags.MFOnlineTransitionResultFlagStatusChanged & number // 1
		};

		MFOfflineTransitionResultFlags: {
			None: MFilesAPI.MFOfflineTransitionResultFlags.MFOfflineTransitionResultFlagNone & number // 0
			statusChanged: MFilesAPI.MFOfflineTransitionResultFlags.MFOfflineTransitionResultFlagStatusChanged & number // 1
			LoggedOut: MFilesAPI.MFOfflineTransitionResultFlags.MFOfflineTransitionResultFlagLoggedOut & number // 2
		};

		MFObjectTypeAccess: {
			None: MFilesAPI.MFObjectTypeAccess.MFObjectTypeAccessNone & number // 0
			SeeName: MFilesAPI.MFObjectTypeAccess.MFObjectTypeAccessSeeName & number // 1
			AddNewItems: MFilesAPI.MFObjectTypeAccess.MFObjectTypeAccessAddNewItems & number // 2
		};

		MFObjectAccess: {
			None: MFilesAPI.MFObjectAccess.MFObjectAccessNone & number // 0
			Read: MFilesAPI.MFObjectAccess.MFObjectAccessRead & number // 1
			Edit: MFilesAPI.MFObjectAccess.MFObjectAccessEdit & number // 2
			ChangePermissions: MFilesAPI.MFObjectAccess.MFObjectAccessChangePermissions & number // 4
			Delete: MFilesAPI.MFObjectAccess.MFObjectAccessDelete & number // 8
			AttachObjects: MFilesAPI.MFObjectAccess.MFObjectAccessAttachObjects & number // 16
		};

		MFPropertyDefAccess: {
			None: MFilesAPI.MFPropertyDefAccess.MFPropertyDefAccessNone & number // 0
			See: MFilesAPI.MFPropertyDefAccess.MFPropertyDefAccessSee & number // 1
			Edit: MFilesAPI.MFPropertyDefAccess.MFPropertyDefAccessEdit & number // 2
		};

		MFValueListSortingType: {
			ByName: MFilesAPI.MFValueListSortingType.MFValueListSortingTypeByName & number // 0
			ByExtID: MFilesAPI.MFValueListSortingType.MFValueListSortingTypeByExtID & number // 1
		};

		MFAutomaticValueType: {
			None: MFilesAPI.MFAutomaticValueType.MFAutomaticValueTypeNone & number // 0
			CalculatedWithPlaceholders: MFilesAPI.MFAutomaticValueType.MFAutomaticValueTypeCalculatedWithPlaceholders & number // 1
			CalculatedWithVBScript: MFilesAPI.MFAutomaticValueType.MFAutomaticValueTypeCalculatedWithVBScript & number // 2
			AutoNumberSimple: MFilesAPI.MFAutomaticValueType.MFAutomaticValueTypeAutoNumberSimple & number // 3
			WithVBScript: MFilesAPI.MFAutomaticValueType.MFAutomaticValueTypeWithVBScript & number // 4
		};

		MFValidationType: {
			None: MFilesAPI.MFValidationType.MFValidationTypeNone & number // 0
			RegularExpression: MFilesAPI.MFValidationType.MFValidationTypeRegularExpression & number // 1
			VBScript: MFilesAPI.MFValidationType.MFValidationTypeVBScript & number // 2
		};

		MFFormattingType: {
			None: MFilesAPI.MFFormattingType.MFFormattingTypeNone & number // 0
		};

		MFExternalDBRefreshType: {
			None: MFilesAPI.MFExternalDBRefreshType.MFExternalDBRefreshTypeNone & number // 0
			Quick: MFilesAPI.MFExternalDBRefreshType.MFExternalDBRefreshTypeQuick & number // 1
			Full: MFilesAPI.MFExternalDBRefreshType.MFExternalDBRefreshTypeFull & number // 2
		};

		MFLatestSpecificBehavior: {
			Normal: MFilesAPI.MFLatestSpecificBehavior.MFLatestSpecificBehaviorNormal & number // 0
			Specific: MFilesAPI.MFLatestSpecificBehavior.MFLatestSpecificBehaviorSpecific & number // 1
			Latest: MFilesAPI.MFLatestSpecificBehavior.MFLatestSpecificBehaviorLatest & number // 2
			Automatic: MFilesAPI.MFLatestSpecificBehavior.MFLatestSpecificBehaviorAutomatic & number // 3
		};

		MFBuiltInDocumentClass: {
			UnclassifiedDocument: MFilesAPI.MFBuiltInDocumentClass.MFBuiltInDocumentClassUnclassifiedDocument & number // 0
			OtherDocument: MFilesAPI.MFBuiltInDocumentClass.MFBuiltInDocumentClassOtherDocument & number // 1
		};

		MFBuiltInObjectClass: {
			GenericAssignment: MFilesAPI.MFBuiltInObjectClass.MFBuiltInObjectClassGenericAssignment & number // -100
			Any: MFilesAPI.MFBuiltInObjectClass.MFBuiltInObjectClassAny & number // -3
			NotSet: MFilesAPI.MFBuiltInObjectClass.MFBuiltInObjectClassNotSet & number // -2
		};

		MFUserAccountVaultRole: {
			None: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleNone & number // 0
			FullControl: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleFullControl & number // 1
			LogIn: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleLogIn & number // 2
			CreateObjects: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleCreateObjects & number // 4
			SeeAllObjects: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleSeeAllObjects & number // 8
			UndeleteObjects: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleUndeleteObjects & number // 16
			DestroyObjects: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleDestroyObjects & number // 32
			ForceUndoCheckout: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleForceUndoCheckout & number // 64
			ChangeObjectSecurity: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleChangeObjectSecurity & number // 128
			ChangeMetadataStructure: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleChangeMetadataStructure & number // 256
			ManageUserAccounts: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleManageUserAccounts & number // 512
			InternalUser: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleInternalUser & number // 1024
			ManageTraditionalFolders: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleManageTraditionalFolders & number // 2048
			DefaultRoles: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleDefaultRoles & number // 3078
			DefineTemplates: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleDefineTemplates & number // 4096
			ManageCommonViews: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleManageCommonViews & number // 8192
			ManageWorkflows: MFilesAPI.MFUserAccountVaultRole.MFUserAccountVaultRoleManageWorkflows & number // 16384
		};

		MFLoginServerRole: {
			None: MFilesAPI.MFLoginServerRole.MFLoginServerRoleNone & number // 0
			SystemAdministrator: MFilesAPI.MFLoginServerRole.MFLoginServerRoleSystemAdministrator & number // 1
			VaultCreator: MFilesAPI.MFLoginServerRole.MFLoginServerRoleVaultCreator & number // 2
			BackupOperator: MFilesAPI.MFLoginServerRole.MFLoginServerRoleBackupOperator & number // 4
			LogIn: MFilesAPI.MFLoginServerRole.MFLoginServerRoleLogIn & number // 8
		};

		MFLoginAccountType: {
			MFiles: MFilesAPI.MFLoginAccountType.MFLoginAccountTypeMFiles & number // 1
			Windows: MFilesAPI.MFLoginAccountType.MFLoginAccountTypeWindows & number // 2
		};

		MFLicenseType: {
			None: MFilesAPI.MFLicenseType.MFLicenseTypeNone & number // 0
			NamedUserLicense: MFilesAPI.MFLicenseType.MFLicenseTypeNamedUserLicense & number // 1
			ConcurrentUserLicense: MFilesAPI.MFLicenseType.MFLicenseTypeConcurrentUserLicense & number // 2
			ReadOnlyLicense: MFilesAPI.MFLicenseType.MFLicenseTypeReadOnlyLicense & number // 3
		};

		MFFileOpenMethod: {
			ShowInShell: MFilesAPI.MFFileOpenMethod.MFFileOpenMethodShowInShell & number // 0
			Open: MFilesAPI.MFFileOpenMethod.MFFileOpenMethodOpen & number // 1
			View: MFilesAPI.MFFileOpenMethod.MFFileOpenMethodView & number // 2
			Edit: MFilesAPI.MFFileOpenMethod.MFFileOpenMethodEdit & number // 3
		};

		MFilesURLType: {
			Show: MFilesAPI.MFilesURLType.MFilesURLTypeShow & number // 0
			Open: MFilesAPI.MFilesURLType.MFilesURLTypeOpen & number // 1
			View: MFilesAPI.MFilesURLType.MFilesURLTypeView & number // 2
			Edit: MFilesAPI.MFilesURLType.MFilesURLTypeEdit & number // 3
			ShowMetadata: MFilesAPI.MFilesURLType.MFilesURLTypeShowMetadata & number // 6
		};

		MFSoftwarePlatformType: {
			Win32: MFilesAPI.MFSoftwarePlatformType.MFSoftwarePlatformTypeWin32 & number // 0
			X64: MFilesAPI.MFSoftwarePlatformType.MFSoftwarePlatformTypeX64 & number // 1
		};

		MFBuiltInValueList: {
			Documents: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListDocuments & number // 0
			Classes: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListClasses & number // 1
			ClassGroups: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListClassGroups & number // 2
			VersionLabels: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListVersionLabels & number // 3
			TraditionalFolders: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListTraditionalFolders & number // 4
			ExternalLocations: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListExternalLocations & number // 5
			Users: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListUsers & number // 6
			Workflows: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListWorkflows & number // 7
			States: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListStates & number // 8
			Collections: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListCollections & number // 9
			Assignments: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListAssignments & number // 10
			UserGroups: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListUserGroups & number // 16
			StateTransitions: MFilesAPI.MFBuiltInValueList.MFBuiltInValueListStateTransitions & number // 17
		};

		MFBuiltInPropertyDef: {
			NameOrTitle: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefClass & number // 0
			Created: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCreated & number // 20
			LastModified: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefLastModified & number // 21
			SingleFileObject: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefSingleFileObject & number // 22
			LastModifiedBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefLastModifiedBy & number // 23
			StatusChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefStatusChanged & number // 24
			CreatedBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCreatedBy & number // 25
			Keywords: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefKeywords & number // 26
			Deleted: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefDeleted & number // 27
			DeletedBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefDeletedBy & number // 28
			VersionLabel: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVersionLabel & number // 29
			SizeOnServerThisVersion: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefSizeOnServerThisVersion & number // 30
			SizeOnServerAllVersions: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefSizeOnServerAllVersions & number // 31
			MarkedForArchiving: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefMarkedForArchiving & number // 32
			VersionComment: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVersionComment & number // 33
			Comment: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVersionComment & number // 33
			TraditionalFolder: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefTraditionalFolder & number // 34
			CreatedFromExternalLocation: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCreatedFromExternalLocation & number // 35
			AdditionalClasses: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefAdditionalClasses & number // 36
			IsTemplate: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefIsTemplate & number // 37
			Workflow: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefWorkflow & number // 38
			State: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefState & number // 39
			StateEntered: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefStateEntered & number // 40
			AssignmentDescription: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefAssignmentDescription & number // 41
			Deadline: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefDeadline & number // 42
			MonitoredBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefMonitoredBy & number // 43
			AssignedTo: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefAssignedTo & number // 44
			CompletedBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCompletedBy & number // 45
			CollectionMemberDocuments: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCollectionMemberDocuments & number // 46
			CollectionMemberCollections: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCollectionMemberCollections & number // 47
			Constituent: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefConstituent & number // 48
			OriginalPath: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefOriginalPath & number // 75
			Reference: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefReference & number // 76
			OriginalPath2: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefOriginalPath2 & number // 77
			OriginalPath3: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefOriginalPath3 & number // 78
			WorkflowAssignment: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefWorkflowAssignment & number // 79
			AccessedByMe: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefAccessedByMe & number // 81
			FavoriteView: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefFavoriteView & number // 82
			MessageID: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefMessageID & number // 83
			InReplyTo: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefInReplyTo & number // 84
			InReplyToReference: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefInReplyToReference & number // 85
			SignatureManifestation: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefSignatureManifestation & number // 86
			ReportURL: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefReportURL & number // 87
			ReportPlacement: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefReportPlacement & number // 88
			ObjectChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefObjectChanged & number // 89
			ACLChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefACLChanged & number // 90
			VersionLabelChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVersionLabelChanged & number // 91
			VersionCommentChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVersionCommentChanged & number // 92
			DeletionStatusChanged: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefDeletionStatusChanged & number // 93
			VaultGUID: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefVaultGUID & number // 94
			SharedFiles: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefSharedFiles & number // 95
			ConflictResolved: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefConflictResolved & number // 96
			RejectedBy: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefRejectedBy & number // 97
			Completed: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefCompleted & number // 98
			StateTransition: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefStateTransition & number // 99
			Class: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefClass & number // 100
			ClassGroups: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefClassGroups & number // 101
			ObjectID: MFilesAPI.MFBuiltInPropertyDef.MFBuiltInPropertyDefObjectID & number // -102
		};

		MFObjectWindowResultCode: {
			Ok: MFilesAPI.MFObjectWindowResultCode.MFObjectWindowResultCodeOk & number // 0
			Cancel: MFilesAPI.MFObjectWindowResultCode.MFObjectWindowResultCodeCancel & number // 1
			OkToAll: MFilesAPI.MFObjectWindowResultCode.MFObjectWindowResultCodeOkToAll & number // 2
			SkipThis: MFilesAPI.MFObjectWindowResultCode.MFObjectWindowResultCodeSkipThis & number // 3
		};

		MFObjectWindowMode: {
			Insert: MFilesAPI.MFObjectWindowMode.MFObjectWindowModeInsert & number // 0
			InsertSourceFiles: MFilesAPI.MFObjectWindowMode.MFObjectWindowModeInsertSourceFiles & number // 1
			InsertSaveAsType: MFilesAPI.MFObjectWindowMode.MFObjectWindowModeInsertSaveAsType & number // 2
			Edit: MFilesAPI.MFObjectWindowMode.MFObjectWindowModeEdit & number // 3
			EditApplicationModal: MFilesAPI.MFObjectWindowMode.MFObjectWindowModeEditApplicationModal & number // 4
		};

		MFUpdateType: {
			Normal: MFilesAPI.MFUpdateType.MFUpdateTypeNormal & number // 0
			ServerAuto: MFilesAPI.MFUpdateType.MFUpdateTypeServerAuto & number // 1
			ClientAuto: MFilesAPI.MFUpdateType.MFUpdateTypeClientAuto & number // 2
		};

		MFViewType: {
			Normal: MFilesAPI.MFViewType.MFViewTypeNormal & number // 0
			FilterOnly: MFilesAPI.MFViewType.MFViewTypeFilterOnly & number // 1
		};

		MFAuthType: {
			Unknown: MFilesAPI.MFAuthType.MFAuthTypeUnknown & number // 0
			LoggedOnWindowsUser: MFilesAPI.MFAuthType.MFAuthTypeLoggedOnWindowsUser & number // 1
			SpecificWindowsUser: MFilesAPI.MFAuthType.MFAuthTypeSpecificWindowsUser & number // 2
			SpecificMFilesUser: MFilesAPI.MFAuthType.MFAuthTypeSpecificMFilesUser & number // 3
		};

		MFBuiltInObjectType: {
			Document: MFilesAPI.MFBuiltInObjectType.MFBuiltInObjectTypeDocument & number  // 0
			DocumentCollection: MFilesAPI.MFBuiltInObjectType.MFBuiltInObjectTypeDocumentCollection & number  // 9
			Assignment: MFilesAPI.MFBuiltInObjectType.MFBuiltInObjectTypeAssignment & number  // 10
			DocumentOrDocumentCollection: MFilesAPI.MFBuiltInObjectType & number  // -102
		};

		MFContentType: {
			Generic: MFilesAPI.MFContentType.MFContentTypeGeneric & number // 0
			EmailAddress: MFilesAPI.MFContentType.MFContentTypeEmailAddress & number // 1
			URL: MFilesAPI.MFContentType.MFContentTypeURL & number // 2
			RTF: MFilesAPI.MFContentType.MFContentTypeRTF & number // 3
			HTML: MFilesAPI.MFContentType.MFContentTypeHTML & number // 4
		};

		MFDataType: {
			Uninitialized: MFilesAPI.MFDataType.MFDatatypeUninitialized & number // 0
			Text: MFilesAPI.MFDataType.MFDatatypeText & number // 1
			Integer: MFilesAPI.MFDataType.MFDatatypeInteger & number // 2
			Floating: MFilesAPI.MFDataType.MFDatatypeFloating & number // 3
			Date: MFilesAPI.MFDataType.MFDatatypeDate & number // 5
			Time: MFilesAPI.MFDataType.MFDatatypeTime & number // 6
			Timestamp: MFilesAPI.MFDataType.MFDatatypeTimestamp & number // 7
			Boolean: MFilesAPI.MFDataType.MFDatatypeBoolean & number // 8
			Lookup: MFilesAPI.MFDataType.MFDatatypeLookup & number // 9
			MultiSelectLookup: MFilesAPI.MFDataType.MFDatatypeMultiSelectLookup & number // 10
			Integer64: MFilesAPI.MFDataType.MFDatatypeInteger64 & number // 11
			FILETIME: MFilesAPI.MFDataType.MFDatatypeFILETIME & number // 12
			MultiLineText: MFilesAPI.MFDataType.MFDatatypeMultiLineText & number // 13
			ACL: MFilesAPI.MFDataType.MFDatatypeACL & number // 14
		};

		MFDependencyRelation: {
			Nothing: MFilesAPI.MFDependencyRelation.MFDependencyRelationNothing & number // 0
			AutomaticFilling: MFilesAPI.MFDependencyRelation.MFDependencyRelationAutomaticFilling & number // 1
			Filtering: MFilesAPI.MFDependencyRelation.MFDependencyRelationFiltering & number // 2
		};

		MFExpressionType: {
			Uninitialized: MFilesAPI.MFExpressionType.MFExpressionTypeUninitialized & number // 0
			PropertyValue: MFilesAPI.MFExpressionType.MFExpressionTypePropertyValue & number // 1
			ObjectIDSegment: MFilesAPI.MFExpressionType.MFExpressionTypeObjectIDSegment & number // 2
			StatusValue: MFilesAPI.MFExpressionType.MFExpressionTypeStatusValue & number // 3
			FileValue: MFilesAPI.MFExpressionType.MFExpressionTypeFileValue & number // 4
			TypedValue: MFilesAPI.MFExpressionType.MFExpressionTypeTypedValue & number // 5
			AnyField: MFilesAPI.MFExpressionType.MFExpressionTypeAnyField & number // 6
			Permissions: MFilesAPI.MFExpressionType.MFExpressionTypePermissions & number // 7
		};

		MFDefaultPropertyType: {
			Undefined: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeUndefined & number // 0
			FixedValue: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFixedValue & number // 1
			FromHPDSSXML: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFromHPDSSXML & number // 2
			FromXML: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFromXML & number // 3
			FromEmail: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFromEmail & number // 4
			FromEmailHeader: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFromEmailHeader & number // 5
			FromOCR: MFilesAPI.MFDefaultPropertyType.MFDefaultPropertyTypeFromOCR & number // 6
		};

		MFEmailField: {
			Undefined: MFilesAPI.MFEmailField.MFEmailFieldUndefined & number // 0
			From: MFilesAPI.MFEmailField.MFEmailFieldFrom & number // 1
			To: MFilesAPI.MFEmailField.MFEmailFieldTo & number // 2
			Cc: MFilesAPI.MFEmailField.MFEmailFieldCc & number // 3
			Subject: MFilesAPI.MFEmailField.MFEmailFieldSubject & number // 4
			Body: MFilesAPI.MFEmailField.MFEmailFieldBody & number // 5
			Date: MFilesAPI.MFEmailField.MFEmailFieldDate & number // 6
			Importance: MFilesAPI.MFEmailField.MFEmailFieldImportance & number // 7
			Sensitivity: MFilesAPI.MFEmailField.MFEmailFieldSensitivity & number // 8
		};

		MFDataFunction: {
			NoOp: MFilesAPI.MFDataFunction.MFDataFunctionNoOp & number // 0
			Year: MFilesAPI.MFDataFunction.MFDataFunctionYear & number // 1
			Month: MFilesAPI.MFDataFunction.MFDataFunctionMonth & number // 2
			YearAndMonth: MFilesAPI.MFDataFunction.MFDataFunctionYearAndMonth & number // 3
			Date: MFilesAPI.MFDataFunction.MFDataFunctionDate & number // 4
			DaysFrom: MFilesAPI.MFDataFunction.MFDataFunctionDaysFrom & number // 5
			DaysTo: MFilesAPI.MFDataFunction.MFDataFunctionDaysTo & number // 6
			IntegerSegment: MFilesAPI.MFDataFunction.MFDataFunctionIntegerSegment & number // 7
			LeftChars: MFilesAPI.MFDataFunction.MFDataFunctionLeftChars & number // 8
			InitialCharGroup: MFilesAPI.MFDataFunction.MFDataFunctionInitialCharGroup & number // 9
		};

		MFStatusType: {
			CheckedOut: MFilesAPI.MFStatusType.MFStatusTypeCheckedOut & number // 0
			CheckedOutTo: MFilesAPI.MFStatusType.MFStatusTypeCheckedOutTo & number // 1
			CheckedOutAt: MFilesAPI.MFStatusType.MFStatusTypeCheckedOutAt & number // 2
			ObjectID: MFilesAPI.MFStatusType.MFStatusTypeObjectID & number // 3
			ObjectVersionID: MFilesAPI.MFStatusType.MFStatusTypeObjectVersionID & number // 4
			Deleted: MFilesAPI.MFStatusType.MFStatusTypeDeleted & number // 5
			ObjectTypeID: MFilesAPI.MFStatusType.MFStatusTypeObjectTypeID & number // 6
			IsLatestCheckedInVersion: MFilesAPI.MFStatusType.MFStatusTypeIsLatestCheckedInVersion & number // 7
			ExtID: MFilesAPI.MFStatusType.MFStatusTypeExtID & number // 8
			LatestOrSpecific: MFilesAPI.MFStatusType.MFStatusTypeLatestOrSpecific & number // 9
			ObjectTypeAndID: MFilesAPI.MFStatusType.MFStatusTypeObjectTypeAndID & number // 10
			ObjectFlags: MFilesAPI.MFStatusType.MFStatusTypeObjectFlags & number // 11
			OriginalVaultGUID: MFilesAPI.MFStatusType.MFStatusTypeOriginalVaultGUID & number // 12
			OriginalObjectType: MFilesAPI.MFStatusType.MFStatusTypeOriginalObjectType & number // 13
			OriginalObjectID: MFilesAPI.MFStatusType.MFStatusTypeOriginalObjectID & number // 14
			OriginalObjectIDSegment: MFilesAPI.MFStatusType.MFStatusTypeOriginalObjectIDSegment & number // 15
		};

		MFFileValueType: {
			HasFiles: MFilesAPI.MFFileValueType.MFFileValueTypeHasFiles & number // 0
			FileName: MFilesAPI.MFFileValueType.MFFileValueTypeFileName & number // 1
			FileSize: MFilesAPI.MFFileValueType.MFFileValueTypeFileSize & number // 2
			FileID: MFilesAPI.MFFileValueType.MFFileValueTypeFileID & number // 3
			CreationTime: MFilesAPI.MFFileValueType.MFFileValueTypeCreationTime & number // 4
			ChangeTime: MFilesAPI.MFFileValueType.MFFileValueTypeChangeTime & number // 5
			LinkedToExtLoc: MFilesAPI.MFFileValueType.MFFileValueTypeLinkedToExtLoc & number // 6
			LinkedToExtLocID: MFilesAPI.MFFileValueType.MFFileValueTypeLinkedToExtLocID & number // 7
		};

		MFPermissionsExpressionType: {
			MFACL: MFilesAPI.MFPermissionsExpressionType.MFACL & number // 0
			MFVisibleTo: MFilesAPI.MFPermissionsExpressionType.MFVisibleTo & number // 1
			MFEditableBy: MFilesAPI.MFPermissionsExpressionType.MFEditableBy & number // 2
			MFPermissionsChangeableBy: MFilesAPI.MFPermissionsExpressionType.MFPermissionsChangeableBy & number // 3
			MFFullControlBy: MFilesAPI.MFPermissionsExpressionType.MFFullControlBy & number // 4
			MFDeletableBy: MFilesAPI.MFPermissionsExpressionType.MFDeletableBy & number // 5
			MFObjectsAttachableToThisItemBy: MFilesAPI.MFPermissionsExpressionType.MFObjectsAttachableToThisItemBy & number // 6
		};

		MFConditionType: {
			Equal: MFilesAPI.MFConditionType.MFConditionTypeEqual & number // 1
			NotEqual: MFilesAPI.MFConditionType.MFConditionTypeNotEqual & number // 2
			GreaterThan: MFilesAPI.MFConditionType.MFConditionTypeGreaterThan & number // 3
			LessThan: MFilesAPI.MFConditionType.MFConditionTypeLessThan & number // 4
			GreaterThanOrEqual: MFilesAPI.MFConditionType.MFConditionTypeGreaterThanOrEqual & number // 5
			LessThanOrEqual: MFilesAPI.MFConditionType.MFConditionTypeLessThanOrEqual & number // 6
			Contains: MFilesAPI.MFConditionType.MFConditionTypeContains & number // 7
			DoesNotContain: MFilesAPI.MFConditionType.MFConditionTypeDoesNotContain & number // 8
			StartsWith: MFilesAPI.MFConditionType.MFConditionTypeStartsWith & number // 9
			DoesNotStartWith: MFilesAPI.MFConditionType.MFConditionTypeDoesNotStartWith & number // 10
			MatchesWildcardPattern: MFilesAPI.MFConditionType.MFConditionTypeMatchesWildcardPattern & number // 11
			DoesNotMatchWildcardPattern: MFilesAPI.MFConditionType.MFConditionTypeDoesNotMatchWildcardPattern & number // 12
			IsMissing: MFilesAPI.MFConditionType.MFConditionTypeIsMissing & number // 13
			IsNotMissing: MFilesAPI.MFConditionType.MFConditionTypeIsNotMissing & number // 14
			StartsWithAtWordBoundary: MFilesAPI.MFConditionType.MFConditionTypeStartsWithAtWordBoundary & number // 15
			ContainsAnyBitwise: MFilesAPI.MFConditionType.MFConditionTypeContainsAnyBitwise & number // 16
			DoesNotContainAnyBitwise: MFilesAPI.MFConditionType.MFConditionTypeDoesNotContainAnyBitwise & number // 17
		};

		MFParentChildBehavior: {
			None: MFilesAPI.MFParentChildBehavior.MFParentChildBehaviorNone & number // 0
			IncludeChildValues: MFilesAPI.MFParentChildBehavior.MFParentChildBehaviorIncludeChildValues & number // 1
			IncludeParentValues: MFilesAPI.MFParentChildBehavior.MFParentChildBehaviorIncludeParentValues & number // 2
		};

		MFSearchFlags: {
			None: MFilesAPI.MFSearchFlags.MFSearchFlagNone & number // 0
			LookInAllVersions: MFilesAPI.MFSearchFlags.MFSearchFlagLookInAllVersions & number // 1
			ReturnLatestVisibleVersion: MFilesAPI.MFSearchFlags.MFSearchFlagReturnLatestVisibleVersion & number // 2
			LookAllObjectTypes: MFilesAPI.MFSearchFlags.MFSearchFlagLookAllObjectTypes & number // 4
			DisableRelevancyRanking: MFilesAPI.MFSearchFlags.MFSearchFlagDisableRelevancyRanking & number // 16
		};

		MFFullTextSearchFlags: {
			None: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsNone & number // 0
			Stemming: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsStemming & number // 4
			TypeAllWords: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsTypeAllWords & number // 131072
			TypeAnyWords: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsTypeAnyWords & number // 262144
			LookInMetaData: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsLookInMetaData & number // 268435456
			LookInFileData: MFilesAPI.MFFullTextSearchFlags.MFFullTextSearchFlagsLookInFileData & number // 536870912
		};

		MFRelationshipsMode: {
			FromThisObject: MFilesAPI.MFRelationshipsMode.MFRelationshipsModeFromThisObject & number // 1
			ToThisObject: MFilesAPI.MFRelationshipsMode.MFRelationshipsModeToThisObject & number // 2
			All: MFilesAPI.MFRelationshipsMode.MFRelationshipsModeAll & number // 3
		};

		MFProductMode: {
			Full: MFilesAPI.MFProductMode.MFProductModeFull & number // 0
			Express: MFilesAPI.MFProductMode.MFProductModeExpress & number // 1
			Business: MFilesAPI.MFProductMode.MFProductModeBusiness & number // 2
		};

		MFBackupType: {
			Full: MFilesAPI.MFBackupType.MFBackupTypeFull & number // 0
			Differential: MFilesAPI.MFBackupType.MFBackupTypeDifferential & number // 1
		};

		MFImpersonationType: {
			LocalSystem: MFilesAPI.MFImpersonationType.MFImpersonationTypeLocalSystem & number // 0
			SpecificAccount: MFilesAPI.MFImpersonationType.MFImpersonationTypeSpecificAccount & number // 1
			ExtAccount: MFilesAPI.MFImpersonationType.MFImpersonationTypeExtAccount & number // 2
		};

		MFPermission: {
			Deny: MFilesAPI.MFPermission.MFPermissionDeny & number // 0
			Allow: MFilesAPI.MFPermission.MFPermissionAllow & number // 1
			NotSet: MFilesAPI.MFPermission.MFPermissionNotSet & number // 2
		};

		MFFolderDefType: {
			Unknown: MFilesAPI.MFFolderDefType.MFFolderDefTypeUnknown & number // 0
			AnyFolder: MFilesAPI.MFFolderDefType.MFFolderDefTypeAnyFolder & number // 1
			ViewFolder: MFilesAPI.MFFolderDefType.MFFolderDefTypeViewFolder & number // 2
			PropertyFolder: MFilesAPI.MFFolderDefType.MFFolderDefTypePropertyFolder & number // 3
			TraditionalFolder: MFilesAPI.MFFolderDefType.MFFolderDefTypeTraditionalFolder & number // 4
			SearchFolder: MFilesAPI.MFFolderDefType.MFFolderDefTypeSearchFolder & number // 5
		};

		MFFolderContentItemType: {
			Unknown: MFilesAPI.MFFolderContentItemType.MFFolderContentItemTypeUnknown & number // 0
			ViewFolder: MFilesAPI.MFFolderContentItemType.MFFolderContentItemTypeViewFolder & number // 1
			PropertyFolder: MFilesAPI.MFFolderContentItemType.MFFolderContentItemTypePropertyFolder & number // 2
			TraditionalFolder: MFilesAPI.MFFolderContentItemType.MFFolderContentItemTypeTraditionalFolder & number // 3
			ObjectVersion: MFilesAPI.MFFolderContentItemType.MFFolderContentItemTypeObjectVersion & number // 4
		};

		MFUserOrUserGroupType: {
			Unknown: MFilesAPI.MFUserOrUserGroupType.MFUserOrUserGroupTypeUnknown & number // 0
			UserAccount: MFilesAPI.MFUserOrUserGroupType.MFUserOrUserGroupTypeUserAccount & number // 1
			UserGroup: MFilesAPI.MFUserOrUserGroupType.MFUserOrUserGroupTypeUserGroup & number // 2
			PseudoUser: MFilesAPI.MFUserOrUserGroupType.MFUserOrUserGroupTypePseudoUser & number // 3
			PropertyBasedPseudoUser: MFilesAPI.MFUserOrUserGroupType.MFUserOrUserGroupTypePropertyBasedPseudoUser & number // 4
		};

		MFOCRZoneRecognitionMode: {
			NoZoneRecognition: MFilesAPI.MFOCRZoneRecognitionMode.MFOCRZoneRecognitionModeNoZoneRecognition & number // 0
			RecognizeSpecifiedZones: MFilesAPI.MFOCRZoneRecognitionMode.MFOCRZoneRecognitionModeRecognizeSpecifiedZones & number // 1
			AutoDetectZones: MFilesAPI.MFOCRZoneRecognitionMode.MFOCRZoneRecognitionModeAutoDetectZones & number // 2
		};

		MFOCRDimensionUnit: {
			Pixel: MFilesAPI.MFOCRDimensionUnit.MFOCRDimensionUnitPixel & number // 0
			MillimeterX10: MFilesAPI.MFOCRDimensionUnit.MFOCRDimensionUnitMillimeterX10 & number // 1
			InchX100: MFilesAPI.MFOCRDimensionUnit.MFOCRDimensionUnitInchX100 & number // 2
		};

		MFAutoStateTransitionMode: {
			MFASTModeNone: MFilesAPI.MFAutoStateTransitionMode.MFASTModeNone & number // 0
			MFASTModeRelativeTime: MFilesAPI.MFAutoStateTransitionMode.MFASTModeRelativeTime & number // 1
			MFASTModeAssignmentCompleteOne: MFilesAPI.MFAutoStateTransitionMode.MFASTModeAssignmentCompleteOne & number // 2
			MFASTModeAssignmentCompleteAll: MFilesAPI.MFAutoStateTransitionMode.MFASTModeAssignmentCompleteAll & number // 3
			MFASTModeCriteriaFulfilled: MFilesAPI.MFAutoStateTransitionMode.MFASTModeCriteriaFulfilled & number // 4
			MFASTModeAllowedByScript: MFilesAPI.MFAutoStateTransitionMode.MFASTModeAllowedByScript & number // 5
			MFASTMModeAssignmentComplete: MFilesAPI.MFAutoStateTransitionMode.MFASTMModeAssignmentComplete & number // 6
			MFASTModeAssignmentComplete: MFilesAPI.MFAutoStateTransitionMode.MFASTMModeAssignmentComplete & number // 6
			MFASTModeAssignmentRejected: MFilesAPI.MFAutoStateTransitionMode.MFASTModeAssignmentRejected & number // 7
		};

		MFOCRLanguage: {
			None: MFilesAPI.MFOCRLanguage.MFOCRLanguageNone & number // 0
			Neutral: MFilesAPI.MFOCRLanguage.MFOCRLanguageNeutral & number // 1
			NumbersOnly: MFilesAPI.MFOCRLanguage.MFOCRLanguageNumbersOnly & number // 2
			EnglishUS: MFilesAPI.MFOCRLanguage.MFOCRLanguageEnglishUS & number // 3
			EnglishBr: MFilesAPI.MFOCRLanguage.MFOCRLanguageEnglishBr & number // 4
			German: MFilesAPI.MFOCRLanguage.MFOCRLanguageGerman & number // 5
			French: MFilesAPI.MFOCRLanguage.MFOCRLanguageFrench & number // 6
			Spanish: MFilesAPI.MFOCRLanguage.MFOCRLanguageSpanish & number // 7
			Italian: MFilesAPI.MFOCRLanguage.MFOCRLanguageItalian & number // 8
			Finnish: MFilesAPI.MFOCRLanguage.MFOCRLanguageFinnish & number // 9
			Swedish: MFilesAPI.MFOCRLanguage.MFOCRLanguageSwedish & number // 10
			Danish: MFilesAPI.MFOCRLanguage.MFOCRLanguageDanish & number // 11
			Norwegian: MFilesAPI.MFOCRLanguage.MFOCRLanguageNorwegian & number // 12
			Nynorsk: MFilesAPI.MFOCRLanguage.MFOCRLanguageNynorsk & number // 13
			Estonian: MFilesAPI.MFOCRLanguage.MFOCRLanguageEstonian & number // 14
			Latvian: MFilesAPI.MFOCRLanguage.MFOCRLanguageLatvian & number // 15
			Lithuanian: MFilesAPI.MFOCRLanguage.MFOCRLanguageLithuanian & number // 16
			Dutch: MFilesAPI.MFOCRLanguage.MFOCRLanguageDutch & number // 17
			Portuguese: MFilesAPI.MFOCRLanguage.MFOCRLanguagePortuguese & number // 18
			Brazilian: MFilesAPI.MFOCRLanguage.MFOCRLanguageBrazilian & number // 19
			Galician: MFilesAPI.MFOCRLanguage.MFOCRLanguageGalician & number // 20
			Icelandic: MFilesAPI.MFOCRLanguage.MFOCRLanguageIcelandic & number // 21
			Greek: MFilesAPI.MFOCRLanguage.MFOCRLanguageGreek & number // 22
			Czech: MFilesAPI.MFOCRLanguage.MFOCRLanguageCzech & number // 23
			Hungarian: MFilesAPI.MFOCRLanguage.MFOCRLanguageHungarian & number // 24
			Polish: MFilesAPI.MFOCRLanguage.MFOCRLanguagePolish & number // 25
			Romanian: MFilesAPI.MFOCRLanguage.MFOCRLanguageRomanian & number // 26
			Slovak: MFilesAPI.MFOCRLanguage.MFOCRLanguageSlovak & number // 27
			Croatian: MFilesAPI.MFOCRLanguage.MFOCRLanguageCroatian & number // 28
			Serbian: MFilesAPI.MFOCRLanguage.MFOCRLanguageSerbian & number // 29
			Slovenian: MFilesAPI.MFOCRLanguage.MFOCRLanguageSlovenian & number // 30
			Luxembourgish: MFilesAPI.MFOCRLanguage.MFOCRLanguageLuxembourgish & number // 31
			SwissGerman: MFilesAPI.MFOCRLanguage.MFOCRLanguageSwissGerman & number // 32
			Turkish: MFilesAPI.MFOCRLanguage.MFOCRLanguageTurkish & number // 33
			Russian: MFilesAPI.MFOCRLanguage.MFOCRLanguageRussian & number // 34
			ByeloRussian: MFilesAPI.MFOCRLanguage.MFOCRLanguageByeloRussian & number // 35
			Ukrainian: MFilesAPI.MFOCRLanguage.MFOCRLanguageUkrainian & number // 36
			Macedonian: MFilesAPI.MFOCRLanguage.MFOCRLanguageMacedonian & number // 37
			Bulgarian: MFilesAPI.MFOCRLanguage.MFOCRLanguageBulgarian & number // 38
			Afrikaans: MFilesAPI.MFOCRLanguage.MFOCRLanguageAfrikaans & number // 39
			Albanian: MFilesAPI.MFOCRLanguage.MFOCRLanguageAlbanian & number // 40
			Catalan: MFilesAPI.MFOCRLanguage.MFOCRLanguageCatalan & number // 41
			IrishGaelic: MFilesAPI.MFOCRLanguage.MFOCRLanguageIrishGaelic & number // 42
			ScottishGaelic: MFilesAPI.MFOCRLanguage.MFOCRLanguageScottishGaelic & number // 43
			Welsh: MFilesAPI.MFOCRLanguage.MFOCRLanguageWelsh & number // 44
			Basque: MFilesAPI.MFOCRLanguage.MFOCRLanguageBasque & number // 45
			Mexican: MFilesAPI.MFOCRLanguage.MFOCRLanguageMexican & number // 46
		};

		MFDBEngine: {
			None: MFilesAPI.MFDBEngine.MFDBEngineNone & number // 0
			Firebird: MFilesAPI.MFDBEngine.MFDBEngineFirebird & number // 1
			MSSQLServer: MFilesAPI.MFDBEngine.MFDBEngineMSSQLServer & number // 2
		};

		MFVaultAccess: {
			None: MFilesAPI.MFVaultAccess.MFVaultAccessNone & number // 0
			CreateDocs: MFilesAPI.MFVaultAccess.MFVaultAccessCreateDocs & number // 1
			SeeAllDocs: MFilesAPI.MFVaultAccess.MFVaultAccessSeeAllDocs & number // 2
			UndeleteDocs: MFilesAPI.MFVaultAccess.MFVaultAccessUndeleteDocs & number // 4
			DestroyDocs: MFilesAPI.MFVaultAccess.MFVaultAccessDestroyDocs & number // 8
			ForceUndoCheckout: MFilesAPI.MFVaultAccess.MFVaultAccessForceUndoCheckout & number // 16
			ChangeDocSecurity: MFilesAPI.MFVaultAccess.MFVaultAccessChangeDocSecurity & number // 32
			ChangeMetaDataStructure: MFilesAPI.MFVaultAccess.MFVaultAccessChangeMetaDataStructure & number // 64
			ManageUserAccounts: MFilesAPI.MFVaultAccess.MFVaultAccessManageUserAccounts & number // 128
			ChangeFullControlRole: MFilesAPI.MFVaultAccess.MFVaultAccessChangeFullControlRole & number // 256
			VerifyVault: MFilesAPI.MFVaultAccess.MFVaultAccessVerifyVault & number // 1024
			EditAllDocs: MFilesAPI.MFVaultAccess.MFVaultAccessEditAllDocs & number // 2048
			ExportContent: MFilesAPI.MFVaultAccess.MFVaultAccessExportContent & number // 8192
			ImportContent: MFilesAPI.MFVaultAccess.MFVaultAccessImportContent & number // 16384
			ManageVLItemsFromClient: MFilesAPI.MFVaultAccess.MFVaultAccessManageVLItemsFromClient & number // 65536
			ManageExternalLocations: MFilesAPI.MFVaultAccess.MFVaultAccessManageExternalLocations & number // 131072
			LicenseAllowsModifications: MFilesAPI.MFVaultAccess.MFVaultAccessLicenseAllowsModifications & number // 262144
			ManageEvents: MFilesAPI.MFVaultAccess.MFVaultAccessManageEvents & number // 524288
			ManageTraditionalFolders: MFilesAPI.MFVaultAccess.MFVaultAccessManageTraditionalFolders & number // 1048576
			ChangeObjectStates: MFilesAPI.MFVaultAccess.MFVaultAccessChangeObjectStates & number // 4194304
			ChangeAssignments: MFilesAPI.MFVaultAccess.MFVaultAccessChangeAssignments & number // 8388608
			ManageCommonViews: MFilesAPI.MFVaultAccess.MFVaultAccessManageCommonViews & number // 16777216
			ManageCommonUISettings: MFilesAPI.MFVaultAccess.MFVaultAccessManageCommonUISettings & number // 33554432
			ManageCommonNotificationRules: MFilesAPI.MFVaultAccess.MFVaultAccessManageCommonNotificationRules & number // 134217728
			SeeDeletedDocs: MFilesAPI.MFVaultAccess.MFVaultAccessSeeDeletedDocs & number // 268435456
			MaterializeViews: MFilesAPI.MFVaultAccess.MFVaultAccessMaterializeViews & number // 536870912
		};

		MFNamedValueType: {
			ConfigurationValue: MFilesAPI.MFNamedValueType & number;  // 3
			UserDefinedValue: MFilesAPI.MFNamedValueType & number;  // 4
			RegistryValue: MFilesAPI.MFNamedValueType & number;  // 5
			FolderConfiguration: MFilesAPI.MFNamedValueType & number;  // 6
			AdminConfiguration: MFilesAPI.MFNamedValueType & number;  // 7
			SystemAdminConfiguration: MFilesAPI.MFNamedValueType & number;  // 8
		};

		MFViewFlag: {
			sNone: MFilesAPI.MFViewFlag.MFViewFlagsNone & number // 0
			Materialized: MFilesAPI.MFViewFlag.MFViewFlagMaterialized & number // 1
		};

		MFObjectVersionFlag: {
			None: MFilesAPI.MFObjectVersionFlag.MFObjectVersionFlagNone & number // 0
			Completed: MFilesAPI.MFObjectVersionFlag.MFObjectVersionFlagCompleted & number // 1
			HasRelatedObjects: MFilesAPI.MFObjectVersionFlag.MFObjectVersionFlagHasRelatedObjects & number // 2
		};

		MFPredefinedSearchFilterType: {
			Unspecified: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeUnspecified & number // 0
			ObjectType: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeObjectType & number // 1
			DocumentsModifiedToday: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsModifiedToday & number // 30000
			DocumentsModifiedLastWeek: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsModifiedLastWeek & number // 30001
			DocumentsModifiedLastMonth: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsModifiedLastMonth & number // 30002
			DocumentsModifiedLastYear: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsModifiedLastYear & number // 30003
			DocumentsAccessedByMeToday: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsAccessedByMeToday & number // 30004
			DocumentsAccessedByMeLastWeek: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastWeek & number // 30005
			DocumentsAccessedByMeLastMonth: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastMonth & number // 30006
			DocumentsAccessedByMeLastYear: MFilesAPI.MFPredefinedSearchFilterType.MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastYear & number // 30007
		};

		MFTriggerType: {
			Once: MFilesAPI.MFTriggerType.MFTriggerTypeOnce & number // 0
			Daily: MFilesAPI.MFTriggerType.MFTriggerTypeDaily & number // 1
			Weekly: MFilesAPI.MFTriggerType.MFTriggerTypeWeekly & number // 2
			MonthlyDate: MFilesAPI.MFTriggerType.MFTriggerTypeMonthlyDate & number // 3
			MonthlyDOW: MFilesAPI.MFTriggerType.MFTriggerTypeMonthlyDOW & number // 4
		};

		MFTriggerWeekDay: {
			Sunday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDaySunday & number // 1
			Monday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayMonday & number // 2
			Tuesday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayTuesday & number // 4
			Wednesday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayWednesday & number // 8
			Thursday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayThursday & number // 16
			Friday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayFriday & number // 32
			Saturday: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDaySaturday & number // 64
			EveryDay: MFilesAPI.MFTriggerWeekDay.MFTriggerWeekDayEveryDay & number // 125
		};

		MFTriggerMonth: {
			January: MFilesAPI.MFTriggerMonth.MFTriggerMonthJanuary & number // 1
			February: MFilesAPI.MFTriggerMonth.MFTriggerMonthFebruary & number // 2
			March: MFilesAPI.MFTriggerMonth.MFTriggerMonthMarch & number // 4
			April: MFilesAPI.MFTriggerMonth.MFTriggerMonthApril & number // 8
			May: MFilesAPI.MFTriggerMonth.MFTriggerMonthMay & number // 16
			June: MFilesAPI.MFTriggerMonth.MFTriggerMonthJune & number // 32
			July: MFilesAPI.MFTriggerMonth.MFTriggerMonthJuly & number // 64
			August: MFilesAPI.MFTriggerMonth.MFTriggerMonthAugust & number // 128
			September: MFilesAPI.MFTriggerMonth.MFTriggerMonthSeptember & number // 256
			October: MFilesAPI.MFTriggerMonth.MFTriggerMonthOctober & number // 512
			November: MFilesAPI.MFTriggerMonth.MFTriggerMonthNovember & number // 1024
			December: MFilesAPI.MFTriggerMonth.MFTriggerMonthDecember & number // 2048
			EveryMonth: MFilesAPI.MFTriggerMonth.MFTriggerMonthEveryMonth & number // 4095
		};

		MFTriggerWeekOfMonth: {
			FirstWeek: MFilesAPI.MFTriggerWeekOfMonth.MFTriggerWeekOfMonthFirstWeek & number // 1
			SecondWeek: MFilesAPI.MFTriggerWeekOfMonth.MFTriggerWeekOfMonthSecondWeek & number // 2
			ThirdWeek: MFilesAPI.MFTriggerWeekOfMonth.MFTriggerWeekOfMonthThirdWeek & number // 3
			FourthWeek: MFilesAPI.MFTriggerWeekOfMonth.MFTriggerWeekOfMonthFourthWeek & number // 4
			LastWeek: MFilesAPI.MFTriggerWeekOfMonth.MFTriggerWeekOfMonthLastWeek & number // 5
		};

		MFACLMode: {
			Simple: MFilesAPI.MFACLMode.MFACLModeSimple & number // 0
			AutomaticPermissionsWithComponents: MFilesAPI.MFACLMode.MFACLModeAutomaticPermissionsWithComponents & number // 1
		};

		MFACLEnforcingMode: {
			Automatic: MFilesAPI.MFACLEnforcingMode.MFACLEnforcingModeAutomatic & number // 0
			Provided: MFilesAPI.MFACLEnforcingMode.MFACLEnforcingModeProvided & number // 1
			ResetToDefault: MFilesAPI.MFACLEnforcingMode.MFACLEnforcingModeResetToDefault & number // 2
			None: MFilesAPI.MFACLEnforcingMode.MFACLEnforcingModeNone & number // 3
		};

		MFACLComponentOverrideAccess: {
			None: MFilesAPI.MFACLComponentOverrideAccess.MFACLComponentOverrideAccessNone & number // 0
			Granted: MFilesAPI.MFACLComponentOverrideAccess.MFACLComponentOverrideAccessGranted & number // 1
		};

		MFNamedACLType: {
			None: MFilesAPI.MFNamedACLType.MFNamedACLTypeNone & number // 0
			Normal: MFilesAPI.MFNamedACLType.MFNamedACLTypeNormal & number // 1
			Internal: MFilesAPI.MFNamedACLType.MFNamedACLTypeInternal & number // 2
		};

		MFIndirectPropertyIDLevelType: {
			PropertyDef: MFilesAPI.MFIndirectPropertyIDLevelType.MFIndirectPropertyIDLevelTypePropertyDef & number // 0
			ObjectType: MFilesAPI.MFIndirectPropertyIDLevelType.MFIndirectPropertyIDLevelTypeObjectType & number // 1
			StateChanger: MFilesAPI.MFIndirectPropertyIDLevelType.MFIndirectPropertyIDLevelTypeStateChanger & number // 2
		};

		MFEventHandlerType: {
			Undefined: MFilesAPI.MFEventHandlerType.MFEventHandlerTypeUndefined & number // 0
			EventHandlerBeforeSetProperties: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeSetProperties & number // 1
			EventHandlerAfterSetProperties: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterSetProperties & number // 2
			EventHandlerAfterCreateNewObjectFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCreateNewObjectFinalize & number // 3
			EventHandlerBeforeCheckInChanges: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCheckInChanges & number // 4
			EventHandlerAfterCheckInChanges: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCheckInChanges & number // 5
			EventHandlerBeforeCheckOut: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCheckOut & number // 6
			EventHandlerAfterCheckOut: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCheckOut & number // 7
			EventHandlerBeforeCancelCheckout: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCancelCheckout & number // 8
			EventHandlerAfterCancelCheckout: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCancelCheckout & number // 9
			EventHandlerBeforeDeleteObject: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeDeleteObject & number // 10
			EventHandlerAfterDeleteObject: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterDeleteObject & number // 11
			EventHandlerBeforeDestroyObject: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeDestroyObject & number // 12
			EventHandlerAfterDestroyObject: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterDestroyObject & number // 13
			EventHandlerBeforeSetObjectPermissions: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeSetObjectPermissions & number // 14
			EventHandlerAfterSetObjectPermissions: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterSetObjectPermissions & number // 15
			EventHandlerBeforeFileUpload: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeFileUpload & number // 16
			EventHandlerAfterFileUpload: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterFileUpload & number // 17
			EventHandlerBeforeFileDownload: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeFileDownload & number // 18
			EventHandlerAfterFileDownload: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterFileDownload & number // 19
			EventHandlerBeforeCreateNewValueListItem: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCreateNewValueListItem & number // 20
			EventHandlerAfterCreateNewValueListItem: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCreateNewValueListItem & number // 21
			EventHandlerBeforeLoginToVault: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeLoginToVault & number // 22
			EventHandlerAfterLoginToVault: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterLoginToVault & number // 23
			EventHandlerBeforeLogoutFromVault: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeLogoutFromVault & number // 24
			EventHandlerAfterLogoutFromVault: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterLogoutFromVault & number // 25
			EventHandlerBeforeRunScheduledJob: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeRunScheduledJob & number // 26
			EventHandlerAfterRunScheduledJob: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterRunScheduledJob & number // 27
			EventHandlerBeforeCreateNewObjectFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCreateNewObjectFinalize & number // 28
			EventHandlerBeforeCancelCreateObject: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCancelCreateObject & number // 29
			EventHandlerAfterCancelCreateObject: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCancelCreateObject & number // 30
			EventHandlerBeforeDestroyObjectVersion: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeDestroyObjectVersion & number // 31
			EventHandlerAfterDestroyObjectVersion: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterDestroyObjectVersion & number // 32
			EventHandlerReplication_AfterCreateNewObjectFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerReplication_AfterCreateNewObjectFinalize & number // 33
			EventHandlerReplication_AfterCheckInChanges: MFilesAPI.MFEventHandlerType.MFEventHandlerReplication_AfterCheckInChanges & number // 34
			EventHandlerVaultExtensionMethod: MFilesAPI.MFEventHandlerType.MFEventHandlerVaultExtensionMethod & number // 35
			EventHandlerBeforeCreateLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCreateLoginAccount & number // 36
			EventHandlerAfterCreateLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCreateLoginAccount & number // 37
			EventHandlerBeforeModifyLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeModifyLoginAccount & number // 38
			EventHandlerAfterModifyLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterModifyLoginAccount & number // 39
			EventHandlerBeforeRemoveLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeRemoveLoginAccount & number // 40
			EventHandlerAfterRemoveLoginAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterRemoveLoginAccount & number // 41
			EventHandlerBeforeCreateUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCreateUserAccount & number // 42
			EventHandlerAfterCreateUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCreateUserAccount & number // 43
			EventHandlerBeforeModifyUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeModifyUserAccount & number // 44
			EventHandlerAfterModifyUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterModifyUserAccount & number // 45
			EventHandlerBeforeRemoveUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeRemoveUserAccount & number // 46
			EventHandlerAfterRemoveUserAccount: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterRemoveUserAccount & number // 47
			EventHandlerBeforeCreateUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCreateUserGroup & number // 48
			EventHandlerAfterCreateUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCreateUserGroup & number // 49
			EventHandlerBeforeModifyUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeModifyUserGroup & number // 50
			EventHandlerAfterModifyUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterModifyUserGroup & number // 51
			EventHandlerBeforeRemoveUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeRemoveUserGroup & number // 52
			EventHandlerAfterRemoveUserGroup: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterRemoveUserGroup & number // 53
			EventHandlerAfterBringOnline: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterBringOnline & number // 54
			EventHandlerBeforeTakeOffline: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeTakeOffline & number // 55
			EventHandlerAfterCheckInChangesFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCheckInChangesFinalize & number // 56
			EventHandlerAfterBeginTransaction: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterBeginTransaction & number // 57
			EventHandlerBeforeCommitTransaction: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeCommitTransaction & number // 58
			EventHandlerBeforeRollbackTransaction: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeRollbackTransaction & number // 59
			EventHandlerAfterCancelCheckoutFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterCancelCheckoutFinalize & number // 60
			EventHandlerBeforeUndeleteObject: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeUndeleteObject & number // 61
			EventHandlerAfterUndeleteObject: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterUndeleteObject & number // 62
			EventHandlerAfterUndeleteObjectFinalize: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterUndeleteObjectFinalize & number // 63
			EventHandlerBeforeModifyMFilesCredentials: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeModifyMFilesCredentials & number // 64
			EventHandlerAfterModifyMFilesCredentials: MFilesAPI.MFEventHandlerType.MFEventHandlerAfterModifyMFilesCredentials & number // 65
			EventHandlerBeforeReturnView: MFilesAPI.MFEventHandlerType.MFEventHandlerBeforeReturnView & number // 66
		};

		MFAutomaticPermissionsOperationOptions: {
			None: MFilesAPI.MFAutomaticPermissionsOperationOptions.MFAutomaticPermissionsOperationOptionsNone & number // 0
			ForceActive: MFilesAPI.MFAutomaticPermissionsOperationOptions.MFAutomaticPermissionsOperationOptionsForceActive & number // 1
		};

		MFObjectOperationFlags: {
			None: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagNone & number // 0
			RequireReadAccess: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagRequireReadAccess & number // 1
			RequireEditAccess: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagRequireEditAccess & number // 2
			DisallowNameChange: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagDisallowNameChange & number // 4
			RequireChangeSecurityAccess: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagRequireChangeSecurityAccess & number // 8
			RequireFullAccess: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagRequireFullAccess & number // 16
			ChangeACLInAllVersions: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagChangeACLInAllVersions & number // 32
			RequireSomeAccess: MFilesAPI.MFObjectOperationFlags.MFObjectOperationFlagRequireSomeAccess & number // 64
		};

		MFFileDataStorage: {
			Default: MFilesAPI.MFFileDataStorage.MFFileDataStorageDefault & number // 0
			Disk: MFilesAPI.MFFileDataStorage.MFFileDataStorageDisk & number // 1
			DB: MFilesAPI.MFFileDataStorage.MFFileDataStorageDB & number // 2
			External: MFilesAPI.MFFileDataStorage.MFFileDataStorageExternal & number // 3
		};

		MFMetadataSyncFormat: {
			Word: MFilesAPI.MFMetadataSyncFormat.MFMetadataSyncFormatWord & number // 0
			Excel: MFilesAPI.MFMetadataSyncFormat.MFMetadataSyncFormatExcel & number // 1
			PowerPoint: MFilesAPI.MFMetadataSyncFormat.MFMetadataSyncFormatPowerPoint & number // 2
		};

		MFExportContentFlag: {
			None: MFilesAPI.MFExportContentFlag.MFExportContentFlagNone & number // 0
			LatestVersionsOnly: MFilesAPI.MFExportContentFlag.MFExportContentFlagLatestVersionsOnly & number // 2
			DestroyAfterExport: MFilesAPI.MFExportContentFlag.MFExportContentFlagDestroyAfterExport & number // 4
			ClearArchivalMarker: MFilesAPI.MFExportContentFlag.MFExportContentFlagClearArchivalMarker & number // 8
			SaveFilesAlsoAsPDFA: MFilesAPI.MFExportContentFlag.MFExportContentFlagSaveFilesAlsoAsPDFA & number // 32
			ExportInformationOnDestroyedData: MFilesAPI.MFExportContentFlag.MFExportContentFlagExportInformationOnDestroyedData & number // 64
			UseMultipleContentPackages: MFilesAPI.MFExportContentFlag.MFExportContentFlagUseMultipleContentPackages & number // 128
			IndicateDropouts: MFilesAPI.MFExportContentFlag.MFExportContentFlagIndicateDropouts & number // 1024
		};

		MFImportContentFlag: {
			None: MFilesAPI.MFImportContentFlag.MFImportContentFlagNone & number // 0
			UseMultipleContentPackages: MFilesAPI.MFImportContentFlag.MFImportContentFlagUseMultipleContentPackages & number // 1
			DeleteContentPackage: MFilesAPI.MFImportContentFlag.MFImportContentFlagDeleteContentPackage & number // 4
			ImportCheckoutStates: MFilesAPI.MFImportContentFlag.MFImportContentFlagImportCheckoutStates & number // 16
			ResetExportTimestamps: MFilesAPI.MFImportContentFlag.MFImportContentFlagResetExportTimestamps & number // 32
			DoNotImportObjectDestructions: MFilesAPI.MFImportContentFlag.MFImportContentFlagDoNotImportObjectDestructions & number // 64
			UseNamesAsAliases: MFilesAPI.MFImportContentFlag.MFImportContentFlagUseNamesAsAliases & number // 128
			ForceNoStructureIdUpdate: MFilesAPI.MFImportContentFlag.MFImportContentFlagForceNoStructureIdUpdate & number // 16384
			OmitDoneFile: MFilesAPI.MFImportContentFlag.MFImportContentFlagOmitDoneFile & number // 32768
		};

		MFSpecialObjectFlag: {
			None: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagNone & number // 0
			Shortcut: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagShortcut & number // 1
			Deleted: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagDeleted & number // 2
			RecentlyAccessedByValid: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagRecentlyAccessedByValid & number // 4
			HasSharedFiles: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagHasSharedFiles & number // 8
			Conflict: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagConflict & number // 16
			Normal: MFilesAPI.MFSpecialObjectFlag.MFSpecialObjectFlagNormal & number // 64
		};

		MFMetadataStructureItem: {
			None: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemNone & number // 0
			ObjectType: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemObjectType & number // 1
			PropertyDef: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemPropertyDef & number // 2
			Class: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemClass & number // 3
			Workflow: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemWorkflow & number // 4
			State: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemState & number // 5
			NamedACL: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemNamedACL & number // 6
			User: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemUser & number // 7
			UserGroup: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemUserGroup & number // 8
			ClassGroup: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemClassGroup & number // 9
			ViewDef: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemViewDef & number // 10
			ValueListItem: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemValueListItem & number // 13
			ValueList: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemValueList & number // 14
			VaultEventHandler: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemVaultEventHandler & number // 15
			StateTransition: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemStateTransition & number // 16
			All: MFilesAPI.MFMetadataStructureItem.MFMetadataStructureItemAll & number // 10000
		};

		MFBuiltInUserGroup: {
			AllInternalUsers: MFilesAPI.MFBuiltInUserGroup.MFBuiltInUserGroupAllInternalUsers & number // 1
			AllInternalAndExternalUsers: MFilesAPI.MFBuiltInUserGroup.MFBuiltInUserGroupAllInternalAndExternalUsers & number // 2
		};

		MFBuiltInMetadataStructureItemID: {
			All: MFilesAPI.MFBuiltInMetadataStructureItemID.MFBuiltInMetadataStructureItemIDAll & number // -1000000
		};

		MFCustomApplicationType: {
			Unspecified: MFilesAPI.MFCustomApplicationType.MFCustomApplicationTypeUnspecified & number // 0
			Client: MFilesAPI.MFCustomApplicationType.MFCustomApplicationTypeClient & number // 1
			Server: MFilesAPI.MFCustomApplicationType.MFCustomApplicationTypeServer & number // 2
		};

		MFMetadataStructureSelectorFlags: {
			None: MFilesAPI.MFMetadataStructureSelectorFlags.MFMetadataStructureSelectorFlagsNone & number // 0
			SelectNew: MFilesAPI.MFMetadataStructureSelectorFlags.MFMetadataStructureSelectorFlagsSelectNew & number // 1
			SelectExisting: MFilesAPI.MFMetadataStructureSelectorFlags.MFMetadataStructureSelectorFlagsSelectExisting & number // 2
			IncludeNewDependencies: MFilesAPI.MFMetadataStructureSelectorFlags.MFMetadataStructureSelectorFlagsIncludeNewDependencies & number // 4
			IncludeExistingDependencies: MFilesAPI.MFMetadataStructureSelectorFlags.MFMetadataStructureSelectorFlagsIncludeExistingDependencies & number // 8
		};

		MFFileFormat: {
			Native: MFilesAPI.MFFileFormat.MFFileFormatNative & number // 0
			PDF: MFilesAPI.MFFileFormat.MFFileFormatPDF & number // 1
			DisplayOnlyPDF: MFilesAPI.MFFileFormat.MFFileFormatDisplayOnlyPDF & number // 2
		};

		MFFolderListingAlgorithm: {
			None: MFilesAPI.MFFolderListingAlgorithm.MFFolderListingAlgorithmNone & number // 0
			TestEachValue: MFilesAPI.MFFolderListingAlgorithm.MFFolderListingAlgorithmTestEachValue & number // 1
			GetValuesByDistinctUse: MFilesAPI.MFFolderListingAlgorithm.MFFolderListingAlgorithmGetValuesByDistinctUse & number // 2
			TestEachValueWithSeparateQueries: MFilesAPI.MFFolderListingAlgorithm.MFFolderListingAlgorithmTestEachValueWithSeparateQueries & number // 3
		};

		MFAttachVaultOptionsFlag: {
			DisableNone: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableNone & number // 0
			DisableExternalObjectTypes: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableExternalObjectTypes & number // 1
			DisableExternalSources: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableExternalSources & number // 2
			DisableExportedDataSets: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableExportedDataSets & number // 4
			DisableExportImportJobs: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableExportImportJobs & number // 8
			DisableExternalUserGroups: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableExternalUserGroups & number // 16
			DisableEventHandlers: MFilesAPI.MFAttachVaultOptionsFlag.MFAttachVaultOptionsFlagDisableEventHandlers & number // 32
		};

		MFFolderUIStateLocationType: {
			Unknown: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeUnknown & number // 0
			RootFolder: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeRootFolder & number // 1
			ViewFoldersContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeViewFoldersContainer & number // 2
			PropertyFoldersContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypePropertyFoldersContainer & number // 3
			ObjectsContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeObjectsContainer & number // 4
			ObjectFilesContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeObjectFilesContainer & number // 5
			TraditionalFolder: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeTraditionalFolder & number // 6
			SearchResultsContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeSearchResultsContainer & number // 7
			HistoryUI: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeHistoryUI & number // 8
			RelationshipsUIFromTab: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeRelationshipsUIFromTab & number // 9
			CollectionMembersUI: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeCollectionMembersUI & number // 10
			SubobjectsUI: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeSubobjectsUI & number // 11
			ClearLocalCacheUI: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeClearLocalCacheUI & number // 12
			RelationshipsUIToTab: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeRelationshipsUIToTab & number // 13
			RelationshipsUIAllTab: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeRelationshipsUIAllTab & number // 14
			LocalTemporaryItemsContainer: MFilesAPI.MFFolderUIStateLocationType.MFFolderUIStateLocationTypeLocalTemporaryItemsContainer & number // 15
		};

		MFFolderListingColumnFlags: {
			SelectIfLeftOfSelectedMainColumn: MFilesAPI.MFFolderListingColumnFlags.MFFolderListingColumnFlagsSelectIfLeftOfSelectedMainColumn & number // 1
			HideColumnText: MFilesAPI.MFFolderListingColumnFlags.MFFolderListingColumnFlagsHideColumnText & number // 2
		};

		MFFolderListingViewMode: {
			Icon: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeIcon & number // 1
			SmallIcon: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeSmallIcon & number // 2
			List: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeList & number // 3
			Details: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeDetails & number // 4
			Thumbnail: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeThumbnail & number // 5
			Tile: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeTile & number // 6
			Thumbstrip: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeThumbstrip & number // 7
			Content: MFilesAPI.MFFolderListingViewMode.MFFolderListingViewModeContent & number // 8
		};

		MFFolderListingItemGroupingMode: {
			NoGrouping: MFilesAPI.MFFolderListingItemGroupingMode.MFFolderListingItemGroupingModeNoGrouping & number // 0
			GroupObjectsByObjectType: MFilesAPI.MFFolderListingItemGroupingMode.MFFolderListingItemGroupingModeGroupObjectsByObjectType & number // 1
			GroupViewsAndFoldersByType: MFilesAPI.MFFolderListingItemGroupingMode.MFFolderListingItemGroupingModeGroupViewsAndFoldersByType & number // 1024
			Unspecified: MFilesAPI.MFFolderListingItemGroupingMode.MFFolderListingItemGroupingModeUnspecified & number // -1
		};

		MFFolderColumnId: {
			IdSegment: MFilesAPI.MFFolderColumnId.MFFolderColumnIdIdSegment & number // -1000001
			ExportedFile: MFilesAPI.MFFolderColumnId.MFFolderColumnIdExportedFile & number // -1000000
			HasAssignments: MFilesAPI.MFFolderColumnId.MFFolderColumnIdHasAssignments & number // -22
			TypeEx: MFilesAPI.MFFolderColumnId.MFFolderColumnIdTypeEx & number // -21
			ObjectPermissions: MFilesAPI.MFFolderColumnId.MFFolderColumnIdObjectPermissions & number // -20
			ObjectType: MFilesAPI.MFFolderColumnId.MFFolderColumnIdObjectType & number // -19
			RelationshipTargetVer: MFilesAPI.MFFolderColumnId.MFFolderColumnIdRelationshipTargetVer & number // -18
			HasRelationships: MFilesAPI.MFFolderColumnId.MFFolderColumnIdHasRelationships & number // -17
			RelationshipDesc: MFilesAPI.MFFolderColumnId.MFFolderColumnIdRelationshipDesc & number // -16
			Score: MFilesAPI.MFFolderColumnId.MFFolderColumnIdScore & number // -15
			DateModified: MFilesAPI.MFFolderColumnId.MFFolderColumnIdDateModified & number // -14
			DateCreated: MFilesAPI.MFFolderColumnId.MFFolderColumnIdDateCreated & number // -13
			RelLocation: MFilesAPI.MFFolderColumnId.MFFolderColumnIdRelLocation & number // -12
			Location: MFilesAPI.MFFolderColumnId.MFFolderColumnIdLocation & number // -11
			ShLastModifiedBy: MFilesAPI.MFFolderColumnId.MFFolderColumnIdShLastModifiedBy & number // -10
			ShStatusChanged: MFilesAPI.MFFolderColumnId.MFFolderColumnIdShStatusChanged & number // -9
			ObjectVersion: MFilesAPI.MFFolderColumnId.MFFolderColumnIdObjectVersion & number // -8
			ObjectDispId: MFilesAPI.MFFolderColumnId.MFFolderColumnIdObjectDispId & number // -7
			CheckOutAt: MFilesAPI.MFFolderColumnId.MFFolderColumnIdCheckOutAt & number // -6
			CheckoutTo: MFilesAPI.MFFolderColumnId.MFFolderColumnIdCheckoutTo & number // -5
			Status: MFilesAPI.MFFolderColumnId.MFFolderColumnIdStatus & number // -4
			Size: MFilesAPI.MFFolderColumnId.MFFolderColumnIdSize & number // -3
			Type: MFilesAPI.MFFolderColumnId.MFFolderColumnIdType & number // -2
			Name: MFilesAPI.MFFolderColumnId.MFFolderColumnIdName & number // -1
		};

		MFEmailImportance: {
			Low: MFilesAPI.MFEmailImportance.MFEmailImportanceLow & number // 0
			Normal: MFilesAPI.MFEmailImportance.MFEmailImportanceNormal & number // 1
			High: MFilesAPI.MFEmailImportance.MFEmailImportanceHigh & number // 2
		};

		MFEmailSensitivity: {
			None: MFilesAPI.MFEmailSensitivity.MFEmailSensitivityNone & number // 0
			Normal: MFilesAPI.MFEmailSensitivity.MFEmailSensitivityNormal & number // 1
			Personal: MFilesAPI.MFEmailSensitivity.MFEmailSensitivityPersonal & number // 2
			Private: MFilesAPI.MFEmailSensitivity.MFEmailSensitivityPrivate & number // 3
			Confidential: MFilesAPI.MFEmailSensitivity.MFEmailSensitivityConfidential & number // 4
		};

		MFFileInformationType: {
			Unknown: MFilesAPI.MFFileInformationType.MFFileInformationTypeUnknown & number // 0
			EmailMessage: MFilesAPI.MFFileInformationType.MFFileInformationTypeEmailMessage & number // 1
		};

		MFAssignmentType: {
			Task: MFilesAPI.MFAssignmentType.MFAssignmentTypeTask & number // 0
			Approval: MFilesAPI.MFAssignmentType.MFAssignmentTypeApproval & number // 1
		};

		MFStringDataType: {
			JSON: MFilesAPI.MFStringDataType.MFStringDataTypeJSON & number // 0
			XML: MFilesAPI.MFStringDataType.MFStringDataTypeXML & number // 1
		};

		MFAdditionalClassInfoType: {
			Unknown: MFilesAPI.MFAdditionalClassInfoType.MFAdditionalClassInfoTypeUnknown & number // 0
			Assignment: MFilesAPI.MFAdditionalClassInfoType.MFAdditionalClassInfoTypeAssignment & number // 1
		};

		MFSignaturePromptInfoType: {
			Fixed: MFilesAPI.MFSignaturePromptInfoType.MFSignaturePromptInfoTypeFixed & number // 0
			Selectable: MFilesAPI.MFSignaturePromptInfoType.MFSignaturePromptInfoTypeSelectable & number // 1
			MetadataBased: MFilesAPI.MFSignaturePromptInfoType.MFSignaturePromptInfoTypeMetadataBased & number // 2
		};

		MFActionType: {
			Unknown: MFilesAPI.MFActionType.MFActionTypeUnknown & number // 0
			CreateAssignment: MFilesAPI.MFActionType.MFActionTypeCreateAssignment & number // 1
		};

		CurrentApplicationPlatform: MFilesAPI.MFExtApplicationPlatform & number;

		MFFacetSearchFlags: {
			None: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagNone & number // 0
			IgnoreSearchPermissions: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagIgnoreSearchPermissions & number // 2
			IgnoreFacetGroupPermissions: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagIgnoreFacetGroupPermissions & number // 4
			IgnoreFacetValuePermissions: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagIgnoreFacetValuePermissions & number // 8
			SortFacetValues: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagSortFacetValues & number // 16
			AscendingOrder: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagAscendingOrder & number // 32
			OverrideByConfiguration: MFilesAPI.MFFacetSearchFlags.MFFacetSearchFlagOverrideByConfiguration & number // 64
		};

		MFApplicationLicenseStatus: {
			Unknown: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusUnknown & number // 0
			NotNeeded: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusNotNeeded & number // 1
			NotInstalled: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusNotInstalled & number // 2
			Installed: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusInstalled & number // 3
			InstalledValid: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusValid & number // 4
			InstalledInvalid: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusInvalid & number // 5
			Trial: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusTrial & number // 6
			GracePeriod: MFilesAPI.MFApplicationLicenseStatus.MFApplicationLicenseStatusGracePeriod & number // 7
		};

		/**
		 * ApplicationTaskInfos constructor.
		 */

		ApplicationTaskInfos: { new(): MFilesAPI.ApplicationTaskInfos; }

		/**
		 * ApplicationTaskInfo constructor.
		 */

		ApplicationTaskInfo: { new(): MFilesAPI.ApplicationTaskInfo; }

		/** 
		 * MFResourceManager constructor.
		 */
		MFResourceManager: { new(): MFilesAPI.MFResourceManager; }

		/**
		 * Lookup constructor.
		 */
		Lookup: { new(): MFilesAPI.Lookup; }

		/**
		 * Lookups constructor.
		 */
		Lookups: { new(): MFilesAPI.Lookups; }

		/**
		 * IDs constructor.
		 */
		IDs: { new(): MFilesAPI.IDs; }

		/**
		 * SessionInfo constructor.
		 */
		SessionInfo: { new(): MFilesAPI.SessionInfo; }
		/**
		 * TimeZoneInformation constructor.
		 */

		TimeZoneInformation: { new(): MFilesAPI.TimeZoneInformation; }
		/**
		 * MFilesVersion constructor.
		 */

		MFilesVersion: { new(): MFilesAPI.MFilesVersion; }
		/**
		 * MFilesClientApplication constructor.
		 */

		MFilesClientApplication: { new(): MFilesAPI.MFilesClientApplication; }
		/**
		 * MFilesServerApplication constructor.
		 */

		MFilesServerApplication: { new(): MFilesAPI.MFilesServerApplication; }
		/**
		 * ObjectVersions constructor.
		 */

		ObjectVersions: { new(): MFilesAPI.ObjectVersions; }
		/**
		 * ObjectSearchResults constructor.
		 */

		ObjectSearchResults: { new(): MFilesAPI.ObjectSearchResults; }
		/**
		 * Expression constructor.
		 */
		Expression: { new(): MFilesAPI.Expression; }
		/**
		 * Expressions constructor.
		 */
		Expressions: { new(): MFilesAPI.Expressions; }
		/**
		 * ExpressionEx constructor.
		 */

		ExpressionEx: { new(): MFilesAPI.ExpressionEx; }
		/**
		 * ExpressionExs constructor.
		 */

		ExpressionExs: { new(): MFilesAPI.ExpressionExs; }
		/**
		 * SearchCondition constructor.
		 */

		SearchCondition: { new(): MFilesAPI.SearchCondition; }
		/**
		 * SearchConditions constructor.
		 */

		SearchConditions: { new(): MFilesAPI.SearchConditions; }
		/**
		 * SearchConditionEx constructor.
		 */

		SearchConditionEx: { new(): MFilesAPI.SearchConditionEx; }
		/**
		 * SearchConditionExs constructor.
		 */

		SearchConditionExs: { new(): MFilesAPI.SearchConditionExs; }
		/**
		 * SearchCriteria constructor.
		 */

		SearchCriteria: { new(): MFilesAPI.SearchCriteria; }
		/**
		 * View constructor.
		 */

		View: { new(): MFilesAPI.View; }
		/**
		 * Views constructor.
		 */

		Views: { new(): MFilesAPI.Views; }
		/**
		 * TemporarySearchView constructor.
		 */

		TemporarySearchView: { new(): MFilesAPI.TemporarySearchView; }
		/**
		 * ObjectClass constructor.
		 */

		ObjectClass: { new(): MFilesAPI.ObjectClass; }
		/**
		 * ObjectClasses constructor.
		 */

		ObjectClasses: { new(): MFilesAPI.ObjectClasses; }
		/**
		 * ObjectClassAdmin constructor.
		 */

		ObjectClassAdmin: { new(): MFilesAPI.ObjectClassAdmin; }
		/**
		 * ObjectClassesAdmin constructor.
		 */

		ObjectClassesAdmin: { new(): MFilesAPI.ObjectClassesAdmin; }
		/**
		 * ClassGroup constructor.
		 */

		ClassGroup: { new(): MFilesAPI.ClassGroup; }
		/**
		 * ClassGroups constructor.
		 */

		ClassGroups: { new(): MFilesAPI.ClassGroups; }
		/**
		 * UserAccount constructor.
		 */

		UserAccount: { new(): MFilesAPI.UserAccount; }
		/**
		 * UserAccounts constructor.
		 */

		UserAccounts: { new(): MFilesAPI.UserAccounts; }
		/**
		 * UserGroup constructor.
		 */

		UserGroup: { new(): MFilesAPI.UserGroup; }
		/**
		 * UserGroups constructor.
		 */

		UserGroups: { new(): MFilesAPI.UserGroups; }
		/**
		 * UserGroupAdmin constructor.
		 */

		UserGroupAdmin: { new(): MFilesAPI.UserGroupAdmin; }
		/**
		 * UserGroupsAdmin constructor.
		 */

		UserGroupsAdmin: { new(): MFilesAPI.UserGroupsAdmin; }
		/**
		 * NamedACL constructor.
		 */

		NamedACL: { new(): MFilesAPI.NamedACL; }
		/**
		 * NamedACLs constructor.
		 */

		NamedACLs: { new(): MFilesAPI.NamedACLs; }
		/**
		 * NamedACLAdmin constructor.
		 */

		NamedACLAdmin: { new(): MFilesAPI.NamedACLAdmin; }
		/**
		 * NamedACLsAdmin constructor.
		 */

		NamedACLsAdmin: { new(): MFilesAPI.NamedACLsAdmin; }
		/**
		 * ValueListItem constructor.
		 */

		ValueListItem: { new(): MFilesAPI.ValueListItem; }
		/**
		 * ValueListItems constructor.
		 */

		ValueListItems: { new(): MFilesAPI.ValueListItems; }
		/**
		 * TypedValue constructor.
		 */

		TypedValue: { new(): MFilesAPI.TypedValue; }
		/**
		 * TypedValues constructor.
		 */

		TypedValues: { new(): MFilesAPI.TypedValues; }
		/**
		 * PropertyValue constructor.
		 */

		PropertyValue: { new(): MFilesAPI.PropertyValue; }
		/**
		 * PropertyValues constructor.
		 */

		PropertyValues: { new(): MFilesAPI.PropertyValues; }
		/**
		 * PropertyValuesOfMultipleObjects constructor.
		 */

		PropertyValuesOfMultipleObjects: { new(): MFilesAPI.PropertyValuesOfMultipleObjects; }
		/**
		 * PropertyValueForDisplay constructor.
		 */

		PropertyValueForDisplay: { new(): MFilesAPI.PropertyValueForDisplay; }
		/**
		 * PropertyValuesForDisplay constructor.
		 */

		PropertyValuesForDisplay: { new(): MFilesAPI.PropertyValuesForDisplay; }
		/**
		 * KeyNamePair constructor.
		 */

		KeyNamePair: { new(): MFilesAPI.KeyNamePair; }
		/**
		 * KeyNamePairs constructor.
		 */

		KeyNamePairs: { new(): MFilesAPI.KeyNamePairs; }
		/**
		 * LoginAccountPersonalInformation constructor.
		 */

		LoginAccountPersonalInformation: { new(): MFilesAPI.LoginAccountPersonalInformation; }
		/**
		 * LoginAccount constructor.
		 */

		LoginAccount: { new(): MFilesAPI.LoginAccount; }
		/**
		 * LoginAccounts constructor.
		 */

		LoginAccounts: { new(): MFilesAPI.LoginAccounts; }
		/**
		 * ObjID constructor.
		 */

		ObjID: { new(): MFilesAPI.ObjID; }
		/**
		 * ObjVer constructor.
		 */

		ObjVer: { new(): MFilesAPI.ObjVer; }
		/**
		 * ObjVers constructor.
		 */

		ObjVers: { new(): MFilesAPI.ObjVers; }
		/**
		 * ObjOrFileVer constructor.
		 */

		ObjOrFileVer: { new(): MFilesAPI.ObjOrFileVer; }
		/**
		 * ObjType constructor.
		 */

		ObjType: { new(): MFilesAPI.ObjType; }
		/**
		 * ObjTypes constructor.
		 */

		ObjTypes: { new(): MFilesAPI.ObjTypes; }
		/**
		 * ObjTypeAdmin constructor.
		 */

		ObjTypeAdmin: { new(): MFilesAPI.ObjTypeAdmin; }
		/**
		 * ObjTypesAdmin constructor.
		 */

		ObjTypesAdmin: { new(): MFilesAPI.ObjTypesAdmin; }
		/**
		 * ObjTypeColumnMapping constructor.
		 */

		ObjTypeColumnMapping: { new(): MFilesAPI.ObjTypeColumnMapping; }
		/**
		 * ObjTypeColumnMappings constructor.
		 */

		ObjTypeColumnMappings: { new(): MFilesAPI.ObjTypeColumnMappings; }
		/**
		 * State constructor.
		 */

		State: { new(): MFilesAPI.State; }
		/**
		 * States constructor.
		 */

		States: { new(): MFilesAPI.States; }
		/**
		 * PropertyDef constructor.
		 */

		PropertyDef: { new(): MFilesAPI.PropertyDef; }
		/**
		 * PropertyDefs constructor.
		 */

		PropertyDefs: { new(): MFilesAPI.PropertyDefs; }
		/**
		 * PropertyDefAdmin constructor.
		 */

		PropertyDefAdmin: { new(): MFilesAPI.PropertyDefAdmin; }
		/**
		 * PropertyDefsAdmin constructor.
		 */

		PropertyDefsAdmin: { new(): MFilesAPI.PropertyDefsAdmin; }
		/**
		 * AccessControlList constructor.
		 */

		AccessControlList: { new(): MFilesAPI.AccessControlList; }
		/**
		 * AccessControlListComponentContainer constructor.
		 */

		AccessControlListComponentContainer: { new(): MFilesAPI.AccessControlListComponentContainer; }
		/**
		 * AccessControlListComponentKeys constructor.
		 */

		AccessControlListComponentKeys: { new(): MFilesAPI.AccessControlListComponentKeys; }
		/**
		 * AccessControlListComponentKey constructor.
		 */

		AccessControlListComponentKey: { new(): MFilesAPI.AccessControlListComponentKey; }
		/**
		 * AccessControlListComponent constructor.
		 */

		AccessControlListComponent: { new(): MFilesAPI.AccessControlListComponent; }
		/**
		 * AccessControlEntryContainer constructor.
		 */

		AccessControlEntryContainer: { new(): MFilesAPI.AccessControlEntryContainer; }
		/**
		 * AccessControlEntryKeys constructor.
		 */

		AccessControlEntryKeys: { new(): MFilesAPI.AccessControlEntryKeys; }
		/**
		 * AccessControlEntryKey constructor.
		 */

		AccessControlEntryKey: { new(): MFilesAPI.AccessControlEntryKey; }
		/**
		 * AccessControlEntryData constructor.
		 */

		AccessControlEntryData: { new(): MFilesAPI.AccessControlEntryData; }
		/**
		 * AccessControlEntry constructor.
		 */

		AccessControlEntry: { new(): MFilesAPI.AccessControlEntry; }
		/**
		 * VaultConnection constructor.
		 */

		VaultConnection: { new(): MFilesAPI.VaultConnection; }
		/**
		 * VaultConnections constructor.
		 */

		VaultConnections: { new(): MFilesAPI.VaultConnections; }
		/**
		 * VaultOnServer constructor.
		 */

		VaultOnServer: { new(): MFilesAPI.VaultOnServer; }
		/**
		 * VaultsOnServer constructor.
		 */

		VaultsOnServer: { new(): MFilesAPI.VaultsOnServer; }
		/**
		 * Vault constructor.
		 */

		Vault: { new(): MFilesAPI.Vault; }
		/**
		 * ObjectVersionAndProperties constructor.
		 */

		ObjectVersionAndProperties: { new(): MFilesAPI.ObjectVersionAndProperties; }
		/**
		 * FileVer constructor.
		 */

		FileVer: { new(): MFilesAPI.FileVer; }
		/**
		 * SourceObjectFile constructor.
		 */

		SourceObjectFile: { new(): MFilesAPI.SourceObjectFile; }
		/**
		 * SourceObjectFiles constructor.
		 */

		SourceObjectFiles: { new(): MFilesAPI.SourceObjectFiles; }
		/**
		 * ObjectCreationInfo constructor.
		 */

		ObjectCreationInfo: { new(): MFilesAPI.ObjectCreationInfo; }
		/**
		 * ObjectWindowResult constructor.
		 */

		ObjectWindowResult: { new(): MFilesAPI.ObjectWindowResult; }
		/**
		 * FileClass constructor.
		 */

		FileClass: { new(): MFilesAPI.FileClass; }
		/**
		 * FileClasses constructor.
		 */

		FileClasses: { new(): MFilesAPI.FileClasses; }
		/**
		 * AssociatedPropertyDef constructor.
		 */

		AssociatedPropertyDef: { new(): MFilesAPI.AssociatedPropertyDef; }
		/**
		 * AssociatedPropertyDefs constructor.
		 */

		AssociatedPropertyDefs: { new(): MFilesAPI.AssociatedPropertyDefs; }
		/**
		 * Validation constructor.
		 */

		Validation: { new(): MFilesAPI.Validation; }
		/**
		 * AutomaticValue constructor.
		 */

		AutomaticValue: { new(): MFilesAPI.AutomaticValue; }
		/**
		 * WorkflowAssignment constructor.
		 */

		WorkflowAssignment: { new(): MFilesAPI.WorkflowAssignment; }
		/**
		 * ObjectVersionWorkflowState constructor.
		 */

		ObjectVersionWorkflowState: { new(): MFilesAPI.ObjectVersionWorkflowState; }
		/**
		 * ObjectVersionPermissions constructor.
		 */

		ObjectVersionPermissions: { new(): MFilesAPI.ObjectVersionPermissions; }
		/**
		 * TraditionalFolder constructor.
		 */

		TraditionalFolder: { new(): MFilesAPI.TraditionalFolder; }
		/**
		 * TraditionalFolders constructor.
		 */

		TraditionalFolders: { new(): MFilesAPI.TraditionalFolders; }
		/**
		 * OwnerPropertyDef constructor.
		 */

		OwnerPropertyDef: { new(): MFilesAPI.OwnerPropertyDef; }
		/**
		 * Strings constructor.
		 */

		Strings: { new(): MFilesAPI.Strings; }
		/**
		 * ObjectTypeTargetForBrowsing constructor.
		 */

		ObjectTypeTargetForBrowsing: { new(): MFilesAPI.ObjectTypeTargetForBrowsing; }
		/**
		 * ObjectTypeTargetsForBrowsing constructor.
		 */

		ObjectTypeTargetsForBrowsing: { new(): MFilesAPI.ObjectTypeTargetsForBrowsing; }
		/**
		 * DataFunctionCall constructor.
		 */

		DataFunctionCall: { new(): MFilesAPI.DataFunctionCall; }
		/**
		 * VaultProperties constructor.
		 */

		VaultProperties: { new(): MFilesAPI.VaultProperties; }
		/**
		 * RestoreJob constructor.
		 */

		RestoreJob: { new(): MFilesAPI.RestoreJob; }
		/**
		 * BackupJob constructor.
		 */

		BackupJob: { new(): MFilesAPI.BackupJob; }
		/**
		 * Impersonation constructor.
		 */

		Impersonation: { new(): MFilesAPI.Impersonation; }
		/**
		 * Number constructor.
		 */

		Number: { new(): MFilesAPI.Number; }
		/**
		 * BooleanValue constructor.
		 */

		BooleanValue: { new(): MFilesAPI.BooleanValue; }
		/**
		 * Workflow constructor.
		 */

		Workflow: { new(): MFilesAPI.Workflow; }
		/**
		 * Workflows constructor.
		 */

		Workflows: { new(): MFilesAPI.Workflows; }
		/**
		 * ScheduledJob constructor.
		 */

		ScheduledJob: { new(): MFilesAPI.ScheduledJob; }
		/**
		 * SearchDef constructor.
		 */

		SearchDef: { new(): MFilesAPI.SearchDef; }
		/**
		 * FolderDef constructor.
		 */

		FolderDef: { new(): MFilesAPI.FolderDef; }
		/**
		 * FolderDefs constructor.
		 */

		FolderDefs: { new(): MFilesAPI.FolderDefs; }
		/**
		 * ViewLocation constructor.
		 */

		ViewLocation: { new(): MFilesAPI.ViewLocation; }
		/**
		 * FolderContentItem constructor.
		 */

		FolderContentItem: { new(): MFilesAPI.FolderContentItem; }
		/**
		 * FolderContentItems constructor.
		 */

		FolderContentItems: { new(): MFilesAPI.FolderContentItems; }
		/**
		 * NamedValues constructor.
		 */

		NamedValues: { new(): MFilesAPI.NamedValues; }
		/**
		 * UserOrUserGroupID constructor.
		 */

		UserOrUserGroupID: { new(): MFilesAPI.UserOrUserGroupID; }
		/**
		 * UserOrUserGroupIDEx constructor.
		 */

		UserOrUserGroupIDEx: { new(): MFilesAPI.UserOrUserGroupIDEx; }
		/**
		 * UserOrUserGroupIDs constructor.
		 */

		UserOrUserGroupIDs: { new(): MFilesAPI.UserOrUserGroupIDs; }
		/**
		 * UserOrUserGroupIDExs constructor.
		 */

		UserOrUserGroupIDExs: { new(): MFilesAPI.UserOrUserGroupIDExs; }
		/**
		 * Language constructor.
		 */

		Language: { new(): MFilesAPI.Language; }
		/**
		 * Languages constructor.
		 */

		Languages: { new(): MFilesAPI.Languages; }
		/**
		 * OCROptions constructor.
		 */

		OCROptions: { new(): MFilesAPI.OCROptions; }
		/**
		 * OCRZone constructor.
		 */

		OCRZone: { new(): MFilesAPI.OCRZone; }
		/**
		 * OCRZones constructor.
		 */

		OCRZones: { new(): MFilesAPI.OCRZones; }
		/**
		 * OCRPage constructor.
		 */

		OCRPage: { new(): MFilesAPI.OCRPage; }
		/**
		 * OCRPages constructor.
		 */

		OCRPages: { new(): MFilesAPI.OCRPages; }
		/**
		 * OCRZoneResult constructor.
		 */

		OCRZoneResult: { new(): MFilesAPI.OCRZoneResult; }
		/**
		 * OCRZoneResults constructor.
		 */

		OCRZoneResults: { new(): MFilesAPI.OCRZoneResults; }
		/**
		 * OCRPageResult constructor.
		 */

		OCRPageResult: { new(): MFilesAPI.OCRPageResult; }
		/**
		 * OCRPageResults constructor.
		 */

		OCRPageResults: { new(): MFilesAPI.OCRPageResults; }
		/**
		 * StateTransition constructor.
		 */

		StateTransition: { new(): MFilesAPI.StateTransition; }
		/**
		 * StateTransitions constructor.
		 */

		StateTransitions: { new(): MFilesAPI.StateTransitions; }
		/**
		 * ActionCreateAssignment constructor.
		 */

		ActionCreateAssignment: { new(): MFilesAPI.ActionCreateAssignment; }
		/**
		 * ActionSendNotification constructor.
		 */

		ActionSendNotification: { new(): MFilesAPI.ActionSendNotification; }
		/**
		 * DefaultProperty constructor.
		 */

		DefaultProperty: { new(): MFilesAPI.DefaultProperty; }
		/**
		 * DefaultProperties constructor.
		 */

		DefaultProperties: { new(): MFilesAPI.DefaultProperties; }
		/**
		 * ActionSetProperties constructor.
		 */

		ActionSetProperties: { new(): MFilesAPI.ActionSetProperties; }
		/**
		 * StateConditions constructor.
		 */

		StateConditions: { new(): MFilesAPI.StateConditions; }
		/**
		 * StateAdmin constructor.
		 */

		StateAdmin: { new(): MFilesAPI.StateAdmin; }
		/**
		 * StatesAdmin constructor.
		 */

		StatesAdmin: { new(): MFilesAPI.StatesAdmin; }
		/**
		 * WorkflowAdmin constructor.
		 */

		WorkflowAdmin: { new(): MFilesAPI.WorkflowAdmin; }
		/**
		 * WorkflowsAdmin constructor.
		 */

		WorkflowsAdmin: { new(): MFilesAPI.WorkflowsAdmin; }
		/**
		 * OptimizeVaultJob constructor.
		 */

		OptimizeVaultJob: { new(): MFilesAPI.OptimizeVaultJob; }
		/**
		 * SetPropertiesParams constructor.
		 */

		SetPropertiesParams: { new(): MFilesAPI.SetPropertiesParams; }
		/**
		 * SetPropertiesParamsOfMultipleObjects constructor.
		 */

		SetPropertiesParamsOfMultipleObjects: { new(): MFilesAPI.SetPropertiesParamsOfMultipleObjects; }
		/**
		 * CopyVaultJob constructor.
		 */

		CopyVaultJob: { new(): MFilesAPI.CopyVaultJob; }
		/**
		 * SQLDatabase constructor.
		 */

		SQLDatabase: { new(): MFilesAPI.SQLDatabase; }
		/**
		 * PropertyDefOrObjectType constructor.
		 */

		PropertyDefOrObjectType: { new(): MFilesAPI.PropertyDefOrObjectType; }
		/**
		 * PropertyDefOrObjectTypes constructor.
		 */

		PropertyDefOrObjectTypes: { new(): MFilesAPI.PropertyDefOrObjectTypes; }
		/**
		 * ObjIDs constructor.
		 */

		ObjIDs: { new(): MFilesAPI.ObjIDs; }
		/**
		 * Timestamp constructor.
		 */

		Timestamp: { new(): MFilesAPI.Timestamp; }
		/**
		 * ScheduledJobTrigger constructor.
		 */

		ScheduledJobTrigger: { new(): MFilesAPI.ScheduledJobTrigger; }
		/**
		 * ScheduledJobTriggers constructor.
		 */

		ScheduledJobTriggers: { new(): MFilesAPI.ScheduledJobTriggers; }
		/**
		 * TriggerType constructor.
		 */

		TriggerType: { new(): MFilesAPI.TriggerType; }
		/**
		 * DailyTrigger constructor.
		 */

		DailyTrigger: { new(): MFilesAPI.DailyTrigger; }
		/**
		 * WeeklyTrigger constructor.
		 */

		WeeklyTrigger: { new(): MFilesAPI.WeeklyTrigger; }
		/**
		 * MonthlyDateTrigger constructor.
		 */

		MonthlyDateTrigger: { new(): MFilesAPI.MonthlyDateTrigger; }
		/**
		 * MonthlyDOWTrigger constructor.
		 */

		MonthlyDOWTrigger: { new(): MFilesAPI.MonthlyDOWTrigger; }
		/**
		 * IndirectPropertyID constructor.
		 */

		IndirectPropertyID: { new(): MFilesAPI.IndirectPropertyID; }
		/**
		 * IndirectPropertyIDLevel constructor.
		 */

		IndirectPropertyIDLevel: { new(): MFilesAPI.IndirectPropertyIDLevel; }
		/**
		 * ActionSetPermissions constructor.
		 */

		ActionSetPermissions: { new(): MFilesAPI.ActionSetPermissions; }
		/**
		 * AdditionalFolder constructor.
		 */

		AdditionalFolder: { new(): MFilesAPI.AdditionalFolder; }
		/**
		 * AdditionalFolders constructor.
		 */

		AdditionalFolders: { new(): MFilesAPI.AdditionalFolders; }
		/**
		 * EventHandler constructor.
		 */

		EventHandler: { new(): MFilesAPI.EventHandler; }
		/**
		 * EventHandlers constructor.
		 */

		EventHandlers: { new(): MFilesAPI.EventHandlers; }
		/**
		 * AutomaticPermissions constructor.
		 */

		AutomaticPermissions: { new(): MFilesAPI.AutomaticPermissions; }
		/**
		 * SignatureSettings constructor.
		 */

		SignatureSettings: { new(): MFilesAPI.SignatureSettings; }
		/**
		 * ObjectFileAndObjVer constructor.
		 */

		ObjectFileAndObjVer: { new(): MFilesAPI.ObjectFileAndObjVer; }
		/**
		 * ObjectFileAndObjVerOfMultipleFiles constructor.
		 */

		ObjectFileAndObjVerOfMultipleFiles: { new(): MFilesAPI.ObjectFileAndObjVerOfMultipleFiles; }
		/**
		 * SemanticAliases constructor.
		 */

		SemanticAliases: { new(): MFilesAPI.SemanticAliases; }
		/**
		 * ExportContentJob constructor.
		 */

		ExportContentJob: { new(): MFilesAPI.ExportContentJob; }
		/**
		 * ArchiveOldVersionsJob constructor.
		 */

		ArchiveOldVersionsJob: { new(): MFilesAPI.ArchiveOldVersionsJob; }
		/**
		 * ImportContentJob constructor.
		 */

		ImportContentJob: { new(): MFilesAPI.ImportContentJob; }
		/**
		 * ActionConvertToPDF constructor.
		 */

		ActionConvertToPDF: { new(): MFilesAPI.ActionConvertToPDF; }
		/**
		 * VerifyVaultJob constructor.
		 */

		VerifyVaultJob: { new(): MFilesAPI.VerifyVaultJob; }
		/**
		 * ShortcutMappingInfo constructor.
		 */

		ShortcutMappingInfo: { new(): MFilesAPI.ShortcutMappingInfo; }
		/**
		 * ObjOrFileVers constructor.
		 */

		ObjOrFileVers: { new(): MFilesAPI.ObjOrFileVers; }
		/**
		 * FileVers constructor.
		 */

		FileVers: { new(): MFilesAPI.FileVers; }
		/**
		 * IDRange constructor.
		 */

		IDRange: { new(): MFilesAPI.IDRange; }
		/**
		 * ExportStructureItem constructor.
		 */

		ExportStructureItem: { new(): MFilesAPI.ExportStructureItem; }
		/**
		 * ExportStructureItems constructor.
		 */

		ExportStructureItems: { new(): MFilesAPI.ExportStructureItems; }
		/**
		 * PluginInfo constructor.
		 */

		PluginInfo: { new(): MFilesAPI.PluginInfo; }
		/**
		 * PluginInfos constructor.
		 */

		PluginInfos: { new(): MFilesAPI.PluginInfos; }
		/**
		 * MetadataStructureSelector constructor.
		 */

		MetadataStructureSelector: { new(): MFilesAPI.MetadataStructureSelector; }
		/**
		 * MetadataStructureSelectors constructor.
		 */

		MetadataStructureSelectors: { new(): MFilesAPI.MetadataStructureSelectors; }
		/**
		 * AttachVaultOptions constructor.
		 */

		AttachVaultOptions: { new(): MFilesAPI.AttachVaultOptions; }
		/**
		 * FolderUIState constructor.
		 */

		FolderUIState: { new(): MFilesAPI.FolderUIState; }
		/**
		 * FolderListingUIState constructor.
		 */

		FolderListingUIState: { new(): MFilesAPI.FolderListingUIState; }
		/**
		 * FolderListingColumn constructor.
		 */

		FolderListingColumn: { new(): MFilesAPI.FolderListingColumn; }
		/**
		 * FolderListingColumns constructor.
		 */

		FolderListingColumns: { new(): MFilesAPI.FolderListingColumns; }
		/**
		 * FolderListingColumnSorting constructor.
		 */

		FolderListingColumnSorting: { new(): MFilesAPI.FolderListingColumnSorting; }
		/**
		 * FolderListingColumnSortings constructor.
		 */

		FolderListingColumnSortings: { new(): MFilesAPI.FolderListingColumnSortings; }
		/**
		 * VaultNotificationOperations constructor.
		 */

		VaultNotificationOperations: { new(): MFilesAPI.VaultNotificationOperations; }
		/**
		 * VaultServerDataPushOperations constructor.
		 */

		VaultServerDataPushOperations: { new(): MFilesAPI.VaultServerDataPushOperations; }
		/**
		 * EmailMessageInformation constructor.
		 */

		EmailMessageInformation: { new(): MFilesAPI.EmailMessageInformation; }
		/**
		 * FileInformation constructor.
		 */

		FileInformation: { new(): MFilesAPI.FileInformation; }
		/**
		 * AssignmentClassInfo constructor.
		 */

		AssignmentClassInfo: { new(): MFilesAPI.AssignmentClassInfo; }
		/**
		 * StringData constructor.
		 */

		StringData: { new(): MFilesAPI.StringData; }
		/**
		 * TaskAssignmentClassInfo constructor.
		 */

		TaskAssignmentClassInfo: { new(): MFilesAPI.TaskAssignmentClassInfo; }
		/**
		 * ApprovalAssignmentClassInfo constructor.
		 */

		ApprovalAssignmentClassInfo: { new(): MFilesAPI.ApprovalAssignmentClassInfo; }
		/**
		 * SignaturePromptInfos constructor.
		 */

		SignaturePromptInfos: { new(): MFilesAPI.SignaturePromptInfos; }
		/**
		 * SignaturePromptInfo constructor.
		 */

		SignaturePromptInfo: { new(): MFilesAPI.SignaturePromptInfo; }
		/**
		 * SignaturePromptInfoSelectable constructor.
		 */

		SignaturePromptInfoSelectable: { new(): MFilesAPI.SignaturePromptInfoSelectable; }
		/**
		 * SignaturePromptInfoMetadataBased constructor.
		 */

		SignaturePromptInfoMetadataBased: { new(): MFilesAPI.SignaturePromptInfoMetadataBased; }
		/**
		 * ActionDefinitions constructor.
		 */

		ActionDefinitions: { new(): MFilesAPI.ActionDefinitions; }
		/**
		 * ActionDefinition constructor.
		 */

		ActionDefinition: { new(): MFilesAPI.ActionDefinition; }
		/**
		 * StateTransitionForClient constructor.
		 */

		StateTransitionForClient: { new(): MFilesAPI.StateTransitionForClient; }
		/**
		 * StateTransitionsForClient constructor.
		 */

		StateTransitionsForClient: { new(): MFilesAPI.StateTransitionsForClient; }
		/**
		 * PropertyValueProspect constructor.
		 */

		// Unclear what this is so commented out
		// PropertyValueProspect: { new(): MFilesAPI.PropertyValueProspect; }
		/**
		 * PropertyValueProspects constructor.
		 */

		// Unclear what this is so commented out
		// PropertyValueProspects: { new(): MFilesAPI.PropertyValueProspects; }
		/**
		 * AutomaticMetadataResult constructor.
		 */

		AutomaticMetadataResult: { new(): MFilesAPI.AutomaticMetadataResult; }
		/**
		 * SharedLinkInfo constructor.
		 */

		SharedLinkInfo: { new(): MFilesAPI.SharedLinkInfo; }
		/**
		 * SharedLinkInfos constructor.
		 */

		SharedLinkInfos: { new(): MFilesAPI.SharedLinkInfos; }
		/**
		 * NamedValueNamespace constructor.
		 */
		NamedValueNamespace: { new(): MFilesAPI.NamedValueNamespace; }

		/**
		 * NamedValueNamespaces constructor.
		 */
		NamedValueNamespaces: { new(): MFilesAPI.NamedValueNamespaces; }

		/**
		 * SharedFileInfo constructor.
		 */
		SharedFileInfo: { new(): MFilesAPI.SharedFileInfo; }
	}

	/**
	 * An interface for accessing the content of M-Files Client Application Dashboard.
	 */
	interface IDashboard {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: IDashboardEvents;

		/**
		 * Receives the dashboard custom data object that was passed for the dashboard when it was displayed. Read only.
		 * @member {Object}
		 */
		readonly CustomData: unknown

		/**
		 * Gets the dashboard parent object. Can be the IShellPaneContainer, IVaultUI, IShellUI or IShellFrame. Read only.
		 */
		readonly Parent: IShellPaneContainer | IVaultUI | IShellUI | IShellFrame;

		/**
		 * Resolves if the dashboard is a popup dashboard.
		 */
		readonly IsPopupDashboard: boolean;

		/**
		 * If true, the dashboard is automatically closed with the parent object.
		 * @member {boolean}
		 */
		AutoStopWithParent: boolean;

		/**
		 * If true, the dashboard allows text selection and copying.
		 * @member {boolean}
		 */
		AllowContentTextCopy: boolean;

		/**
		 * Gets the dashboard window. Returns the window only for popup dashboards.
		 */
		readonly Window: IWindow;

		/**
		 * Shows a message box.
		 * @param {string | DialogData} message - The message or the dialog data object.
		 * @returns {number} The index of clicked button.
		 */
		ShowMessage(name: string | DialogData): number;

		/**
		 * Specifies if the layout should be right-to-left (e.g., for Hebrew and Arabic).
		 * @member {boolean}
		 */
		readonly UseRightToLeftLayout: boolean;

		/**
		 * Accesses the vault object.
		 * @member {MFilesAPI.Vault}
		 */
		readonly Vault: MFilesAPI.Vault;

		/**
		 * Shows a dashboard in a popup window.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {boolean} waitUntilClosed - True to wait until the popup window is closed.
		 * @param {Object} data - Data object to pass for the dashboard code.
		 */
		ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: Object): void;
	}

	/**
	 * The Dashboard specific event registration object.
	 */
	interface IDashboardEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
	}

	/**
	 * The Dashboard specific event registration interface.
	 */
	interface IDashboardEvents
		extends IEvents, IDashboardEventObject {

		// TODO: Events
		/**
		 * Registers an event handler to be run when an event is triggered.
		 * @param event - The event to listen for.
		 * @param sink - The event sink.
		 */
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
	}

	/**
	 * An interface for accessing the content of M-Files Admin Dashboard.
	 */
	interface IAdminDashboard extends IDashboard {

		/**
		 * Specifies if the dashboard contains unsaved changes.
		 * @member {boolean}
		 */
		UnsavedChanges: boolean;

		/**
		 * Sets the callback method to use for saving all changes.
		 * Writeonly method.
		 * @member {EventCallback}
		 */
		SaveAllMethod: () => any;

		/**
		 * Shows a Browser for folder -dialog.
		 * @param {string} title - Title message to show in the dialog, can be empty.
		 * @returns {string} Selected folder path, or an empty string.
		 */
		ShowBrowseForFolder(title: string): string;

		/**
		 * Shows a Open file -dialog.
		 * @param {string} folder - Initial folder to use, can be empty.
		 * @param {string} extension - Default file extension to load, can be empty.
		 * @param {string} filters - File type filters, can be empty.
		 * @returns {string} Selected filepath, or an empty string.
		 */
		ShowOpenDialog(folder: string, extension: string, filters: string): string;

		/**
		 * Shows a Open file -dialog with multiselect ability.
		 * @param {string} folder - Initial folder to use, can be empty.
		 * @param {string} extension - Default file extension to load, can be empty.
		 * @param {string} filters - File type filters, can be empty.
		 * @returns {string} Selected filepaths as JSON string array string, or an empty.
		 */
		ShowOpenMultiDialog(folder: string, extension: string, filters: string): string;

		/**
		 * Shows a system exception dialog with the given texts.
		 * @param {string} message - Message.
		 * @param {string} stack - Stack.
		 */
		ShowErrorDialog(message: string, stack: string): void;

		/**
		 * Shows a Save as -dialog.
		 * @param {string} folder - Initial folder to use, can be empty.
		 * @param {string} namesuggestion - Default name to use, can be empty.
		 * @param {string} filters - File type filters, can be empty.
		 * @returns {string} Selected filepath, or an empty string.
		 */
		ShowSaveAsDialog(folder: string, namesuggestion: string, filters: string): string;

		/**
		 * Return the contents of a file.
		 * @param {string} filename - Absolute filename.
		 * @returns {string} The content of the file.
		 */
		LoadTextFile(filename: string): string;

		/**
		 * Saves the content into a file.
		 * @param {string} filename - Absolute filename.
		 * @param {string} content - Content to save.
		 */
		SaveTextFile(filename: string, content: string): void;

		/**
		 * Return the contents of a file in Base64 encoded string.
		 * @param {string} filename - Absolute filename.
		 * @returns {string} The content of the file in base64.
		 */
		LoadFileBase64(filename: string): string;

		/**
		 * Saves the Base64 string into a binary file.
		 * @param {string} filename - Absolute filename.
		 * @param {string} content - Base64 encoded content to save.
		 */
		SaveFileBase64(filename: string, content: string): void;

		/**
		 * Return true if the file exists.
		 * @param {string} filename - Absolute filename.
		 * @returns {boolean} True if the file exists.
		 */
		FileExists(filename: string): boolean;

		/**
		 * Authenticate with authentication provider and store result to server.
		 * @param {string} usertype - Special user type "common"/"indexer".
		 * @param {string} target - Target identifier of the repository.
		 * @param {string} assembly - Assembly used to authenticate.
		 * @param {string} bridgeclass - Bridge class used to 'run' authentication.
		 * @param {string} configname - Name of the configuration.
		 * @param {string} config - Configuration.
		 * @returns {boolean} Result.
		 */
		AuthenticateAndStore(usertype: string, target: string, assembly: string, bridgeclass: string, configname: string, config: string): boolean;

		/**
		 * Requests new vault generation and receive an access to that.
		 * @member {MFilesAPI.Vault}
		 */
		RenewVault(): MFilesAPI.Vault;
	}

	/**
	 * An interface for registering to listen events from M-Files Client Application state changes.
	 * @typedef {object} IEvents
	 */
	interface IEvents {

		/**
		 * Registers a handler object for handling the specified type of events.
		 * @param {MFiles.Event} eventToListen - The event type to listen to.
		 * @param {function} eventSink - Event sink to register.
		 * @returns {number} - The hanlde to the registered sink.
		Register( eventToListen: TabSelectedEvent | MFilesUI.Event | string, eventSink: () => void ): number;*/

		/**
		 * Unregisters the event sink.
		 * @param {number} sinkHandle - The event sink handle.
		 */
		Unregister(sinkHandle: number): void;
	}

	/**
	 * An interface for accessing the content of M-Files Client Application Search Pane.
	 */
	interface ISearchPane {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		Events: ISearchPaneEvents;

		/**
		 * Resolves if the search pane is available here. Read-only.
		 * @member {boolean}
		 */
		readonly Available: boolean

		/**
		 * Gets/Sets search pane visibility.
		 * @member {boolean}
		 */
		Visible: boolean

		/**
		 * Sets the UI theme of the shell frame.
		 * @param {Object} - The task pane theme object. See the theme object description.
		 */
		SetTheme(theme: Object): void;  // TODO: Define theme object.

		/*
		//! Executes the current search.
		[id( 5 ), hidden]
		HRESULT ExecuteSearch(
			[ in ] BSTR facetFilter  //!< If not empty, represents the facet filter to be applied.
		);
		 */

	}

	/**
	 * An interface for accessing the content of M-Files Client Application Top Pane.
	 */
	interface ITopPane {

		/**
		 * Accesses the event source object for this object.
		 */
		Events: IEvents

		/**
		 * Resolves if the top pane is available here.
		 */
		Available: boolean

		/**
		 * Resolves if the top pane is visible.
		 */
		Visible: boolean

		/**
		 * Sets the shell window main area to show a dashboard.
		 */
		ShowDashboard(

			/**
			 * The dashboard ID.
			 */
			dashboardID: string,

			/**
			 * Data object to pass for the HTML code.
			 */
			data: object
		): void;

		/**
		 * Opens a context menu for given ID.
		 */
		OpenContextMenu(

			/**
			 * The menu ID.
			 */
			menuID: string,

			/**
			 * The menu position from left in logical pixels.
			 */
			left: number,

			/**
			 * The menu position from top in logical pixels.
			 */
			top: number,

			/**
			 * The menu alignment flags.
			 */
			flags: number,

			/**
			 * Custom data object.
			 */
			customData: string
		): void;

		/**
		 * Gets the network status roundtrip time in milliseconds.
		 */
		NetWorkStatusRoundTripTime: number;

		/**
		 * Gets the current breadcrumb.
		 */
		Breadcrumbs: string;

		/**
		 * Shows the connection status dialog.
		 */
		ShowConnectionStatusDialog(): void;

		/**
		 * Returns the shell window.
		 */
		ShellFrame: IShellFrame;

		/**
		 * Gets the deadline of the automatic installation if one has been defined.
		 * The deadline (in UTC) of the automatic installation as ISO 8601 string.
		 */
		AutoInstallDeadline: string

		/**
		 * Returns "true" if the automatic installation note can be shown in the top area. The next call returns false unless the M-Files Desktop UI is restarted.
		 */
		CanShowAutoInstallNoteNow: boolean

		/**
		 * Starts the automatic installation if an installation package is found.
		 */
		StartAutoInstall(

			/**
			 * Not yet used.
			 */
			postpone: boolean
		): void;

		/**
		 * Shows the offline sync status dialog.
		 */
		ShowOfflineSyncStatusDialog(): void;

		/**
		 * Gets the visibility of the offline synchronization status icon.
		 */
		OfflineSyncStatusIconVisible: boolean;
	}

	/**
	 * The SearchPane specific event registration object.
	 */
	interface ISearchPaneEventObject {

		OnStarted?: () => void;
		OnStop?: () => void;
		OnShowPane?: () => void;
		OnHidePane?: () => void;
	}

	/**
	 * The SearchPane specific event registration interface.
	 */
	interface ISearchPaneEvents
		extends IEvents, ISearchPaneEventObject {

		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.ShowPane, sink: () => void): number;
		Register(event: Event.HidePane, sink: () => void): number;

	}

	/**
	 * An interface for accessing the content of M-Files Client Application UI features.
	 */
	interface IShellFrame {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		Events: IShellFrameEvents;

		/**
		 * Accesses the task pane object. Read only.
		 * @member {ITaskPane}
		 */
		TaskPane: ITaskPane;

		/**
		 * Accesses the bottom pane container object. Read only.
		 * @member {IShellPaneContainer}
		 */
		BottomPane: IShellPaneContainer;

		/**
		 * Accesses the right pane container object. Read only.
		 * @member {IShellPaneContainer}
		 */
		RightPane: IShellPaneContainer;

		/**
		 * Accesses the search pane object. Read only.
		 * @member {ISearchPane}
		 */
		SearchPane: ISearchPane;

		/**
		 * Accesses the main listing view object. Read only.
		 * @member {IShellListing}
		 */
		Listing: IShellListing;

		/**
		 * Accesses the commands object. Read only.
		 * @member {ICommands}
		 */
		Commands: ICommands;

		/**
		 * Indicates if the window represents a location in object folder (i.e. inside of multifile object). Read only.
		 * @member {boolean}
		 */
		IsObjectLocation: boolean;

		/**
		 * The object version for current location. Applicable only if the current location is in object folder. Read only.
		 * @member {MFilesAPI.ObjectVersion}
		 */
		CurrentObjectVersion: MFilesAPI.ObjectVersion;

		/**
		 * Indicates if the window represents a location in a folder. Read only.
		 * @member {boolean}
		 */
		IsFolderLocation: boolean;

		/**
		 * The folder definition for current location. Applicable only if the current location is in non-object folder. Read only.
		 * @member {MFilesAPI.FolderDefs}
		 */
		CurrentFolder: MFilesAPI.FolderDefs;

		/**
		 * The parent folder for current location. Read only.
		 * @member {MFilesAPI.FolderDefs}
		 */
		ParentFolder: MFilesAPI.FolderDefs;

		/**
		 * The current location as a path. The path is relative to the vault root.
		 * @member {string}
		 */
		CurrentPath: string;

		/**
		 * Navigates to the parent folder.
		 */
		NavigateToParent(): void;

		/**
		 * Navigates the shell frame to the location of an object.
		 */
		NavigateToObject(targetObject: MFilesAPI.ObjID): void;

		/**
		 * The parent shell UI object. Read only.
		 * @member {IShellUI}
		 */
		ShellUI: IShellUI;

		/**
		 * Restores the standard shell window main area content (i.e. the listing view)
		 */
		ShowDefaultContent(): void;

		/**
		 * Shows a report as a content of the shell window main area.
		 * @param {string} reportURL - The report URL.
		 */
		ShowSSRSReport(reportURL: string): void;

		/**
		 * Sets the shell window main area to show a dashboard.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {Object} data - Data object to pass for the HTML code.
		 */
		ShowDashboard(dashboardID: string, data: Object): void;

		/**
		 * Shows a report in a popup window.
		 * @param {string} reportWindowTitle - The popup dialog title.
		 * @param {string} reportURL - THe report URL.
		 */
		ShowPopupSSRSReport(reportWindowTitle: string, reportURL: string): void;

		/**
		 * Shows a dashboard in a popup window.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {boolean} waitUntilClosed - True to wait until the popup window is closed.
		 * @param {Object} data - Data object to pass for the dashboard code.
		 */
		ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: Object): void;

		/**
		 * Shows a message box.
		 * @param {string | DialogData} message - The message or the dialog data object.
		 * @returns {number} The index of clicked button.
		 */
		ShowMessage(name: string | DialogData): number;

		/**
		 * Accesses the outer window in where the shell frame is located.
		 * @member {IWindow}
		 */
		OuterWindow: IWindow;

		/**
		 * Sets background images. Available only if the application has a permission to change the theme.
		 * @param {string} background - The BMP file for background. The file must be included in client extension application.
		 * @param {string} backgroundToRight - The BMP file for background (expanding to right). The file must be included in client extension application.
		 * @param {string} backgroundDown - The BMP file for background (expanding down). The file must be included in client extension application.
		 */
		SetBackgroundImages(background: string, backgroundToRight: string, backgroundDown: string): void;

		/*
		//! Returns lookup values.
		// For internal use only. Do not call. Can be deprecated in future.
		[hidden, id( 24 )]
		HRESULT GetLookupValues(
			[ in ] IVault* vault,  //!< The vault.
			[ in ] long valuelist,  //!< The value list.
			[ in ] long maxResults,  //!< The maximum value of returned values. Use 0 to retrieve all results.
			[ in ] BSTR searchCriteria,  //!< The search criteria used to find corresponding lookup values.
			[out, retval] SAFEARRAY( VARIANT ) * array  //!< Receives array of valuelist values.
		);
		 */

		/*
		//! Checks if a value already exists in the value list.
		// For internal use only. Do not call. Can be deprecated in future.
		[hidden, id( 25 )]
		HRESULT ValueExists(
			[ in ] IVault* vault,  //!< The vault.
			[ in ] long valuelist,  //!< The value list.
			[ in ] BSTR value,  //!< The value to compare.
			[out, retval] long* ID  //!< Receives id of found value or 0 if the value is not found.
		);
		 */

		/*
		//! Performs an internal test.
		[id( 3000 ), hidden]
		HRESULT Test(
			[ in ] VARIANT testParam1,  //!< The test parameter 1.
			[ in ] VARIANT testParam2,  //!< The test parameter 1.
			[out, retval] VARIANT* testResult  //!< The test result.
		);
		 */

		/*
		//! Gets the listing control CLSID. Deprecated, use MFiles.CLSID.ShellListingCtrl instead.
		[propget, id( 26 ), hidden]
		HRESULT ListingControlCLSID(
			[out, retval] BSTR* clsid  //!< Receives the CLSID.
		);
		 */

		/**
		 * Gets the specified listing window object.
		 * @param {number} listingIndex - The zero-based index of the listing to attach to. Zero refers to the main listing.
		 * @returns {MFiles.IShellListing} - The listing window object.
		 */
		GetListing(listingIndex: number): IShellListing;

		/**
		 * Creates an additional listing window.
		 * @param {string} path - The path to the folder to show in the listing window. The path is relative to the vault root.
		 * @returns {MFiles.IShellListing} - The new listing window object.
		 */
		CreateAdditionalListingForPath(path: string): IShellListing;

		/**
		 * Creates an additional listing window.
		 * @param {number} viewID - The ID of the view to show in the listing window.
		 * @returns {MFiles.IShellListing} - The new listing window object.
		 */
		CreateAdditionalListingForView(viewID: number): IShellListing;

		/**
		 * Accesses the currently active listing window. Read only.
		 * @member {MFiles.IShellListing}
		 */
		ActiveListing: IShellListing;

		/**
		 * Specifies if the layout should be more compact. E.g., some elements and fonts could be smaller, to make the layout work better on small screen resolutions like 1366 x 768 laptop screens.
		 * @member {boolean}
		 */
		UseCompactLayout: boolean;

		// Shell frame theme object.
		// Supported members:
		// background_Color: <long | string>
		// background_BitmapsEnabled: <boolean>
		// background_TaskPane_BottomRightBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_BottomMiddleBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_BottomLeftBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_MidRightBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_MidLeftBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_TopRightBitmapFile: <string>  //!< The bitmap file.
		// background_TaskPane_TopLeftBitmapFile: <string>  //!< The bitmap file.
		// background_SearchPane_TopBitmapFile: <string>  //!< The bitmap file.
		// background_SearchPane_DownAndRightBitmapFile: <string>  //!< The bitmap file.
		// background_LoginPane_TopBitmapFile: <string>  //!< The bitmap file.
		// background_LoginPane_DownAndRightBitmapFile: <string>  //!< The bitmap file.

		/**
		 * Sets the UI theme of the shell frame.
		 * @param {Object} - The task pane theme object. See the theme object description.
		 */
		SetTheme(theme: Object): void;

		/**
		 * Gets the current shell frame UI state object.
		 * @returns {MFilesAPI.FolderUIState} The folder UI state object.
		 */
		// GetFolderUIState(): MFilesAPI.FolderUIState;

		/**
		 * Sets the current shell frame UI state object.
		 * @param {MFilesAPI.FolderUIState} folderUIState - The folder UI state object.
		 */
		// SetFolderUIState( folderUIState: MFilesAPI.FolderUIState ): void;

		/*
		//! Indicates if the specified search feature is available.
		IsSearchFeatureAvailable(
			[ in ] enum SearchFeature searchFeature,  //!< Search feature to check.
				[ in ] VARIANT_BOOL currentFolderContext,  //!< True to use the current folder as context.
					[out, retval] VARIANT_BOOL* isAvailable  //!< Receives the result.
		);
		 */
	}

	/**
	 * The ShellFrame specific event registration object.
	 */
	interface IShellFrameEventObject {

		// TODO: Events
		OnStarted?: () => any;
		OnStop?: () => any;
		OnNewTaskPaneEvent?: (taskPane: ITaskPane) => void | ITaskPaneEventObject;
		OnNewBottomPaneEvent?: (pane: IShellPaneContainer) => void | IShellPaneContainerEventObject;
		OnNewRightPaneEvent?: (pane: IShellPaneContainer) => void | IShellPaneContainerEventObject;
		OnNewSearchPaneEvent?: (searchPane: ISearchPane) => void | ISearchPaneEventObject;
		OnNewShellListingEvent?: (listing: IShellListing) => void | IShellListingEventObject;
		OnNewCommandsEvent?: (commands: ICommands) => void | ICommandsEventObject;
		OnShowMainMenuEvent?: () => any;
		OnActiveListingChangedEvent?: (oldListing: IShellListing, newListing: IShellListing) => any;
	}

	/**
	 * The ShellFrame specific event registration interface.
	 */
	interface IShellFrameEvents
		extends IEvents, IShellFrameEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => any): number;
		Register(event: Event.Stop, sink: () => any): number;
		Register(event: Event.NewTaskPane, sink: (taskPane: ITaskPane) => void | ITaskPaneEventObject): number;
		Register(event: Event.NewBottomPane, sink: (pane: IShellPaneContainer) => void | IShellPaneContainerEventObject): number;
		Register(event: Event.NewRightPane, sink: (pane: IShellPaneContainer) => void | IShellPaneContainerEventObject): number;
		Register(event: Event.NewSearchPane, sink: (searchPane: ISearchPane) => void | ISearchPaneEventObject): number;
		Register(event: Event.NewShellListing, sink: (listing: IShellListing) => void | IShellListingEventObject): number;
		Register(event: Event.NewCommands, sink: (commands: ICommands) => void | ICommandsEventObject): number;
		Register(event: Event.ShowMainMenu, sink: () => any): number;
		Register(event: Event.ActiveListingChanged, sink: (oldListing: IShellListing, newListing: IShellListing) => any): number;
		Register(event: Event.SelectionChanged, sink: (items: MFilesUI.IShellItems, listing: MFilesUI.IShellListing) => any): number;
		Register(event: Event.SelectedItemsChanged, sink: (items: MFilesUI.IShellItems, listing: MFilesUI.IShellListing) => any): number;
	}

	/**
	 * An interface for accessing the content of M-Files Client Application Listing View.
	 */
	interface IShellItems {

		/**
		 * Gets the total number of all items. Read-only.
		 * @member {number}
		 */
		readonly Count: number

		/**
		 * Gets the object versions. Read-only.
		 * @member {MFilesAPI.ObjectVersions}
		 */
		readonly ObjectVersions: MFilesAPI.ObjectVersions

		/**
		 * Gets the object versions with properties. Read-only.
		 * @member {MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects}
		 */
		readonly ObjectVersionsAndProperties: MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects

		/**
		 * Asynchronously retrieves the object versions with properties.
		 * Can only be used in MFWA where has to be used instead of ObjectVersionsAndProperties
		 * @member {(objVerAndProps: MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects) => void} - A callback function to run when the asynchronous method call completes.
		 */
		GetObjectVersionsAndPropertiesAsync(callback: (objVerAndProps: MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects) => void): void

		/**
		 * Gets the object files. Read-only.
		 * @member {MFilesAPI.ObjectFileAndObjVerOfMultipleFiles}
		 */
		readonly ObjectFiles: MFilesAPI.ObjectFileAndObjVerOfMultipleFiles

		/**
		 * Gets property folders, traditional folders and view folders. Read-only.
		 * @member {MFilesAPI.FolderDefs}
		 */
		readonly Folders: MFilesAPI.FolderDefs

		/**
		 * Gets the number of object versions.
		 * @returns {number} - The number of items.
		 */
		GetObjectVersionsCount(): number

	}

	/**
	 * An interface for accessing the listing content of M-Files Client Application Listing View.
	 */
	interface IShellListing {

		/**
		 * Returns the event registering interface for the object.
		 * Read-only.
		 * @member {MFiles.IEvents}
		 */
		readonly Events: IShellListingEvents;

		/**
		 * Accesses the shell window items.
		 * @member {IShellItems}
		 */
		readonly Items: IShellItems;

		/**
		 * Accesses the shell window selected items.
		 * @member {IShellItems}
		 */
		readonly CurrentSelection: IShellItems;

		/**
		 * Unselects all items in shell listing window.
		 */
		UnselectAll(): void

		/**
		 * Selects object version. Clears other selections. This method does not affect in nested object levels (i.e. related objects). The input focus fill move to the item.
		 * @param {MFilesAPI.ObjVer} objVer - Object version to select.
		 */
		SelectObjectVersion(objVer: MFilesAPI.ObjVer): void

		/**
		 * Selects object file. Clears other selections. This method does not affect in nested object levels (i.e. related objects). The input focus fill move to the item.
		 * @param {MFilesAPI.ObjVer} objVer - Object identification.
		 * @param {MFilesAPI.FileVer} fileVer - Object file to select. Note: the file version is ignored.
		 */
		SelectObjectFile(objVer: MFilesAPI.ObjVer, fileVer: MFilesAPI.FileVer): void

		/**
		 * Selects object or file version. Clears other selections. This method does not affect in nested object levels (i.e. related objects). The input focus fill move to the item.
		 * @param {MFilesAPI.ObjOrFileVer} objOrFileVer - Object or object file identification.
		 */
		SelectObjectOrObjectFileVersion(objOrFileVer: MFilesAPI.ObjOrFileVer): void

		/**
		 * Selects a folder. Clears other selections. The input focus fill move to the item.
		 * @param {MFilesAPI.FolderDef } folderDef - Property folder to select.
		 */
		SelectFolder(folderDef: MFilesAPI.FolderDef): void

		/**
		 * Selects or unselects object versions. This method does not affect in nested object levels (i.e. related objects). This method does not change the focused item.
		 * @param {MFilesAPI.ObjVers} objVers - Object versions to select or unselect.
		 * @param {boolean} select - True to select, false to unselect.
		 */
		SetObjectVersionSelectionState(objVers: MFilesAPI.ObjVers, select: boolean): void

		/**
		 * Selects or unselects objects or object files. This method does not affect in nested object levels (i.e. related objects). This method does not change the focused item.
		 * @param {MFilesAPI.ObjOrFileVers} objOrFileVers - Array of object or file versions to select or unselect.
		 * @param {boolean} select - True to select, false to unselect.
		 */
		SetObjectOrObjectFileVersionSelectionStates(objOrFileVers: MFilesAPI.ObjOrFileVers, select: boolean): void

		/**
		 * Selects or unselects property folders. This method does not change the focused item.
		 * @param {MFilesAPI.FolderDefs} folderDefs - Property folders to select or unselect.
		 * @param {boolean} select - True to select, false to unselect.
		 */
		SetFolderSelectionStates(folderDefs: MFilesAPI.FolderDefs, select: boolean): void

		/**
		 * Overrides the items selection with a virtual selection.
		 * @param {MFilesAPI.ObjOrFileVers} objOrFileVers - Array of object or file versions to select.
		 */
		SetVirtualSelection(objOrFileVers: MFilesAPI.ObjOrFileVers): void

		/**
		 * Activates the selected item. Performs the default action for activated item.
		 */
		ActivateSelected(): void

		/**
		 * Selects the next object. Does not select nested objects (i.e. related objects). If there is no current selection, the first object version is selected. Removes the selection if the last item was selected.
		 * @returns {boolean} - True if the object selection exists after the operation.
		 */
		SelectNextObject(): boolean

		/**
		 * Selects the previous object. Does not select nested objects (i.e. related objects). If there is no current selection, the last object version is selected. Removes the selection if the first item was selected.
		 * @returns {boolean} - Receives true if the object selection exists after the operation.
		 */
		SelectPrevObject(): boolean

		/**
		 * Selects the next object file. Does not select files in nested objects (i.e. related objects). If the last file is selected, moves the selection to the parent object (if the file is displayed under object) or removes the selection.
		 * @param {boolean} allowMoveToNextObject - If true, the selection can move to file in another object. If false and there is no current selection, the method selects nothing.
		 * @returns {boolean} - True if the object file selection exists after the operation.
		 */
		SelectNextObjectFile(allowMoveToNextObject: boolean): boolean

		/**
		 * Selects the previous object file. Does not select files in nested objects (i.e. related objects). If the first file is selected, moves the selection to the parent object (if the file is displayed under object) or removes the selection.
		 * @param {boolean} allowMoveToPrevObject - If true, the selection can move to file in another object. If false and there is no current selection, the method selects nothing.
		 * @returns {boolean} - True if the object file selection exists after the operation.
		 */
		SelectPrevObjectFile(allowMoveToPrevObject: boolean): boolean

		/**
		 * Selects the next property folder. If there is no current selection, the last property folder is selected. Removes the selection if the last item was selected.
		 * @param {MFilesAPI.MFFolderDefType} folderDefType - Folder type to select.
		 * @returns {boolean} - Receives true if the property folder selection exists after the operation.
		 */
		SelectNextFolder(folderDefType: MFilesAPI.MFFolderDefType): boolean

		/**
		 * Selects the previous property folder. If there is no current selection, the first property folder is selected. Removes the selection if the first item was selected.
		 * @param {MFilesAPI.MFFolderDefType} folderDefType - Folder type to select.
		 * @returns {boolean} - True if the property folder selection exists after the operation.
		 */
		SelectPrevFolder(folderDefType: MFilesAPI.MFFolderDefType): boolean

		/**
		 * Sets a new image for listing background. Available only if the application has a permission to change the theme.
		 * Deprecated, should be preserved for compatibility.
		 * @param {string} filename - The BMP file for image. The file must be included in client extension application.
		 */
		SetBackgroundImage(filename: string): void

		/**
		 * Sets the UI theme of the listing. Available only if the application has a permission to change the theme.
		 * @param {Object} theme - The listing theme object. See the theme object description.
		 */
		SetTheme(theme: Object): void  // TODO: Define theme object.

		/**
		 * Gets the current location as a path. The path is relative to the vault root. Read-only.
		 * @member {string}
		 */
		readonly CurrentPath: string

		/**
		 * Gets/Sets the visibility state of column headers.
		 * @member {boolean}
		 */
		ColumnHeadersVisible: boolean

		/**
		 * Makes this listing window the active listing in the shell frame.
		 */
		ActivateListing(): void

		/**
		 * Checks if this listing window is currently the active listing window.
		 * @member {boolean}
		 */
		readonly IsActive: boolean

		/**
		 * Gets/Sets the grouping mode of the listing window.
		 * @member {boolean}
		 */
		GroupViewsAndFolders: boolean

		/**
		 * Gets/Sets the grouping mode of the listing window.
		 * @member {boolean}
		 */
		GroupObjectsByObjectType: boolean

		/**
		 * Specifies if the width of the first column is automatically adjusted to fill the available horizontal space, excluding the other columns.
		 * @member {boolean}
		 */
		AutoFitFirstColumn: boolean

		/**
		 * Specifies if the widths of all columns are automatically adjusted to fill the available horizontal space.
		 * @member {boolean}
		 */
		AutoFitAllColumns: boolean

		/**
		 * To refresh the listing from the server, but preserving current selection and expand/collapse states, specify the parameters as follows:
		 * smartUpdate = true
		 * refreshFromServer = true
		 * forceFullRefreshFromServer = false
		 *
		 * For refreshing behavior that corresponds to pressing F5 in the listing window, specify the parameters as follows:
		 * smartUpdate = false
		 * refreshFromServer = true
		 * forceFullRefreshFromServer = false
		 *
		 * For refreshing behavior that corresponds to pressing Shift+F5 in the listing window, specify the parameters as follows:
		 * smartUpdate = false
		 * refreshFromServer = true
		 * forceFullRefreshFromServer = true
		 *
		 * However, the F5 and Shitf+F5 commands perform some additional actions that this method does not perform.
		 * To invoke the exact same user-initiated behavior as the F5 and Shift+F5 commands perform, use the ExecuteCommand method to
		 * invoke the BuiltinCommand_Refresh or BuiltinCommand_RefreshFull command.
		 *
		 * @param {boolean} smartUpdate - If true, performs a "smart update" for the listing, preserving current selection and expand/collapse states.
		 * @param {boolean} refreshFromServer - If true, refreshes the contents of the listing from the server.
		 * @param {boolean} forceFullRefreshFromServer - Controls how refreshing from the server is performed. Specify true to force the retrieval of a full listing from the server. Specify false to allow using previously retrieved listing data as the basis, only applying known changes made after the latest listing retrieval. This parameter is effective only if the refreshFromServer parameter is true.
		 */
		RefreshListing(smartUpdate: boolean, refreshFromServer: boolean, forceFullRefreshFromServer: boolean): void

		/**
		 * Refreshes the listing asynchronously from the server. When eventually updating the listing, performs a "smart update" that preserves the current selection and expand/collapse states.
		 */
		RefreshListingAsync(): void

		/**
		 * Refreshes the selected objects in the listing. May cause objects to be added to the listing, updated in the listing, or removed from the listing.
		 * @param {boolean} refreshFromServer - If true, refreshes the data of the objects from the server.
		 * @param {boolean} updateRelatedObjects - If true, the related objects of the specified objects are also updated.
		 */
		RefreshSelectedObjects(refreshFromServer: boolean, updateRelatedObjects: boolean): void

		/**
		 * Refreshes the specified object in the listing. May cause the specified object to be added to the listing, updated in the listing, or removed from the listing.
		 * @param {MFilesAPI.ObjID} objID - The object to refresh.
		 * @param {boolean} refreshFromServer - If true, refreshes the data of the object from the server.
		 * @param {boolean} updateRelatedObjects - If true, the related objects of the specified object are also updated.
		 */
		RefreshObject(objID: MFilesAPI.ObjID, refreshFromServer: boolean, updateRelatedObjects: boolean): void

		/**
		 * Specifies if the listing is empty or not.
		 * @member {ListingEmptinessState}
		 */
		IsEmpty: ListingEmptinessState;

		/**
		 * Returns the total sum of all objects in all groups (such as Documents, Assignments, Topics, and so forth).
		 *  The value is -1 if the group counts are still pending.
		 * @member {number}
		 */
		SumOfResultCounts: number
	}

	/**
	 * The ShellListing specific event registration object.
	 */
	interface IShellListingEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnSelectionChanged?: (selectedItems: IShellItems) => void;
		OnSelectedItemsChanged?: (selectedItems: IShellItems) => void;
		OnContentChanged?: (items: IShellItems) => void;
		OnShowContextMenu?: (selectedItems: IShellItems) => void;
		OnShowMainMenu?: (selectedItems: IShellItems) => void;
		OnListingActivated?: (oldListing: IShellListing) => void;
		OnListingDeactivated?: (newListing: IShellListing) => void;
		OnSearchInitiated?: () => void;
		OnSearchReady?: () => void;
	}

	/**
	 * The ShellListing specific event registration interface.
	 */
	interface IShellListingEvents
		extends IEvents, IShellListingEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.SelectionChanged, sink: (selectedItems: IShellItems) => void): number;
		Register(event: Event.SelectedItemsChanged, sink: (selectedItems: IShellItems) => void): number;
		Register(event: Event.ContentChanged, sink: (items: IShellItems) => void): number;
		Register(event: Event.ShowContextMenu, sink: (selectedItems: IShellItems) => void): number;
		Register(event: Event.ShowMainMenu, sink: (selectedItems: IShellItems) => void): number;
		Register(event: Event.ListingActivated, sink: (oldListing: IShellListing) => void): number;
		Register(event: Event.ListingDeactivated, sink: (newListing: IShellListing) => void): number;
		Register(event: Event.SearchInitiated, sink: () => void): number;
		Register(event: Event.SearchReady, sink: () => void): number;
	}

	/**
	 * IShellPaneContainer is a common interface for the embedded bottom pane and right pane.
	 * The interface enables managing the pane content, size and visibility.
	 */
	interface IShellPaneContainer {

		/**
		 * Returns the event registering interface for the IShellPaneContainer interface.
		 * Read-only.
		 * @member {MFiles.IEvents}
		 */
		readonly Events: IShellPaneContainerEvents;

		/**
		 * Sets or returns the pane's visibility status in the current context.
		 */
		Visible: boolean;

		/**
		 * Sets or returns the pane size. With bottom pane the height is affected and in the right pane the width.
		 */
		Size: number;

		/**
		 * Sets the embedded pane default size.
		 * @param {number} defaultSize - The relative default size for the pane.
		 *      The relative size is a floating point number, valid values are between 0 and 1.
		 * @param {boolean} resizeToDefault - Specify true to resize the pane to the given default size.
		 *      Forces the resizing in any case.
		 *      If the parameter is set to false, the pane is resized to given size only if the user hasn't previously resized the pane from UI in which case the view remembers the changed size.
		 */
		SetDefaultSize(defaultSize: number, resizeToDefault: boolean): void;

		/**
		 * Sets tha embedded pane's default visibility.
		 * @param {boolean} visible - The default state.
		 * @param {boolean} resetToDefault - Specify true to change the pane's visibility to the given default state.
		 *      Forces the new state in any case. If the parameter is set to false, the pane's visibility is changed only if
		 *      the user hasn't previously changed the state from UI in which case the view remembers the changed state.
		 */
		SetDefaultVisibility(visible: boolean, resetToDefault: boolean): void;

		///**
		// * Resets the properties pane content, and restores the standard properties pane content rules.
		// * Deprecated. Use tabs instead.
		// */
		//ShowDefaultContent()

		///**
		// * Prevents the content displayed on properties pane.
		// * Deprecated. Use tabs instead.
		// */
		//ShowEmptyContent()

		///**
		// * Sets the properties pane content to show properties of an object version.
		// * Deprecated. Use tabs instead.
		// * @param {MFilesAPI.PropertyValuesWithIconClues} propertyValuesWithIcons - Specifies the object version and properties to show.
		// */
		//ShowObjectVersionProperties( propertyValuesWithIcons: MFilesAPI.PropertyValuesWithIconClues );

		///**
		// * Sets the pane content to show a file preview.
		// * Deprecated. Use tabs instead.
		// * @param {string} file - Absolute path to the file to preview.
		// */
		//ShowFilePreview( file: string );

		///**
		// * Sets the pane content to show a report.
		// * Deprecated. Use tabs instead.
		// * @param {string} reportURL - The report URL.
		// */
		//ShowSSRSReport( reportURL: string );

		///**
		// * Sets the pane content to show a dashboard.
		// * Deprecated. Use tabs instead.
		// * @param {string} dashboardID - The dashboard ID.
		// * @param {Object} data - Data object to pass for the HTML code.
		// */
		//ShowDashboard( dashboardID: string, data: Object );

		///**
		// * Shows content that is previously allocated. Fails if the content is already being displayed elsewhere.
		//* Deprecated. Use tabs instead.
		// * @param {string} sessionHandle - The session handle.
		// */
		//ShowPersistentContent( sessionHandle: number );

		/**
		 * Returns a reference to the IShellFrame which owns this IShellPaneContainer.
		 */
		ShellFrame: IShellFrame;

		/**
		 * Not implemented.
		 * Read-only.
		 */
		Content: any;

		/**
		 * Sets background images. Available only if the application has a permission to change the theme.
		 * @param {string} background - The BMP file for background. The file must be included in client extension application.
		 * @param {string} backgroundDown - The BMP file for background (expanding down). The file must be included in client extension application.
		 */
		SetBackgroundImages(background: string, backgroundDown: string): void

		/**
		 * Sets the window focus to this window.
		 */
		Focus(): void;

		/**
		 * True if the window is focused.
		 * Read-only.
		 */
		IsFocused: boolean;

		/**
		 * Creates a new tab and adds it to the collection of tabs.
		 * @param {string} tabId - The id of the new tab.
		 * @param {string} tabTitle - The title of the new tab.
		 * @param {string} insertBeforeTabId - The id of the tab before which the new tab should be inserted.
		 *      Can refer to built-in tab or another custom-created tab. See documentation for a list of built-in tab identifiers.
		 * @returns {IShellPaneTab}
		 */
		AddTab(tabId: string, tabTitle: string, insertBeforeTabId: string): IShellPaneTab;

		/**
		 * Gets the tab with the specified tab id.
		 * @returns {IShellPaneTab}
		 */
		GetTab(tabId: string): IShellPaneTab;

		/**
		 * Gets the selected (active) tab.
		 * @returns {IShellPaneTab}
		 */
		GetSelectedTab(): IShellPaneTab;

		/**
		 * The minimized state of the pane.
		 * @member {boolean}
		 */
		Minimized: boolean;

		/**
		 * Gets the tab title width or height in pixels (depending on the pane orientation).
		 * @member {number}
		 */
		TabTitleSize: number;
	}

	/**
	 * The ShellPaneContainer specific event registration object.
	 */
	interface IShellPaneContainerEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnShowPane?: () => void;
		OnHidePane?: () => void;
		OnPaneResized?: () => void;
		OnNewTab?: (tab: IShellPaneTab) => void;
		OnTabSelected?: (tab: IShellPaneTab) => void;
		OnTabUnselected?: (tab: IShellPaneTab) => void;
		OnMinimizedStateChanged?: () => void;
	}

	/**
	 * The ShellPaneContainer specific event registration interface.
	 */
	interface IShellPaneContainerEvents
		extends IEvents, IShellPaneContainerEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.ShowPane, sink: () => void): number;
		Register(event: Event.HidePane, sink: () => void): number;
		Register(event: Event.PaneResized, sink: () => void): number;
		Register(event: Event.NewTab, sink: (tab: IShellPaneTab) => void): number;
		Register(event: Event.TabSelected, sink: (tab: IShellPaneTab) => void): number;
		Register(event: Event.TabUnselected, sink: (tab: IShellPaneTab) => void): number;
		Register(event: Event.MinimizedStateChanged, sink: () => void): number;
	}

	/**
	 * An interface for managing a shell pane tab.
	 */
	interface IShellPaneTab {

		/**
		 * Returns the event registering interface for the IShellPaneTab interface.
		 * Read-only.
		 * @member {MFiles.IShellPaneTabEvents}
		 */
		readonly Events: IShellPaneTabEvents;

		/** @member {string} Gets the tab id. Read-only. */
		readonly TabId: string;

		/** @member {string} Gets/Sets the tab title. */
		Title: string;

		/** @member {boolean} Gets/Sets the tab's visibility. */
		Visible: boolean;


		/**  @member {boolean} Gets/Sets the tab's selection state. */
		Selected: boolean;

		/**
		 * Sets a higher automatic selection priority for the tab until next time the listing selection changes.
		 * Selects the tab, if it is not selected. The tab has to be visible to be selected.
		 */
		Select(): void

		/**
		 * Removes the tab. May remove application-owned tabs only.
		 */
		Remove(): void

		/** @member {boolean} Resolves if the tab is a built-in tab. Read-only. */
		readonly IsBuiltIn: boolean;

		/**
		 * Shows the specified object version's properties in the tab.
		 * @param {MFilesAPI.PropertyValuesWithIconClues} propertyValuesWithIcons - Specifies the object version and properties to show.
		 */
		ShowObjectVersionProperties(propertyValuesWithIcons: MFilesAPI.PropertyValuesWithIconClues): void;

		/**
		 * Shows the specified file's preview in th tab.
		 * @param {string} file - Absolute path to the file to preview.
		 */
		ShowFilePreview(file: string): void;

		/**
		 * Shows the specified report in the tab.
		 * @param {string} reportURL - The report URL.
		 */
		ShowSSRSReport(reportURL: string): void;

		/**
		 * Shows the specified dashboard in the tab.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {Object} data - Data object to pass for the HTML code.
		 */
		ShowDashboard(dashboardID: string, data: Object): void;

		/**
		 * Shows content that is previously allocated in the tab. Fails if the content is already being displayed elsewhere or if the handle is invalid.
		 * @param {string} sessionHandle - The session handle.
		 */
		ShowPersistentContent(sessionHandle: number): void;

		/**
		 * Clears the tab content area.
		 */
		ShowEmptyContent(): void

		/**
		 * Sets lower automatic selection priority for the tab until next time the listing selection changes.
		 * Tries to select another unselected tab, if the tab is selected.
		 */
		Unselect(): void
	}

	/**
	 * The ShellPaneTab specific event registration object.
	 */
	interface IShellPaneTabEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnShowTab?: () => void;
		OnHideTab?: () => void;
		OnTabSelected?: () => void;
		OnTabUnselected?: () => void;
	}

	/**
	 * The ShellPaneTab specific event registration interface.
	 */
	interface IShellPaneTabEvents
		extends IEvents, IShellPaneTabEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.ShowTab, sink: () => void): number;
		Register(event: Event.HideTab, sink: () => void): number;
		Register(event: Event.TabSelected, sink: () => void): number;
		Register(event: Event.TabUnselected, sink: () => void): number;
	}

	/**
	 * Dialog data object description.
	 */
	interface DialogData {

		/**
		 * The message window caption text. Default="M-Files"
		 * @member {string}
		 */
		caption?: string;

		/**
		 * The message window content text.
		 * @member {string}
		 */
		message: string;

		/**
		 * The window icon. Possible values: "error", "warning", "information", "question". Default = "warning"
		 * @member {string}
		 */
		icon?: "error" | "warning" | "information" | "question";

		/**
		 * The label of the first, mandatory button. Default = "Ok".
		 * @member {string}
		 */
		button1_title?: string;

		/**
		 * The first buttton's enabled state. Default = true.
		 * @member {boolean}
		 */
		button1_enabled?: boolean;

		/**
		 * The label of the second button. If not specified, the button will not be shown.
		 * @member {string}
		 */
		button2_title?: string;

		/**
		 * The second buttton's enabled state, when visible. Default = true.
		 * @member {boolean}
		 */
		button2_enabled?: boolean;

		/**
		 * The label of the third button. If not specified, the button will not be shown.
		 * @member {string}
		 */
		button3_title?: string;

		/**
		 * The thrid buttton's enabled state, when visible. Default = true.
		 * @member {boolean}
		 */
		button3_enabled?: boolean;

		/**
		 * The label of the fourth button. If not specified, the button will not be shown.
		 * @member {string}
		 */
		button4_title?: string;

		/**
		 * The fourth buttton's enabled state, when visible. Default = true.
		 * @member {boolean}
		 */
		button4_enabled?: boolean;

		/**
		 * The index of the default (focused) button. Button values: 1-4. Default = 1. 
		 * @member {number}
		 */
		defaultButton?: number;

		/**
		 * The index of the cancel button. Button values: 1-4 or 0 for no cancel button. Default = 0.
		 * @member {number}
		 */
		cancelButton?: number;

		/**
		 * The index of the button that is activated on timeout. Button values: 1-4 or 0 for no timeout button. Default = 0.
		 * @member {number}
		 */
		timeOutButton?: number;

		/**
		 * Automatic dialog close timeout in seconds, 1..n seconds, or 0 for no timeout. Default = 0.
		 * @member {number}
		 */
		timeOut?: number;

		/**
		 * Indicates if the timer ceases when the focus in the message box changes. Default = true.
		 * @member {boolean}
		 */
		timeout_deactivateOnFocusChange?: boolean;

		/**
		 * The checkbox title.  The checkbox is not shown if no title is specified.
		 * @member {string}
		 */
		checkbox_title?: string;

		/**
		 * Indicates whether the checkbox is disabled, when visible. Default = true.
		 * @member {boolean}
		 */
		checkbox_enabled?: boolean;

		/**
		 * Indicates if the checkbox is checked. Default = false.
		 * @member {boolean}
		 */
		checkbox_checked?: boolean;

	}

	/**
	 * An interface for accessing the Shell UI of M-Files Client Application.
	 */
	interface IShellUI {

		/**
		 * Accesses the event source object for this object.
		 * @member {IEvents}
		 */
		Events: IShellUIEvents;

		/**
		 * Accesses the vault object.
		 * @member {MFilesAPI.Vault}
		 */
		Vault: MFilesAPI.Vault;

		/**
		 * Accesses the shell (explorer) window.
		 * @member {IWindow}
		 */
		Window: IWindow;

		/**
		 * Shows a dashboard in a popup window.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {boolean} waitUntilClosed - True to wait until the popup window is closed.
		 * @param {Object} data - Data object to pass for the dashboard code.
		 */
		ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: Object): void;

		/**
		 * Shows a message box.
		 * @param {string | MFiles.DialogData} message - The message or the dialog data object.
		 * @returns {number} The index of clicked button.
		 */
		ShowMessage(name: string | DialogData): number;

		/**
		 * Creates a browser session that is persisted in ShellUI context. The session can be displayed separately e.g. in a shell pane.
		 * @param {string} url - The url to where the browser is pointed.
		 * @param {Object} parameters - Data object, which contains parameters for browser content.
		 * @returns {number} - A handle to the session.
		 */
		CreatePersistentBrowserContent(url: string, parameters: Object): number;

		/**
		 * Destroys separately created persistent content (e.g. browser content).
		 * @param {number} sessionHandle - The session handle.
		 */
		DestroyPersistentContent(name: number): void;

		/**
		 * Sends a synchronous notification for all associated VaultEntry listeners. Note: notifies the vault entry of this Windows Session only.
		 * @param {string} ID - The notification identification for the listener.
		 * @param {any} data1 - The notification payload data. Must not contain object references.
		 * @param {any} data2 - The notification payload data. Must not contain object references.
		 * @returns {any} - Receives the notification return value. Must not contain object references. In a case of multiple notification receivers, the last one has a preference.
		 */
		NotifyVaultEntry(ID: string, data1: any, data2: any): any;

		/**
		 * Gets the URL of the icon for the specified object type.
		 * @param {number} objtype - Object type ID.
		 * @returns {string} - The icon URL.
		 */
		GetObjectTypeIconURL(objtype: number): string;

		/**
		 * Sets the URL for a separately created persistent browser content.
		 * @param {string} url - The URL pointing to the content that is to be set for the browser object.
		 * @param {number} sessionHandle - The session handle identifying the browser object for which the URL is to be set.
		 */
		SetPersistentBrowserContent(url: string, sessionHandle: number): void;

		/**
		 * Accesses the vault object.
		 * @member {MFilesAPI.Vault} ServerVault
		 */
		ServerVault: MFilesAPI.Vault;

		/**
		 * Performs an internal test.
		 * (HIDDEN)
		 * @param {any} testParam1 - The test parameter 1.
		 * @param {any} testParam2 - The test parameter 2.
		 * @returns {any} - The test result.
		 */
		// Test( testParam1: any, testParam2: any ): any;

		/**
		 * Sends a synchronous broadcast message to all applications.
		 * @param {string} msgID - The broadcast message id for the listeners.
		 * @param {any} data - The broadcast payload data.
		 */
		BroadcastMessage(msgID: string, data: any): void;

		/**
		 * Sends a synchronous notification to a specific application.
		 * @param {string} appGuid - The application to notify.
		 * @param {string} msgID - The notification message id for the listeners.
		 * @param {any} data - The notification payload data.
		 */
		NotifyApplication(appGuid: string, msgID: string, data: any): void;

	}

	/**
	 * The ShellUI specific event registration interface.
	 */
	interface IShellUIEventObject {

		OnStarted?: GenericEventHandler;
		OnStop?: GenericEventHandler;
		OnNewShellFrame?: NewShellFrameEventHandler;
		OnNewNormalShellFrame?: NewShellFrameEventHandler;
		OnNewCommonDialogShellFrame?: NewShellFrameEventHandler;
		OnNewEmbeddedShellFrame?: NewShellFrameEventHandler;
		OnCrossApplicationBroadcast?: CrossApplicationEventHandler;
		OnCrossApplicationNotification?: CrossApplicationEventHandler;
	}

	/**
	 * Generic parameterless => void event handler.
	 */
	type GenericEventHandler = () => void;

	/**
	 * Custom Commands, callback delegate type.
	 */
	type CustomCommandHandler = (
		cmd: number
	) => void;

	/**
	 * EventArgs delegate type for NewShellUI event types.
	 */
	type NewShellUIEventArgs = (
		shellUI: MFilesUI.IShellUI
	) => IShellUIEventObject | void;

	/**
	 * New ShellUI event handler.
	 */
	type NewShellUIEventHandler = (
		shellUI: MFilesUI.IShellUI
	) => IShellUIEventObject | void;

	/**
	 * New ShellFrame event handler.
	 */
	type NewShellFrameEventHandler = (
		shellFrame: MFilesUI.IShellFrame
	) => IShellFrameEventObject | void;

	/**
	 * New Dashboard event handler.
	 */
	type NewDashboardEventHandler = (
		dashboard: MFilesUI.IDashboard
	) => void;

	/**
	 * SetPropertiesOfObjectVersion event handler.
	 */
	type SetPropertiesOfObjectVersionEventHandler = (
		setPropertiesParams: MFilesAPI.SetPropertiesParams,
		singlePropertyUpdate: boolean,
		singlePropertyRemove: boolean
	) => any | boolean | void;

	/**
	 * Cross Application event handler.
	 */
	type CrossApplicationEventHandler = (
		appGuid: string,
		msgID: string,
		data: any
	) => void;

	/**
	 * The ShellUI specific event registration object.
	 */
	interface IShellUIEvents
		extends IEvents, IShellUIEventObject {

		Register(event: Event.Started, sink: GenericEventHandler): number;
		Register(event: Event.Stop, sink: GenericEventHandler): number;
		Register(event: Event.NewShellFrame, sink: NewShellFrameEventHandler): number;
		Register(event: Event.NewNormalShellFrame, sink: NewShellFrameEventHandler): number;
		Register(event: Event.NewCommonDialogShellFrame, sink: NewShellFrameEventHandler): number;
		Register(event: Event.NewEmbeddedShellFrame, sink: NewShellFrameEventHandler): number;
		Register(event: Event.SetPropertiesOfObjectVersion, sink: SetPropertiesOfObjectVersionEventHandler): number;
		Register(event: Event.CrossApplicationBroadcast, sink: CrossApplicationEventHandler): number;
		Register(event: Event.CrossApplicationNotification, sink: CrossApplicationEventHandler): number;
	}

	/** An interface for accessing the content of M-Files Client Application Task Pane. */
	interface ITaskPane {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: ITaskPaneEvents;

		/**
		 * Resolves if the task pane is available here. Read only.
		 * @member {boolean}
		 */
		readonly Available: boolean

		/**
		 * Gets/Sets the task pane visibility.
		 * @member {boolean}
		 */
		Visible: boolean

		/**
		 * Creates a new group of custom commands to task pane.
		 * The group stays invisible until a first command is added.
		 * @param {string} groupName - The group name.
		 * @param {number} priority - Priority of this group. A group with a higher numeric value will be placed below a group with a lower numeric value.
		 * returns {number} - The group id of created custom group.
		 */
		CreateGroup(groupName: string, priority: number): number

		/**
		 * Deletes the group of custom commands.
		 * @param {number} groupID - The group id of created custom group.
		 */
		DeleteGroup(groupId: number): void

		/**
		 * Adds custom command to specified group in task pane.
		 * @param {number} customCommand - The command id of custom command to add.
		 * @param {number} group - The group where to add the custom command.
		 * @param {number} orderPriority - Order of command in this group.
		 */
		AddCustomCommandToGroup(customCommand: number, group: MFilesUI.TaskPaneGroup, orderPriority: number): void

		/**
		 * Removes custom command from specified group in task pane.
		 * @param {number} customCommand - The command id of custom command to remove.
		 * @param {number} group - The group where from remove the custom command.
		 */
		RemoveCustomCommandFromGroup(customCommand: number, group: number): void

		/**
		 * Sets a new logo image. Available only if the application has a permission to change the logo.
		 * @param {string} filename - The BMP file for logo. The file must be included in client extension application.
		 */
		SetLogo(filename: string): void

		/**
		 * Sets new colors for command groups. Available only if the application has a permission to change the theme.
		 * Deprecated, should be preserved for compatibility.
		 * @param {number} headTextColor - Color of group header.
		 * @param {number} itemTextColor - Color of text item.
		 * @param {number} itemTextMouseOverColor - Color of text item on mouse over.
		 * @param {number} highlightColor - Color of highlighted area of text item on mouse over.
		 */
		SetGroupColors(headTextColor: number, itemTextColor: number, itemTextMouseOverColor: number, highlightColor: number): void

		/**
		 * Sets the UI theme of the task pane. Available only if the application has a permission to change the theme.
		 * @param {Object} theme - The task pane theme object. See the theme object description.
		 */
		SetTheme(theme: Object): void  // TODO: Define theme object.

	}

	/**
	 * The TaskPane specific event registration object.
	 */
	interface ITaskPaneEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnShowPane?: () => void;
		OnHidePane?: () => void;
	}

	/**
	 * The TaskPane specific event registration interface.
	 */
	interface ITaskPaneEvents
		extends IEvents, ITaskPaneEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.ShowPane, sink: () => void): number;
		Register(event: Event.HidePane, sink: () => void): number;
	}

	/** 
	 * An interface for accessing the content of M-Files Client Core features.
	 */
	interface IVaultCore {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: IVaultCoreEvents;

		/**
		 * The server vault interface. Read-only.
		 * @member {MFilesAPI.Vault}
		 */
		readonly ServerVault: MFilesAPI.Vault;

	}

	/**
	 * The VaultCore specific event registration object.
	 */
	interface IVaultCoreEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnNewVaultEntry?: (vaultEntry: IVaultEntry) => void | IVaultEntryEventObject;
	}

	/**
	 * The VaultCore specific event registration interface.
	 */
	interface IVaultCoreEvents
		extends IEvents, IVaultCoreEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.NewVaultEntry, sink: (vaultEntry: IVaultEntry) => void | IVaultEntryEventObject): number;
	}

	/**
	 * An interface for accessing the content of M-Files Client Core features.
	 */
	interface IVaultEntry {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: IVaultEntryEvents;

		/**
		 * Accesses the vault object.. Read-only.
		 * @member {MFilesAPI.Vault}
		 */
		readonly Vault: MFilesAPI.Vault;

		/**
		 * Accesses the VaultUI object. Read-only.
		 * @member {IVaultUI}
		 */
		readonly VaultUI: IVaultUI;

		/**
		 * Accesses the VaultCore object. Read-only.
		 * @member {MFilesAPI.IVaultCore}
		 */
		readonly VaultCore: IVaultCore;

		/**
		 * Sends a synchronous notification for all associated VaultEntry listeners.
		 * Note: notifies the vault entry of same Windows Session only. This method can be used to pass data between VaultUI and VaultCore script domains.
		 * @param {string} id - The notification identification for the listener.
		 * @param {string | number | boolean} data1 - The notification payload data.
		 * @param {string | number | boolean} data2 - The notification payload data.
		 * @returns {string | number | boolean} - Notification response. In a case of multiple notification receivers, the last one has a preference.
		 */
		NotifyVaultEntry(id: string, data1: string | number | boolean, data2: string | number | boolean): string | number | boolean
	}

	/**
	 * The VaultEntry specific event registration object.
	 */
	interface IVaultEntryEventObject {

		// TODO: Events
		OnStarted?: () => any;
		OnStop?: () => any;
	}

	/**
	 * The VaultEntry specific event registration interface.
	 */
	interface IVaultEntryEvents
		extends IEvents, IVaultEntryEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => any): number;
		Register(event: Event.Stop, sink: () => any): number;
	}

	/**
	 *  An interface for accessing the content of M-Files Client Core UI features.
	 */
	interface IVaultUI {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: IEvents;

		/**
		 * Accesses the vault object.. Read-only.
		 * @member {MFilesAPI.Vault}
		 */
		readonly Vault: MFilesAPI.Vault;

		/**
		 * Accesses the vault entry object. Read-only.
		 * @member {IVaultEntry}
		 */
		readonly VaultEntry: IVaultEntry;

		/**
		 * Shows a dashboard in a popup window.
		 * @param {string} dashboardID - The dashboard ID.
		 * @param {boolean} waitUntilClosed - True to wait until the popup window is closed.
		 * @param {Object} data - Data object to pass for the dashboard code.
		 */
		ShowPopupDashboard(dashboardID: string, waitUntilClosed: boolean, data: Object): void;

		/**
		 * Shows a message box.
		 * @param {string | DialogData} message - The message or the dialog data object.
		 * @returns {number} The index of clicked button.
		 */
		ShowMessage(name: string | DialogData): number;

	}

	/**
	 * The VaultUI specific event registration object.
	 */
	interface IVaultUIEventObject {

		// TODO: Events
		OnStarted?: () => void;
		OnStop?: () => void;
		OnNewVaultEntry?: (vaultEntry: IVaultEntry) => void | IVaultEntryEventObject;
	}

	/**
	 * The VaultUI specific event registration interface.
	 */
	interface IVaultUIEvents
		extends IEvents, IVaultUIEventObject {

		// TODO: Events
		Register(event: Event.Started, sink: () => void): number;
		Register(event: Event.Stop, sink: () => void): number;
		Register(event: Event.NewVaultEntry, sink: (vaultEntry: IVaultEntry) => void | IVaultEntryEventObject): number;
	}

	interface IWindow {

		/**
		 * Accesses the event source object for this object. Read only.
		 * @member {IEvents}
		 */
		readonly Events: IWindowEvents;

		/**
		 * Gets/Sets the window title.
		 * @member {string}
		 */
		Title: string;

		/**
		 * Gets/Sets the window width.
		 * @member {number}
		 */
		Width: number;

		/**
		 * Gets/Sets the window height.
		 * @member {number}
		 */
		Height: number;

		/**
		 * Sets the default size of the window.
		 * @param {number} defaultWidth - The default width
		 * @param {number} defaultHeight - The default height
		 * @param {boolean} resizeToDefault - True to resize the window to the default size. If false, the window is resized to given size unless the user has previously resized the window. If true, the window is always resized to the given size.
		 */
		SetDefaultSize(defaultWidth: number, defaultHeight: number, resizeToDefault: boolean): void;

		/**
		 * Gets/Sets whether the user can resize the window.
		 * @member {boolean}
		 */
		Resizable: boolean;

		/**
		 * Gets/Sets whether the user can minimize the window.
		 * @member {boolean}
		 */
		Minimizable: boolean;

		/**
		 * Gets/Sets whether the user can maximize the window.
		 * @member {boolean}
		 */
		Maximizable: boolean;

		/**
		 * Minimizes the window.
		 */
		Minimize(): void;

		/**
		 * Maximizes the window.
		 */
		Maximize(): void;

		/**
		 * Restores the window.
		 */
		Restore(): void;

		/**
		 * Closes the window. The close event is send before the window is closed.
		 */
		Close(): void;

		/**
		 * Sets the focus to this pane.
		 */
		Focus(): void;

		/**
		 * True if the window is currently focused. Read-only.
		 * @member {boolean}
		 */
		readonly IsFocused: boolean

		/**
		 * The window handle (HWND).
		 * @member {number}
		 */
		readonly Handle: number

	}

	/**
	 * The Window specific event registration object.
	 */
	interface IWindowEventObject {

		// TODO: Events
		OnCloseWindow?: () => void | boolean;
	}

	/**
	 * The Window specific event registration interface.
	 */
	interface IWindowEvents
		extends IEvents, IWindowEventObject {

		// TODO: Events
		Register(event: Event.CloseWindow, sink: () => void | boolean): number;
	}

}  // end MFilesUI module
