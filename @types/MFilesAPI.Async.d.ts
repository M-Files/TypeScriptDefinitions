
declare module MFilesAPI {

	export type AsyncSuccessHandler = () => void;

	export type AsyncFailureHandler = (shortErr: string, longErr: string, errorObj: Error) => void;

	export type AsyncSuccessHandler_T<TReturnValue> = (returnValue: TReturnValue) => void;

	export type AsyncFinallyHandler = () => void;

	export interface VaultObjectTypeOperationsAsync {
		GetBuiltInObjectType(ObjectType: MFilesAPI.MFBuiltInObjectType, OnSuccess?: AsyncSuccessHandler_T<ObjType>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectTypes(OnSuccess?: AsyncSuccessHandler_T<ObjTypes>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectType(ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<ObjType>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RefreshExternalObjectType(ObjectType: number, RefreshType: MFilesAPI.MFExternalDBRefreshType, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddObjectTypeAdmin(ObjectType: ObjTypeAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveObjectTypeAdmin(ObjectTypeID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateObjectTypeAdmin(ObjectType: ObjTypeAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectTypesAdmin(OnSuccess?: AsyncSuccessHandler_T<ObjTypesAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectTypeAdmin(ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateObjectTypeWithAutomaticPermissionsAdmin(ObjectType: ObjTypeAdmin, AutomaticPermissionsForcedActive?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectTypeIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectTypeIDByGUID(ObjectTypeGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RefreshExternalObjectTypeColumnMappingsAdmin(ObjectType: ObjTypeAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultObjectOperationsAsync {
		ShowBasicNewObjectWindow(ParentWindow: number, ObjectType: ObjType, OnSuccess?: AsyncSuccessHandler_T<ObjectWindowResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowNewObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjectCreationInfo: ObjectCreationInfo, OnSuccess?: AsyncSuccessHandler_T<ObjectWindowResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowBasicEditObjectWindow(ParentWindow: number, ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectWindowResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowEditObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectWindowResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewObject(ObjectType: number, PropertyValues: PropertyValues, SourceObjectFiles?: SourceObjectFiles, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckIn(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckOut(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectVersionAndProperties(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLatestObjectVersionAndProperties(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsCheckedOut(ObjID: ObjID, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowCheckoutPrompt(ParentWindow: number, Message: string, ObjID: ObjID, ShowCancel: boolean, AutoRejectConsequentPrompts?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsSingleFileObject(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetSingleFileObject(ObjVer: ObjVer, SingleFile: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToNamedACL(ObjVer: ObjVer, NamedACL: number, ChangeAllVersions: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToACL(ObjVer: ObjVer, AccessControlList: AccessControlList, ChangeAllVersions: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DestroyObject(ObjID: ObjID, DestroyAllVersions: boolean, ObjectVersion: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetThumbnailAsBytes(ObjVer: ObjVer, FileVer: FileVer, Width: number, Height: number, GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Rollback(ObjID: ObjID, RollbackToVersion: number, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndeleteObject(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndoCheckout(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetHistory(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetRelationships(ObjVer: ObjVer, Mode: MFilesAPI.MFRelationshipsMode, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCollectionMembers(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectInfo(ObjVer: ObjVer, LatestVersion: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewObjectEx(ObjectType: number, Properties: PropertyValues, SourceFiles?: SourceObjectFiles, SFD?: boolean, CheckIn?: boolean, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectPermissions(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionPermissions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveObject(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLatestObjVer(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewObjectExQuick(ObjectType: number, Properties: PropertyValues, SourceFiles?: SourceObjectFiles, SFD?: boolean, CheckIn?: boolean, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForObject(ObjID: ObjID, TargetVersion: number, SpecificVersion: boolean, URLType?: MFilesAPI.MFilesURLType, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowPrefilledNewObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjectCreationInfo: ObjectCreationInfo, PrefilledPropertyValues?: PropertyValues, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectWindowResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewEmptySingleFileDocument(PropertyValues: PropertyValues, Title: string, Extension: string, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetOfflineAvailability(ObjID: ObjID, AvailableInOfflineMode: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectLocationsInView(View: number, LatestSpecificBehavior: MFilesAPI.MFLatestSpecificBehavior, ObjectVersion: ObjVer, OnSuccess?: AsyncSuccessHandler_T<Strings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowRelatedObjects(ParentWindow: number, SourceObject: ObjID, ObjectTypeTargetForBrowsing: ObjectTypeTargetForBrowsing, ViewSelectionDialogInfoText?: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowRelationshipsDialog(ParentWindow: number, ObjectVersion: ObjVer, Modeless?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowCollectionMembersDialog(ParentWindow: number, ObjectVersion: ObjVer, Modeless?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowSubObjectsDialogModal(ParentWindow: number, ObjectVersion: ObjVer, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowHistoryDialogModal(ParentWindow: number, ObjectID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowSelectObjectHistoryDialogModal(ParentWindow: number, ObjectID: ObjID, WindowTitle?: string, OnSuccess?: AsyncSuccessHandler_T<ObjOrFileVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowCommentsDialogModal(ParentWindow: number, ObjectID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowCheckInReminder(ParentWindow: number, ObjVer: ObjVer, Asynchronous: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForObjectOrFile(ObjID: ObjID, TargetVersion?: number, SpecificVersion?: boolean, File?: number, URLType?: MFilesAPI.MFilesURLType, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RejectCheckInReminder(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DelayedCheckIn(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowCheckInReminderDialogModal(ParentWindow: number, ObjVer: ObjVer, ApplyEnvironmentConditions: boolean, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ProposeCheckOutForFile(ParentWindow: number, ObjVersionFile: ObjectVersionFile, CanCancel: boolean, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ForceUndoCheckout(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewSFDObject(ObjectType: number, Properties: PropertyValues, SourceFile: SourceObjectFile, CheckIn: boolean, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewSFDObjectQuick(ObjectType: number, Properties: PropertyValues, SourceFile: SourceObjectFile, CheckIn: boolean, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddFavorites(ObjIDs: ObjIDs, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndPropertiesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddFavorite(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveFavorites(ObjIDs: ObjIDs, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndPropertiesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveFavorite(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		NotifyObjectAccess(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreateNewAssignment(AssignmentName: string, AssignmentDescription: string, AssignedToUser: TypedValue, Deadline?: TypedValue, AccessControlList?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectGUID(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetObjectGUID(ObjID: ObjID, ObjectGUID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjIDByGUID(ObjectGUID: string, OnSuccess?: AsyncSuccessHandler_T<ObjID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DestroyObjects(ObjIDs: ObjIDs, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckOutMultipleObjects(ObjIDs: ObjIDs, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckInMultipleObjects(ObjVers: ObjVers, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjIDByOriginalObjID(OriginalVaultGUID: string, OriginalObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ResolveConflict(ParticipantObjID: ObjID, KeepThis: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectInfoEx(ObjVer: ObjVer, LatestVersion: boolean, UpdateFromServer?: boolean, NotifyViews?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLatestObjVerEx(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean, NotifyViews?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndoCheckoutMultipleObjects(ObjVers: ObjVers, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowChangeStateDialogModal(ParentWindow: number, ObjectID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		// This needs to be written like "ofMultipleObjects" (with small o). Also, it seems that the following parameter is left out in the MFWA version: UpdateFromServer?: boolean.
		// See tracker item 161776
		GetObjectVersionAndPropertiesofMultipleObjects(ObjVers: ObjVers, LatestVersions: boolean, AllowCheckedOut: boolean, AllowMissingObjectVersions: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndPropertiesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsObjectCheckedOut(ObjID: ObjID, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsObjectCheckedOutToThisUserOnThisComputer(ObjID: ObjID, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DeleteObject(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FollowObject(ObjID: ObjID, Follow?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsObjectFollowed(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MatchesSearchConditions(pIObjVer: ObjVer, pISearchConditions: SearchConditions, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MatchesSearchConditionsEx(pIObjectVersion: ObjectVersion, pISearchConditions: SearchConditions, pIPropertyValues?: PropertyValues, pIObjectVersionAndPropertiesOfMultipleObjects?: ObjectVersionAndPropertiesOfMultipleObjects, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetOfflineAvailability(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetOfflineObjIDs(OnSuccess?: AsyncSuccessHandler_T<ObjIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetExternalID(ObjID: ObjID, ExtID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForObjectEx(ObjVer: ObjVer, SpecificVersion: boolean, URLType?: MFilesAPI.MFilesURLType, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForObjectOrFileEx(ObjVer: ObjVer, FileVer: FileVer, SpecificVersion?: boolean, URLType?: MFilesAPI.MFilesURLType, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DestroyObjectEx(ObjID: ObjID, DestroyAllVersions: boolean, ObjectVersion: ObjVerVersion, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RollbackEx(ObjID: ObjID, RollbackToVersion: ObjVerVersion, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetRelatedObjectInfo(Lookup: Lookup, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetRelationshipsEx(ObjVer: ObjVer, Mode: MFilesAPI.MFRelationshipsMode, SearchInEachObjectType: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectDataOfMultipleObjects(IObjVers: ObjVers, ObjectDataRequest: ObjectVersionDataRequest, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionDataResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetHistoryEx(ObjID: ObjID, HistoryRetrievalMode: MFilesAPI.MFHistoryRetrievalMode, OnSuccess?: AsyncSuccessHandler_T<ObjectVersions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CompareWithPreviousVersion(ParentWindow: number, ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CompareWithAnotherVersion(ParentWindow: number, ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CompareWithAnotherDocument(ParentWindow: number, ObjVer: ObjVer, FileTitleAndExtension: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetShortObjectPath(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultObjectPropertyOperationsAsync {
		GetProperties(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<PropertyValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetProperties(ObjVer: ObjVer, PropertyValues: PropertyValues, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetProperty(ObjVer: ObjVer, Property: number, OnSuccess?: AsyncSuccessHandler_T<PropertyValue>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetProperty(ObjVer: ObjVer, PropertyValue: PropertyValue, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveProperty(ObjVer: ObjVer, Property: number, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesForDisplay(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<PropertyValuesForDisplay>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAssignment_DEPRECATED(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<WorkflowAssignment>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetAssignment_DEPRECATED(ObjVer: ObjVer, Assignment: WorkflowAssignment, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MarkAssignmentComplete(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetAllProperties(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetVersionComment(ObjVer: ObjVer, VersionComment: PropertyValue, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetVersionComment(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<VersionComment>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetVersionCommentHistory(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<VersionComments>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetWorkflowState(ObjVer: ObjVer, WorkflowState: ObjectVersionWorkflowState, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowState(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionWorkflowState>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesAsXML(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesOfMultipleObjects(ObjectVersions: ObjVers, OnSuccess?: AsyncSuccessHandler_T<PropertyValuesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetCreationInfoAdmin(ObjVer: ObjVer, UpdateCreatedBy: boolean, CreatedBy: TypedValue, UpdateCreated: boolean, CreatedUtc: TypedValue, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetLastModificationInfoAdmin(ObjVer: ObjVer, UpdateLastModifiedBy: boolean, LastModifiedBy: TypedValue, UpdateLastModified: boolean, LastModifiedUtc: TypedValue, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetPropertiesOfMultipleObjects(SetPropertiesParamsOfObjects: SetPropertiesParamsOfMultipleObjects, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndPropertiesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesWithIconClues(ObjVer: ObjVer, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<PropertyValuesWithIconClues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesWithIconCluesOfMultipleObjects(ObjectVersions: ObjVers, OnSuccess?: AsyncSuccessHandler_T<PropertyValuesWithIconCluesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetPropertiesWithPermissions(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetAllPropertiesWithPermissions(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GenerateAutomaticPermissionsFromPropertyValues(PropertyValues: PropertyValues, OnSuccess?: AsyncSuccessHandler_T<AccessControlList>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesForMetadataSync(ObjVer: ObjVer, Format: MFilesAPI.MFMetadataSyncFormat, OnSuccess?: AsyncSuccessHandler_T<NamedValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetWorkflowStateEx(ObjVer: ObjVer, WorkflowState: ObjectVersionWorkflowState, ElectronicSignature?: object, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetPropertiesWithPermissionsEx(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, ElectronicSignature?: object, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetAllPropertiesWithPermissionsEx(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, ElectronicSignature?: object, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreatePropertiesFromFileInformation(FileInformation: FileInformation, OnSuccess?: AsyncSuccessHandler_T<PropertyValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetWorkflowStateTransition(ObjVer: ObjVer, Workflow: number, lStateTransition: number, lVersionComment: string, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetWorkflowStateTransitionEx(ObjVer: ObjVer, Workflow: number, StateTransition: number, VersionComment: string, ElectronicSignature: object, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MarkAssignmentCompleteByUser(ObjVer: ObjVer, UserID: number, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ApproveOrRejectAssignment(ObjVer: ObjVer, Approve: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ApproveOrRejectAssignmentByUser(ObjVer: ObjVer, Approve: boolean, UserID: number, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertiesOfMultipleObjectsForDisplay(ObjectVersions: ObjVers, OnSuccess?: AsyncSuccessHandler_T<PropertyValuesOfMultipleObjectsForDisplay>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MarkForArchiving(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearArchivingMarker(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultObjectFileOperationsAsync {
		AddFile(ObjVer: ObjVer, Title: string, Extension: string, SourcePath: string, OnSuccess?: AsyncSuccessHandler_T<FileVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveFile(ObjVer: ObjVer, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFiles(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectFiles>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPathInDefaultView(ObjID: ObjID, ObjectVersion: number, FileID: number, FileVersion: number, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFile(File: number, FileVersion: number, FilePath: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_Begin(File: number, FileVersion: number, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_ReadBlock(DownloadID: number, BlockSize: number, Offset: number, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_Begin_32bit(File: number, FileVersion: number, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_ReadBlock_32bit(DownloadID: number, BlockSize: number, Offset: number, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFile(File: number, FileVersion: number, FilePath: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileBlockBegin(OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileBlock(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[], OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileBlockBegin_32bit(OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileBlock_32bit(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[], OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileCommit(UploadID: number, File: number, FileVersion: number, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileCommit_32bit(UploadID: number, File: number, FileVersion: number, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RenameFile(ObjVer: ObjVer, FileVer: FileVer, Title: string, Extension: string, UpdateSingleFileDocumentTitle?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFileSize(FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLatestFileVersion(FileID: number, AllowCheckedOut: boolean, OnSuccess?: AsyncSuccessHandler_T<FileVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddEmptyFile(ObjVer: ObjVer, Title: string, Extension: string, OnSuccess?: AsyncSuccessHandler_T<FileVer>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		OpenFileInDefaultApplication(ParentWindow: number, ObjVer: ObjVer, FileVer: FileVer, FileOpenMethod: MFilesAPI.MFFileOpenMethod, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFileSize_32bit(FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjIDOfFile(FileID: number, OnSuccess?: AsyncSuccessHandler_T<ObjID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		PerformOCROperation(ObjVer: ObjVer, FileVer: FileVer, OCROptions?: OCROptions, ZoneRecognitionMode?: MFilesAPI.MFOCRZoneRecognitionMode, ZoneRecognitionPages?: OCRPages, ConvertToSearchablePDF?: boolean, OnSuccess?: AsyncSuccessHandler_T<OCRPageResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFilesForModificationInEventHandler(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectFiles>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ConvertToPDF(ObjVer: ObjVer, FileID: number, StoreAsSeparateFile?: boolean, OverwriteExistingFile?: boolean, PDFA1b?: boolean, FailOnUnsupportedSourceFiles?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileEx(File: number, FileVersion: number, FilePath: string, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_BeginEx(File: number, FileVersion: number, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_BeginEx_32bit(File: number, FileVersion: number, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFromDataURI(ObjVer: ObjVer, File: number, FileVersion: number, DataURI: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileAsDataURI(ObjVer: ObjVer, File: number, FileVersion: number, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateMetadataInFile(ObjVer: ObjVer, File?: number, FailOnUnsupportedFiles?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPathInDefaultViewEx(ObjID: ObjID, ObjectVersion: number, FileID: number, FileVersion: number, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, PreferTraditionalFolderLocation?: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFile(FilePath: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CloseUploadSession(UploadID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileBlockBegin(FileExtension: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileBlockBegin_32bit(FileExtension: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileBlock(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[], OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileBlock_32bit(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[], OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileCommit(UploadID: number, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadTemporaryFileCommit_32bit(UploadID: number, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileEx2(ObjID: ObjID, FileVer: FileVer, FilePath: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_BeginEx2(ObjID: ObjID, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_Begin_32bitEx(ObjID: ObjID, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileEx(ObjID: ObjID, FileVer: FileVer, FilePath: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileCommitEx(UploadID: number, ObjID: ObjID, FileVer: FileVer, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFileCommit_32bitEx(UploadID: number, ObjID: ObjID, FileVer: FileVer, LogicalSize: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileEx3(ObjID: ObjID, FileVer: FileVer, FilePath: string, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_BeginEx3(ObjID: ObjID, FileVer: FileVer, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileInBlocks_BeginEx_32bitEx(ObjID: ObjID, FileVer: FileVer, FileFormat: MFilesAPI.MFFileFormat, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UploadFromDataURIEx(ObjVer: ObjVer, FileVer: FileVer, DataURI: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadFileAsDataURIEx(ObjVer: ObjVer, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFileSizeEx(ObjID: ObjID, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFileSize_32bitEx(ObjID: ObjID, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPathInDefaultViewEx2(ObjVer: ObjVer, FileVer: FileVer, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPathInDefaultViewEx3(ObjVer: ObjVer, FileVer: FileVer, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, PreferTraditionalFolderLocation?: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CancelFileDownloadSession(DownloadID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTextContentForTemporaryFile(UploadSessionID: number, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTextContentForFile(ObjVer: ObjVer, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DetectTextLanguage(TextContent: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTextContentForFileEx(ObjID: ObjID, FileVer: FileVer, OptionFlags: MFilesAPI.MFTextContentExtractionFlags, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DetectTextLanguageEx(TextContent: string, OnSuccess?: AsyncSuccessHandler_T<LanguageDetectionResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FindFileDuplicates(ObjID: ObjID, FileVer: FileVer, IncludeVersionsOfThisFile?: boolean, ExcludeFilesFromDeletedObjects?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FindFileDuplicatesBasedOnPath(SourceFilePath: string, ExcludeFilesFromDeletedObjects?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		HasFileDuplicates(ObjID: ObjID, FileVer: FileVer, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetShortObjectFilePath(ObjectFileAndVersion: ObjectVersionFile, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultPropertyDefOperationsAsync {
		GetPropertyDefs(OnSuccess?: AsyncSuccessHandler_T<PropertyDefs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyDef(PropertyDef: number, OnSuccess?: AsyncSuccessHandler_T<PropertyDef>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetBuiltInPropertyDef(PropertyDefType: MFilesAPI.MFBuiltInPropertyDef, OnSuccess?: AsyncSuccessHandler_T<PropertyDef>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddPropertyDefAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue, OnSuccess?: AsyncSuccessHandler_T<PropertyDefAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemovePropertyDefAdmin(PropertyDef: number, CopyToAnotherPropertyDef?: boolean, TargetPropertyDef?: number, Append?: boolean, DeleteFromClassesIfNecessary?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdatePropertyDefAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyDefsAdmin(OnSuccess?: AsyncSuccessHandler_T<PropertyDefsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyDefAdmin(PropertyDef: number, OnSuccess?: AsyncSuccessHandler_T<PropertyDefAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdatePropertyDefWithAutomaticPermissionsAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue, AutomaticPermissionsForcedActive?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyDefIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyDefIDByGUID(PropertyDefGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Recalculate(PropertyDef: number, RecalculateCurrentlyEmptyValuesOnly: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultValueListOperationsAsync {
		GetValueLists(OnSuccess?: AsyncSuccessHandler_T<ObjTypes>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueList(ValueList: number, OnSuccess?: AsyncSuccessHandler_T<ObjType>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetBuiltInValueList(BuiltInValueList: MFilesAPI.MFBuiltInValueList, OnSuccess?: AsyncSuccessHandler_T<ObjType>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RefreshExternalValueList(ValueList: number, RefreshType: MFilesAPI.MFExternalDBRefreshType, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddValueListAdmin(ValueList: ObjTypeAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveValueListAdmin(ValueListID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateValueListAdmin(ValueList: ObjTypeAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListsAdmin(OnSuccess?: AsyncSuccessHandler_T<ObjTypesAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListAdmin(ValueListID: number, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateValueListWithAutomaticPermissionsAdmin(ObjectType: ObjTypeAdmin, AutomaticPermissionsForcedActive?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjTypeAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListIDByGUID(ValueListGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultValueListItemOperationsAsync {
		GetValueListItems(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddValueListItem(ValueList: number, ValueListItem: ValueListItem, AdministrativeOperation?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateValueListItem(ValueListItem: ValueListItem, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveValueListItem(ValueList: number, Item: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForValueListItems(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, OnSuccess?: AsyncSuccessHandler_T<ValueListItemSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByID(ValueList: number, ValueListItemID: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeDefaultPermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeDefaultPermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByDisplayID(ValueList: number, ValueListItemDisplayID: string, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemsEx(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForValueListItemsEx(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItemSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByIDEx(ValueList: number, ValueListItemID: number, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByDisplayIDEx(ValueList: number, ValueListItemDisplayID: string, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemsEx2(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForValueListItemsEx2(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, MaxResults?: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItemSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemsWithPermissions(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItemsWithPermissions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForValueListItemsWithPermissions(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, MaxResults?: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItemSearchResultsWithPermissions>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList, NameForAutomaticPermissions: string, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToItemsOwnPermissions(ValueList: number, ValueListItemID: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearAutomaticPermissions(ValueList: number, ValueListItemID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndeleteValueListItem(ValueList: number, ValueListItemID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByGUID(ValueList: number, ItemGUID: string, AllowDeletedItems?: boolean, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemIDByGUID(ValueList: number, ItemGUID: string, AllowDeletedItems?: boolean, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveValueListItemEx(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemByIDEx2(ObjID: ObjID, ReplaceCurrentUserWithCallersIdentity?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItem>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToNamedACLEx(ObjID: ObjID, NamedACL: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePermissionsToACLEx(ObjID: ObjID, AccessControlList: AccessControlList, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToNamedACLEx(ObjID: ObjID, NamedACL: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToACLEx(ObjID: ObjID, AccessControlList: AccessControlList, NameForAutomaticPermissions: string, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeAutomaticPermissionsToItemsOwnPermissionsEx(ObjID: ObjID, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearAutomaticPermissionsEx(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndeleteValueListItemEx(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetValueListItemsInIdOrder(ValueList: number, LastReceivedItemID: number, BatchSize: number, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetReferencedValueListItemsInIdOrder(ValueList: number, LastReceivedItemID: number, BatchSize: number, SearchConditions: SearchConditions, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultClassOperationsAsync {
		GetObjectClasses(ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<ObjectClasses>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectClass(ObjectClass: number, OnSuccess?: AsyncSuccessHandler_T<ObjectClass>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAllObjectClasses(OnSuccess?: AsyncSuccessHandler_T<ObjectClasses>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddObjectClassAdmin(ObjectClassAdmin: ObjectClassAdmin, OnSuccess?: AsyncSuccessHandler_T<ObjectClassAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveObjectClassAdmin(ObjectClassID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateObjectClassAdmin(ObjectClass: ObjectClassAdmin, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAllObjectClassesAdmin(OnSuccess?: AsyncSuccessHandler_T<ObjectClassesAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectClassesAdmin(ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<ObjectClassesAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectClassAdmin(Class: number, OnSuccess?: AsyncSuccessHandler_T<ObjectClassAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectClassIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectClassIDByGUID(ObjectClassGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateObjectNames(ObjectClassID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultClassGroupOperationsAsync {
		GetClassGroups(ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<ClassGroups>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddClassGroup(ClassGroup: ClassGroup, OnSuccess?: AsyncSuccessHandler_T<ClassGroup>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveClassGroup(ClassGroupID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateClassGroup(ClassGroup: ClassGroup, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetClassGroup(ObjectType: number, ClassGroupID: number, OnSuccess?: AsyncSuccessHandler_T<ClassGroup>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetClassGroupIDByGUID(ClassGroupGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultWorkflowOperationsAsync {
		GetWorkflowsAsValueListItems(UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ValueListItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStates(Workflow: number, CurrentState?: TypedValue, OnSuccess?: AsyncSuccessHandler_T<States>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowsForClient(UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<Workflows>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddWorkflowAdmin(Workflow: WorkflowAdmin, OnSuccess?: AsyncSuccessHandler_T<WorkflowAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveWorkflowAdmin(WorkflowID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateWorkflowAdmin(Workflow: WorkflowAdmin, OnSuccess?: AsyncSuccessHandler_T<WorkflowAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowsAdmin(OnSuccess?: AsyncSuccessHandler_T<WorkflowsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowForClient(WorkflowID: number, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<Workflow>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowAdmin(WorkflowID: number, OnSuccess?: AsyncSuccessHandler_T<WorkflowAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStatesEx(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer, OnSuccess?: AsyncSuccessHandler_T<States>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetStateTransitionSignatureSettings(FromState: number, ToState: number, OnSuccess?: AsyncSuccessHandler_T<SignatureSettings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowIDByGUID(WorkflowGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateIDByGUID(StateGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateTransitionsAsJSON(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateTransitions(Workflow: number, CurrentState?: TypedValue, OnSuccess?: AsyncSuccessHandler_T<StateTransitionsForClient>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateTransitionsEx(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer, OnSuccess?: AsyncSuccessHandler_T<StateTransitionsForClient>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateTransitionIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetWorkflowStateTransitionIDByGUID(StateTransitionGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetStateTransitionSignatureSettingsByID(StateTransitionID: number, OnSuccess?: AsyncSuccessHandler_T<SignatureSettings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultViewOperationsAsync {
		GetViews(ViewCategory?: MFilesAPI.MFViewCategory, AllViews?: boolean, ParentView?: number, OnSuccess?: AsyncSuccessHandler_T<Views>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetView(View: number, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFolderNameListing(ExpressionEx: ExpressionEx, SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<FolderNameListing>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetViewLocationInClient(View: number, IncludeViewNameInPath?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FindPropertyFolderLocationInView(View: number, PropertyFolders: TypedValues, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ShowViewOrPropertyFolder(ParentWindow: number, View: number, PropertyFolders?: TypedValues, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddView(View: View, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateView(View: View, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveView(View: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddOfflineFilter(OfflineFilter: View, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetBuiltInView(BuiltInView: MFilesAPI.MFBuiltInView, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddTemporarySearchView(View: View, SearchCriteria: SearchCriteria, Reserved?: SearchConditions, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTemporarySearchView(ViewID: number, OnSuccess?: AsyncSuccessHandler_T<TemporarySearchView>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForView(ViewID: number, PropertyFolders?: TypedValues, SimpleURL?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFolderContents(FolderLocation: FolderDefs, OnSuccess?: AsyncSuccessHandler_T<FolderContentItems>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetViewIDByGUID(ViewGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetViewsAdmin(IncludeCommonViews: boolean, UserID: number, OnSuccess?: AsyncSuccessHandler_T<Views>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFolderUIStateForFolder(CommonState: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean, OnSuccess?: AsyncSuccessHandler_T<FolderUIState>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ResetFolderUIStateForFolder(ResetToProgramDefaults: boolean, ResetToCommonDefaults: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean, OnSuccess?: AsyncSuccessHandler_T<FolderUIState>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SaveFolderUIStateForFolder(SaveAsCommonSettings: boolean, ResetCommonSettingsToAllUsers: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean, State: FolderUIState, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFolderUIStateForSpecialLocation(CommonState: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType, OnSuccess?: AsyncSuccessHandler_T<FolderUIState>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ResetFolderUIStateForSpecialLocation(ResetToProgramDefaults: boolean, ResetToCommonDefaults: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType, OnSuccess?: AsyncSuccessHandler_T<FolderUIState>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SaveFolderUIStateForSpecialLocation(SaveAsCommonSettings: boolean, ResetCommonSettingsToAllUsers: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType, State: FolderUIState, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyValuesOfFolder(FolderLocation: FolderDefs, ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<PropertyValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPropertyValuesOfPath(Path: string, ObjectType: number, OnSuccess?: AsyncSuccessHandler_T<PropertyValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTemporarySearchByPath(RelativePath: string, OnSuccess?: AsyncSuccessHandler_T<TemporarySearchView>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ModifyTemporarySearch(TemporarySearchView: TemporarySearchView, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetIconAsBytes(ExternalRepository: string, IconID: string, Size: number, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFolder(FolderID: FolderID, OnSuccess?: AsyncSuccessHandler_T<FolderData>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddTemporarySearchViewEx(View: View, SearchCriteria: SearchCriteria, ForceUsingAdvancedSearchConds: boolean, OnSuccess?: AsyncSuccessHandler_T<View>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultUserOperationsAsync {
		GetUserList(OnSuccess?: AsyncSuccessHandler_T<KeyNamePairs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserAccounts(OnSuccess?: AsyncSuccessHandler_T<UserAccounts>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ModifyUserAccount(User: UserAccount, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddUserAccount_DEPRECATED(User: UserAccount, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveUserAccount(UserID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserAccount(UserID: number, OnSuccess?: AsyncSuccessHandler_T<UserAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddUserAccount(User: UserAccount, OnSuccess?: AsyncSuccessHandler_T<UserAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddOrUndeleteUserAccount(User: UserAccount, OnSuccess?: AsyncSuccessHandler_T<UserAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserIDByGUID(UserGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLoginAccountOfUser(UserID: number, OnSuccess?: AsyncSuccessHandler_T<LoginAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLoginAccounts(OnSuccess?: AsyncSuccessHandler_T<LoginAccounts>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UndeleteUserAccountByGUID(UserAccountGUIDToUndelete: string, User: UserAccount, OnSuccess?: AsyncSuccessHandler_T<UserAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultUserGroupOperationsAsync {
		GetUserGroups(OnSuccess?: AsyncSuccessHandler_T<UserGroups>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroupList(OnSuccess?: AsyncSuccessHandler_T<KeyNamePairs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddUserGroup_DEPRECATED(UserGroup: UserGroup, OnSuccess?: AsyncSuccessHandler_T<UserGroup>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveUserGroupAdmin(UserGroupID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateUserGroup_DEPRECATED(UserGroup: UserGroup, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroupsAdmin(OnSuccess?: AsyncSuccessHandler_T<UserGroupsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddUserGroupAdmin(UserGroup: UserGroupAdmin, OnSuccess?: AsyncSuccessHandler_T<UserGroupAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateUserGroupAdmin(UserGroup: UserGroupAdmin, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroup(UserGroupID: number, OnSuccess?: AsyncSuccessHandler_T<UserGroup>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroupAdmin(UserGroupID: number, OnSuccess?: AsyncSuccessHandler_T<UserGroupAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetGroupsOfUserOrGroup(UserOrGroupID: number, IsGroup: boolean, OnSuccess?: AsyncSuccessHandler_T<UserGroups>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroupIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserGroupIDByGUID(UserGroupGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddOrUndeleteUserGroup(UserGroup: UserGroupAdmin, OnSuccess?: AsyncSuccessHandler_T<UserGroupAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserContainersAdmin(OnSuccess?: AsyncSuccessHandler_T<UserGroupsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultNamedACLOperationsAsync {
		GetNamedACLs(OnSuccess?: AsyncSuccessHandler_T<NamedACLs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddNamedACL_DEPRECATED(NamedACL: NamedACL, OnSuccess?: AsyncSuccessHandler_T<NamedACL>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveNamedACLAdmin(NamedACLID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateNamedACL_DEPRECATED(NamedACL: NamedACL, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLsAdmin(OnSuccess?: AsyncSuccessHandler_T<NamedACLsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddNamedACLAdmin(NamedACLAdmin: NamedACLAdmin, OnSuccess?: AsyncSuccessHandler_T<NamedACLAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateNamedACLAdmin(NamedACLAdmin: NamedACLAdmin, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACL(NamedACLID: number, OnSuccess?: AsyncSuccessHandler_T<NamedACL>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLAdmin(NamedACLID: number, OnSuccess?: AsyncSuccessHandler_T<NamedACLAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsNamedACLUsedInAutomaticPermissionsAdmin(NamedACLID: number, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateNamedACLWithPropagationAdmin(NamedACLAdmin: NamedACLAdmin, MaintainLinks?: boolean, AllowPropagation?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveNamedACLWithPropagationAdmin(NamedACLID: number, AllowPropagation?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLsByTypeAdmin(Type?: MFilesAPI.MFNamedACLType, OnSuccess?: AsyncSuccessHandler_T<NamedACLsAdmin>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMatchingNamedACLForAccessControlList(AccessControlList: AccessControlList, ExplicitLinkOnly?: boolean, ActiveAccessControlComponentsOnly?: boolean, RefreshFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<NamedACL>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMatchingNamedACLForAccessControlListComponent(AccessControlListComponent: AccessControlListComponent, ExplicitLinkOnly?: boolean, RefreshFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<NamedACL>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLsWithRefresh(RefreshFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<NamedACLs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLWithRefresh(NamedACLID: number, RefreshFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<NamedACL>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLIDByAlias(Alias: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNamedACLIDByGUID(NamedACLGUID: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultTraditionalFolderOperationsAsync {
		GetTraditionalFolderContents(Folder: number, OnSuccess?: AsyncSuccessHandler_T<TraditionalFolderContents>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface UserOrUserGroupIDsAsync {
		Item(Index: number, OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Add(Index: number, UserOrUserGroupID: UserOrUserGroupID, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Remove(Index: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserOrUserGroupID(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType, OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUserOrUserGroupIDIndex(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Clone(OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface TimeZoneInformationAsync {
		LoadWithCurrentTimeZone(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LoadTimeZoneByName(TimeZoneName: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LoadTimeZoneByIndex(Index: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Clone(OnSuccess?: AsyncSuccessHandler_T<TimeZoneInformation>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface ServerVaultCapabilitiesAsync {
		Clone(OnSuccess?: AsyncSuccessHandler_T<ServerVaultCapabilities>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface SessionInfoAsync {
		readonly UserAndSubstitutedByMe: UserOrUserGroupIDsAsync;
		readonly UserAndGroupMemberships: UserOrUserGroupIDsAsync;
		readonly TimeZoneInfo: TimeZoneInformationAsync;
		readonly ServerVaultCapabilities: ServerVaultCapabilitiesAsync;
		CheckPropertyDefAccess(PropertyDefAccessControlList: AccessControlList, DesiredPropertyDefAccess: MFilesAPI.MFPropertyDefAccess, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckObjectTypeAccess(ObjectTypeAccessControlList: AccessControlList, DesiredObjectTypeAccess: MFilesAPI.MFObjectTypeAccess, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsLoggedOnUserSubstituteOfUser(UserID: number, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckObjectAccess(ObjectAccessControlList: AccessControlList, DesiredObjectAccess: MFilesAPI.MFObjectAccess, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CheckVaultAccess(DesiredVaultAccess: MFilesAPI.MFVaultAccess, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CloneFrom(SessionInfo: SessionInfo, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultClientOperationsAsync {
		IsOffline(OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsOnline(OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetVaultToOffline(ParentWindow: number, OnSuccess?: AsyncSuccessHandler_T<MFilesAPI.MFOfflineTransitionResultFlags>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetVaultToOnline(ParentWindow: number, OnSuccess?: AsyncSuccessHandler_T<MFilesAPI.MFOnlineTransitionResultFlags>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisableCheckInReminderForCallingProcess(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		EnableCheckInReminderForCallingProcess(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultObjectSearchOperationsAsync {
		SearchForObjectsByExportedSearchConditionsXML(SearchString: string, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<XMLSearchResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByExportedSearchConditions(ExportedSearchString: string, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByString(SearchString: string, SortResults: boolean, FullTextSearchFlags: MFilesAPI.MFFullTextSearchFlags, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByCondition(SearchCondition: SearchCondition, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByConditionsXML(SearchConditions: SearchConditions, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<XMLSearchResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByConditions(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SearchForObjectsByConditionsEx(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean, MaxResultCount?: number, SearchTimeoutInSeconds?: number, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectsInPath(RelativePath: string, SortResults: boolean, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectSearchResults>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FindObjectVersionAndProperties(RelativePath: string, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		FindFile(RelativePath: string, UpdateFromServer?: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionFile>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsObjectPathInMFiles(RelativePath: string, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFacetValues(SearchConditions: SearchConditions, Facets: Expressions, FacetValuesMaxCount: number, Flags: MFilesAPI.MFFacetSearchFlags, OnSuccess?: AsyncSuccessHandler_T<StringData>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetFacetValuesByPath(RelativePath: string, Facets: Expressions, FacetValuesMaxCount: number, Flags: MFilesAPI.MFFacetSearchFlags, OnSuccess?: AsyncSuccessHandler_T<StringData>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetObjectCountInSearch(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetSearchHits(Input: string, SearchCondition: SearchCondition, OnSuccess?: AsyncSuccessHandler_T<Strings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultManagementOperationsAsync {
		RebuildFullTextSearchIndex(Metadata: boolean, FileContents: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateVaultProperties(VaultProperties: VaultProperties, RegistrationDataOnly?: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetEventHandlers(OnSuccess?: AsyncSuccessHandler_T<EventHandlers>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetEventHandlers(EventHandlers: EventHandlers, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ExportContent(ExportContentJob: ExportContentJob, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ArchiveOldVersions(ArchiveOldVersionsJob: ArchiveOldVersionsJob, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ImportContent(ImportContentJob: ImportContentJob, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		VerifyVault(VerifyVaultJob: VerifyVaultJob, OnSuccess?: AsyncSuccessHandler_T<VerifyVaultJobOutput>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		PreviewImportContent(ImportContentJob: ImportContentJob, SummaryFile: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ImportContentAsync(ImportContentJob: ImportContentJob, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		WaitAsyncJob(JobID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsAsyncJobRunning(JobID: number, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetVaultProperties(OnSuccess?: AsyncSuccessHandler_T<VaultProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		QueueAndWaitForLatestBackgroundTask(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsGroundLinkProxy(OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultUserSettingOperationsAsync {
		GetSubstituteUsers(OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetSubstituteUsers(UserOrUserGroupIDs: UserOrUserGroupIDs, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetVaultLanguage(OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangeVaultLanguage(Language: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetVaultLanguageCode(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetSubstituteUsersOfUser(UserID: number, OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetUsersBySubstituteUser(UserID: number, OnSuccess?: AsyncSuccessHandler_T<UserOrUserGroupIDs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface LanguagesAsync {
		Item(Index: number, OnSuccess?: AsyncSuccessHandler_T<Language>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultNamedValueStorageOperationsAsync {
		GetNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, OnSuccess?: AsyncSuccessHandler_T<NamedValues>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValues: NamedValues, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValueNames: Strings, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetNamedValuesIfUnmodified(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValues: NamedValues, ExpectedValues: NamedValues, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultDataSetOperationsAsync {
		GetDataSets(OnSuccess?: AsyncSuccessHandler_T<DataSets>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetReportAccessCredentials(OnSuccess?: AsyncSuccessHandler_T<ReportAccessCredentials>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		StartDataSetExport(ID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetDataSetExportingStatus(ID: number, OnSuccess?: AsyncSuccessHandler_T<DataSetExportingStatus>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultEventLogOperationsAsync {
		Clear(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		IsLoggingEnabled(OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetLoggingEnabled(Enabled: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ExportAll(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ExportRange(FirstEventID: number, LastEventID: number, DeleteEventsAfterExporting?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearRange(FirstEventID: number, LastEventID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ExportRange_32bit(FirstEventID: string, LastEventID: string, DeleteEventsAfterExporting?: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearRange_32bit(FirstEventID: string, LastEventID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetIDRange(OnSuccess?: AsyncSuccessHandler_T<IDRange>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddCustomEventEntry(EventType: string, XmlData: string, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultElectronicSignatureOperationsAsync {
		AddEmptySignature(ObjVer: ObjVer, SignatureIdentifier: string, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddEmptySignatures(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisconnectSignature(ObjVer: ObjVer, SignatureIdentifier: string, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisconnectSignatures(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisconnectSignatureEx(ObjVer: ObjVer, SignatureIdentifier: string, InvalidateDisconnectedSignatures: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisconnectSignaturesEx(ObjVer: ObjVer, InvalidateDisconnectedSignatures: boolean, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultScheduledJobManagementOperationsAsync {
		GetScheduledJobs(OnSuccess?: AsyncSuccessHandler_T<ScheduledJobs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetScheduledJob(ID: number, OnSuccess?: AsyncSuccessHandler_T<ScheduledJob>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetScheduledJobRunInfo(ID: number, OnSuccess?: AsyncSuccessHandler_T<ScheduledJobRunInfo>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		StartScheduledJob(ID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CancelScheduledJob(ID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddScheduledJob(ScheduledJob: ScheduledJob, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ModifyScheduledJob(ScheduledJob: ScheduledJob, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveScheduledJob(ID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultCustomApplicationManagementOperationsAsync {
		GetCustomApplications(OnSuccess?: AsyncSuccessHandler_T<CustomApplications>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		EnableCustomApplication(ApplicationID: string, Enabled: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		InstallCustomApplication(File: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UninstallCustomApplication(ApplicationID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplication(ApplicationID: string, OnSuccess?: AsyncSuccessHandler_T<CustomApplication>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadCustomApplicationBlockBegin(ApplicationID: string, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadCustomApplicationBlockBegin_32bit(ApplicationID: string, OnSuccess?: AsyncSuccessHandler_T<FileDownloadSession>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadCustomApplicationBlock(DownloadID: number, BlockSize: number, Offset: number, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DownloadCustomApplicationBlock_32bit(DownloadID: number, BlockSize: number, Offset: number, OnSuccess?: AsyncSuccessHandler_T<number[]>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationsEx(Platform: MFilesAPI.MFExtApplicationPlatform, OnSuccess?: AsyncSuccessHandler_T<CustomApplications>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		InstallCustomApplicationLicense(ApplicationID: string, NewLicenseContent: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationLicenseStatus(ApplicationID: string, OnSuccess?: AsyncSuccessHandler_T<MFilesAPI.MFApplicationLicenseStatus>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationNewLicenseStatus(ApplicationID: string, NewLicenseContent: string, OnSuccess?: AsyncSuccessHandler_T<MFilesAPI.MFApplicationLicenseStatus>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationLicenseDetails(ApplicationID: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationNewLicenseDetails(ApplicationID: string, NewLicenseContent: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetCustomApplicationsEx2(Type: MFilesAPI.MFCustomApplicationType, Platform: MFilesAPI.MFExtApplicationPlatform, OnSuccess?: AsyncSuccessHandler_T<CustomApplications>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		EnableCustomApplicationInVault(ApplicationID: string, Enabled: boolean, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultExtensionMethodOperationsAsync {
		ExecuteVaultExtensionMethod(MethodIdentifier: string, Input: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DoesActiveVaultExtensionMethodExist(MethodIdentifier: string, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ExecuteVaultExtensionMethodEx(ApplicationGuid: string, Extension: string, Instance: string, Method: string, Input: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultNotificationOperationsAsync {
		SendCustomNotification(UserOrUserGroupIDs: UserOrUserGroupIDs, IncludeSubstituteUsers: boolean, ExternalRecipients: Strings, SendWithServerEmailIdentity: boolean, Subject: string, Body: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNotificationRuleNamesByID(OnSuccess?: AsyncSuccessHandler_T<KeyNamePairs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultServerDataPushOperationsAsync {
		SetServerDataPushSink(ServerDataPushSink: IServerDataPushSink, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SendResponse(RequestID: number, JsonResponseContent: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SendError(RequestID: number, Error: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SendCancel(RequestID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SendHeartbeat(RequestID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CloneVaultForServerDataPush(ServerDataPushSink: IServerDataPushSink, OnSuccess?: AsyncSuccessHandler_T<Vault>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultLoginAccountOperationsAsync {
		GetLoginAccounts(OnSuccess?: AsyncSuccessHandler_T<LoginAccounts>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLoginAccount(AccountName: string, OnSuccess?: AsyncSuccessHandler_T<LoginAccount>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ModifyLoginAccount(LoginAccount: LoginAccount, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveLoginAccount(AccountName: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddLoginAccount(LoginAccount: LoginAccount, Password?: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPersonalInformationFromDomain(AccountName: string, OnSuccess?: AsyncSuccessHandler_T<LoginAccountPersonalInformation>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateLoginPassword(AccountName: string, NewPassword: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPasswordHash(AccountName: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SetPasswordHash(AccountName: string, PasswordHash: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLoginAccountsWithSessions(OnSuccess?: AsyncSuccessHandler_T<LoginAccounts>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ForceLogout(AccountNames: Strings, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CreatePasswordResetRequest(AccountName: string, AccountEmailAddress: string, SiteUrl: string, SendEmail: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ResetPassword(AccountName: string, ExpirationTime: string, ResetPasswordHash: string, NewPassword: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ModifyLoginAccountEx(AccountName: string, AllowChangingUsername: boolean, LoginAccount: LoginAccount, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultAutomaticMetadataOperationsAsync {
		GetAutomaticMetadataForTemporaryFile(UploadSessionID: number, OnSuccess?: AsyncSuccessHandler_T<AutomaticMetadataResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAutomaticMetadataForTemporaryFiles(IIDs: IDs, OnSuccess?: AsyncSuccessHandler_T<AutomaticMetadataResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAutomaticMetadataForObject(ObjVer: ObjVer, OnSuccess?: AsyncSuccessHandler_T<AutomaticMetadataResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAutomaticMetadata(IIDs: IDs, ObjectType: number, ObjVer: ObjVer, PropertyValues: PropertyValues, SuggestionProviders: Strings, CustomData: string, OnSuccess?: AsyncSuccessHandler_T<AutomaticMetadataResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DetectTextLanguage(TextContent: string, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DetectTextLanguageEx(TextContent: string, OnSuccess?: AsyncSuccessHandler_T<LanguageDetectionResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultSharedLinkOperationsAsync {
		CreateSharedLink(SharedLinkCreationInfo: SharedLinkInfo, OnSuccess?: AsyncSuccessHandler_T<SharedLinkInfo>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DeleteSharedLink(AccessKey: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetSharedLink(AccessKey: string, OnSuccess?: AsyncSuccessHandler_T<SharedLinkInfo>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetSharedLinks(CreatedByUser?: number, OnSuccess?: AsyncSuccessHandler_T<SharedLinkInfos>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetSharedLinksByObject(ObjID: ObjID, OnSuccess?: AsyncSuccessHandler_T<SharedLinkInfos>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultExternalObjectOperationsAsync {
		PromoteObject(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, pACLProvidedCBN?: AccessControlList, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndProperties>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ResolveManagedIDOfPromotedObject(objIdUnmanaged: ObjID, OnSuccess?: AsyncSuccessHandler_T<ObjID>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DemoteObjects(ObjIDs: ObjIDs, OnSuccess?: AsyncSuccessHandler_T<ObjectVersionAndPropertiesOfMultipleObjects>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		MigrateObject(MigrateObjectParams: MigrateObjectParams, OnSuccess?: AsyncSuccessHandler_T<MigrationResult>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetPromotedObjects(ExternalRepository?: string, LastSeenObjectID?: ObjID, MaxResultCount?: number, OnSuccess?: AsyncSuccessHandler_T<ObjIDPairs>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultExtensionAuthenticationOperationsAsync {
		GetExtensionAuthenticationTargets(OnSuccess?: AsyncSuccessHandler_T<ExtensionAuthenticationTargets>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LogInWithExtensionAuthentication(TargetID: string, ExtensionAuthenticationResponse: ExtensionAuthenticationResponse, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LogOutWithExtensionAuthentication(TargetID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LogInAsDifferentUserForExtensionAuthentication(TargetID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetExtensionAuthenticationStatus(OnSuccess?: AsyncSuccessHandler_T<ExtensionAuthenticationStatuses>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		StoreExtensionAuthenticationSpecialCredentials(ExtensionAuthenticationSpecialUserType: MFilesAPI.MFExtensionAuthenticationSpecialUserType, TargetID: string, ExtensionAuthenticationResponse: ExtensionAuthenticationResponse, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveExtensionAuthenticationSpecialCredentials(ExtensionAuthenticationSpecialUserType: MFilesAPI.MFExtensionAuthenticationSpecialUserType, TargetID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultUserOperationsExAsync {
		SearchForUserAccount(AccountName: string, OnSuccess?: AsyncSuccessHandler_T<UserAccounts>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddMemberToUserGroup(UserGroup: number, MemberID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		RemoveMemberFromUserGroup(UserGroup: number, MemberID: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultApplicationTaskOperationsAsync {
		OpenTaskQueue(QueueID: string, QueueProcessingBehavior: MFilesAPI.MFTaskQueueProcessingBehavior, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddTask(QueueID: string, RestoreToWaitingTimeoutInMinutes: number, TaskType: string, TaskData: number[], OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ReserveTasksForProcessing(QueueIDCollection: Strings, OnSuccess?: AsyncSuccessHandler_T<ApplicationTaskInfos>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		UpdateTask(TaskID: string, NewState: MFilesAPI.MFTaskState, Progress: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTaskQueues(OnSuccess?: AsyncSuccessHandler_T<Strings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTaskIDsFromQueue(QueueID: string, States: IDs, OnSuccess?: AsyncSuccessHandler_T<Strings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetTasks(TaskIDCollection: Strings, OnSuccess?: AsyncSuccessHandler_T<ApplicationTaskInfos>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		SendBroadcastMessage(QueueID: string, TaskType: string, TaskData: number[], OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetLatestBroadcastMessageIdentifiers(QueueIDCollection: Strings, OnSuccess?: AsyncSuccessHandler_T<Strings>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ClearAndDestroyTaskQueue(QueueID: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetNewBroadcastMessages(QueueID: string, LatestBroadcastMessageID: string, OnSuccess?: AsyncSuccessHandler_T<ApplicationBroadcastMessages>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AddScheduledTask(QueueID: string, RestoreToWaitingTimeoutInMinutes: number, TaskType: string, TaskData: number[], ActivationTimestamp: Timestamp, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface VaultDocumentComparisonOperationsAsync {
		Compare(ObjIdOriginal: ObjID, FileVerOriginal: FileVer, ObjIdModified: ObjID, FileVerModified: FileVer, Language: string, AllowDownload: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CompareWithTemporaryFile(ObjIdOriginal: ObjID, FileVerOriginal: FileVer, UploadSessionID: number, UploadFileName: string, Language: string, AllowDownload: boolean, OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		AllowDocumentComparison(OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

	export interface IVaultAsync {
		readonly ObjectTypeOperations: VaultObjectTypeOperationsAsync;
		readonly ObjectOperations: VaultObjectOperationsAsync;
		readonly ObjectPropertyOperations: VaultObjectPropertyOperationsAsync;
		readonly ObjectFileOperations: VaultObjectFileOperationsAsync;
		readonly PropertyDefOperations: VaultPropertyDefOperationsAsync;
		readonly ValueListOperations: VaultValueListOperationsAsync;
		readonly ValueListItemOperations: VaultValueListItemOperationsAsync;
		readonly ClassOperations: VaultClassOperationsAsync;
		readonly ClassGroupOperations: VaultClassGroupOperationsAsync;
		readonly WorkflowOperations: VaultWorkflowOperationsAsync;
		readonly ViewOperations: VaultViewOperationsAsync;
		readonly UserOperations: VaultUserOperationsAsync;
		readonly UserGroupOperations: VaultUserGroupOperationsAsync;
		readonly NamedACLOperations: VaultNamedACLOperationsAsync;
		readonly TraditionalFolderOperations: VaultTraditionalFolderOperationsAsync;
		readonly SessionInfo: SessionInfoAsync;
		readonly ClientOperations: VaultClientOperationsAsync;
		readonly ObjectSearchOperations: VaultObjectSearchOperationsAsync;
		readonly ManagementOperations: VaultManagementOperationsAsync;
		readonly UserSettingOperations: VaultUserSettingOperationsAsync;
		readonly VaultLanguages: LanguagesAsync;
		readonly NamedValueStorageOperations: VaultNamedValueStorageOperationsAsync;
		readonly DataSetOperations: VaultDataSetOperationsAsync;
		readonly EventLogOperations: VaultEventLogOperationsAsync;
		readonly ElectronicSignatureOperations: VaultElectronicSignatureOperationsAsync;
		readonly ScheduledJobManagementOperations: VaultScheduledJobManagementOperationsAsync;
		readonly CustomApplicationManagementOperations: VaultCustomApplicationManagementOperationsAsync;
		readonly ExtensionMethodOperations: VaultExtensionMethodOperationsAsync;
		readonly NotificationOperations: VaultNotificationOperationsAsync;
		readonly ServerDataPushOperations: VaultServerDataPushOperationsAsync;
		readonly LoginAccountOperations: VaultLoginAccountOperationsAsync;
		readonly AutomaticMetadataOperations: VaultAutomaticMetadataOperationsAsync;
		readonly SharedLinkOperations: VaultSharedLinkOperationsAsync;
		readonly ExternalObjectOperations: VaultExternalObjectOperationsAsync;
		readonly ExtensionAuthenticationOperations: VaultExtensionAuthenticationOperationsAsync;
		readonly UserOperationsEx: VaultUserOperationsExAsync;
		readonly ApplicationTaskOperations: VaultApplicationTaskOperationsAsync;
		readonly DocumentComparisonOperations: VaultDocumentComparisonOperationsAsync;
		LogOutWithDialogs(ParentWindow: number, OnSuccess?: AsyncSuccessHandler_T<boolean>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetGUID(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		LogOutSilent(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		ChangePassword(OldPassword: string, NewPassword: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetServerVersionOfVault(OnSuccess?: AsyncSuccessHandler_T<MFilesVersion>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		TestConnectionToServer(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		TestConnectionToVault(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMFilesURLForVaultRoot(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		TestConnectionToVaultWithTimeout(TimeoutInMilliseconds: number, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CloneFrom(SourceVault: Vault, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMetadataStructureItemIDByAlias(MetadataStructureItemType: MFilesAPI.MFMetadataStructureItem, Alias: string, Unused?: boolean, OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		CloneForParallelActivity(OnSuccess?: AsyncSuccessHandler_T<Vault>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetMetadataStructureVersionID(OnSuccess?: AsyncSuccessHandler_T<number>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetAllTranslations(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		GetServerLicenseStatus(OnSuccess?: AsyncSuccessHandler_T<LicenseStatus>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DisconnectDevice(DeviceToken: string, OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		DetachSession(OnSuccess?: AsyncSuccessHandler_T<string>, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
		Restart(OnSuccess?: AsyncSuccessHandler, OnFailure?: AsyncFailureHandler, OnFinally?: AsyncFinallyHandler): void;
	}

}  // end module MFilesAPI
