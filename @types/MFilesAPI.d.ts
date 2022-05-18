declare module MFilesAPI {

	export interface MFScheduledJobType { }
	namespace MFScheduledJobType {
		interface MFScheduledJobTypeUninitialized extends MFScheduledJobType { } // 0
		interface MFScheduledJobTypeBackup extends MFScheduledJobType { } // 1
		interface MFScheduledJobTypeRestore extends MFScheduledJobType { } // 2
		interface MFScheduledJobTypeCopyVault extends MFScheduledJobType { } // 3
		interface MFScheduledJobTypeVerifyVault extends MFScheduledJobType { } // 4
		interface MFScheduledJobTypeExportContent extends MFScheduledJobType { } // 5
		interface MFScheduledJobTypeArchiveOldVersions extends MFScheduledJobType { } // 6
		interface MFScheduledJobTypeImportContent extends MFScheduledJobType { } // 7
		interface MFScheduledJobTypeOptimizeVault extends MFScheduledJobType { } // 8
		interface MFScheduledJobTypeRecalculate extends MFScheduledJobType { } // 9
		interface MFScheduledJobTypeMigrateVault extends MFScheduledJobType { } // 10
		interface MFScheduledJobUpdateFileEncryptionStatus extends MFScheduledJobType { } // 11
	}

	export interface MFServerConnection { }
	namespace MFServerConnection {
		interface MFServerConnectionNone extends MFServerConnection { } // 0
		interface MFServerConnectionAuthenticated extends MFServerConnection { } // 1
		interface MFServerConnectionAnonymous extends MFServerConnection { } // 2
	}

	export interface MFValueListItemPropertyDef { }
	namespace MFValueListItemPropertyDef {
		interface MFValueListItemPropertyDefID extends MFValueListItemPropertyDef { } // 1
		interface MFValueListItemPropertyDefName extends MFValueListItemPropertyDef { } // 2
		interface MFValueListItemPropertyDefOwner extends MFValueListItemPropertyDef { } // 3
		interface MFValueListItemPropertyDefParent extends MFValueListItemPropertyDef { } // 4
		interface MFValueListItemPropertyDefDeleted extends MFValueListItemPropertyDef { } // 5
		interface MFValueListItemPropertyDefObjectType extends MFValueListItemPropertyDef { } // 6
		interface MFValueListItemPropertyDefExtID extends MFValueListItemPropertyDef { } // 7
	}

	export interface MFVaultConnectionTestResult { }
	namespace MFVaultConnectionTestResult {
		interface MFVaultConnectionTestResultOK extends MFVaultConnectionTestResult { } // 0
		interface MFVaultConnectionTestResultUserCancelledLoginAttempt extends MFVaultConnectionTestResult { } // 1
	}

	export interface MFViewCategory { }
	namespace MFViewCategory {
		interface MFViewCategoryNormal extends MFViewCategory { } // 0
		interface MFViewCategoryOfflineFilter extends MFViewCategory { } // 1
		interface MFViewCategoryTemporarySearch extends MFViewCategory { } // 2
	}

	export interface MFBuiltInView { }
	namespace MFBuiltInView {
		interface MFBuiltInViewCheckedOutToCurrentUser extends MFBuiltInView { } // 5
		interface MFBuiltInViewOffline extends MFBuiltInView { } // 6
		interface MFBuiltInViewRecentlyModifiedByMe extends MFBuiltInView { } // 7
		interface MFBuiltInViewTemplates extends MFBuiltInView { } // 8
		interface MFBuiltInViewAssignedToMe extends MFBuiltInView { } // 9
		interface MFBuiltInViewLatestSearches extends MFBuiltInView { } // 11
		interface MFBuiltInViewByID extends MFBuiltInView { } // 12
		interface MFBuiltInViewBuiltIn extends MFBuiltInView { } // 13
		interface MFBuiltInViewRecentlyAccessedByMe extends MFBuiltInView { } // 14
		interface MFBuiltInViewFavorites extends MFBuiltInView { } // 15
		interface MFBuiltInViewOfflineMarkedForOfflineAvailability extends MFBuiltInView { } // -9001
		interface MFBuiltInViewOfflineCheckedOut extends MFBuiltInView { } // -9000
		interface MFBuiltInViewAnyView extends MFBuiltInView { } // -1
	}

	export interface MFOnlineTransitionResultFlags { }
	namespace MFOnlineTransitionResultFlags {
		interface MFOnlineTransitionResultFlagNone extends MFOnlineTransitionResultFlags { } // 0
		interface MFOnlineTransitionResultFlagStatusChanged extends MFOnlineTransitionResultFlags { } // 1
	}

	export interface MFOfflineTransitionResultFlags { }
	namespace MFOfflineTransitionResultFlags {
		interface MFOfflineTransitionResultFlagNone extends MFOfflineTransitionResultFlags { } // 0
		interface MFOfflineTransitionResultFlagStatusChanged extends MFOfflineTransitionResultFlags { } // 1
		interface MFOfflineTransitionResultFlagLoggedOut extends MFOfflineTransitionResultFlags { } // 2
	}

	export interface MFObjectTypeAccess { }
	namespace MFObjectTypeAccess {
		interface MFObjectTypeAccessNone extends MFObjectTypeAccess { } // 0
		interface MFObjectTypeAccessSeeName extends MFObjectTypeAccess { } // 1
		interface MFObjectTypeAccessAddNewItems extends MFObjectTypeAccess { } // 2
	}

	export interface MFObjectAccess { }
	namespace MFObjectAccess {
		interface MFObjectAccessNone extends MFObjectAccess { } // 0
		interface MFObjectAccessRead extends MFObjectAccess { } // 1
		interface MFObjectAccessEdit extends MFObjectAccess { } // 2
		interface MFObjectAccessChangePermissions extends MFObjectAccess { } // 4
		interface MFObjectAccessDelete extends MFObjectAccess { } // 8
		interface MFObjectAccessAttachObjects extends MFObjectAccess { } // 16
	}

	export interface MFPropertyDefAccess { }
	namespace MFPropertyDefAccess {
		interface MFPropertyDefAccessNone extends MFPropertyDefAccess { } // 0
		interface MFPropertyDefAccessSee extends MFPropertyDefAccess { } // 1
		interface MFPropertyDefAccessEdit extends MFPropertyDefAccess { } // 2
	}

	export interface MFValueListSortingType { }
	namespace MFValueListSortingType {
		interface MFValueListSortingTypeByName extends MFValueListSortingType { } // 0
		interface MFValueListSortingTypeByExtID extends MFValueListSortingType { } // 1
	}

	export interface MFAutomaticValueType { }
	namespace MFAutomaticValueType {
		interface MFAutomaticValueTypeNone extends MFAutomaticValueType { } // 0
		interface MFAutomaticValueTypeCalculatedWithPlaceholders extends MFAutomaticValueType { } // 1
		interface MFAutomaticValueTypeCalculatedWithVBScript extends MFAutomaticValueType { } // 2
		interface MFAutomaticValueTypeAutoNumberSimple extends MFAutomaticValueType { } // 3
		interface MFAutomaticValueTypeWithVBScript extends MFAutomaticValueType { } // 4
	}

	export interface MFValidationType { }
	namespace MFValidationType {
		interface MFValidationTypeNone extends MFValidationType { } // 0
		interface MFValidationTypeRegularExpression extends MFValidationType { } // 1
		interface MFValidationTypeVBScript extends MFValidationType { } // 2
	}

	export interface MFFormattingType { }
	namespace MFFormattingType {
		interface MFFormattingTypeNone extends MFFormattingType { } // 0
	}

	export interface MFExternalDBRefreshType { }
	namespace MFExternalDBRefreshType {
		interface MFExternalDBRefreshTypeNone extends MFExternalDBRefreshType { } // 0
		interface MFExternalDBRefreshTypeQuick extends MFExternalDBRefreshType { } // 1
		interface MFExternalDBRefreshTypeFull extends MFExternalDBRefreshType { } // 2
	}

	export interface MFLatestSpecificBehavior { }
	namespace MFLatestSpecificBehavior {
		interface MFLatestSpecificBehaviorNormal extends MFLatestSpecificBehavior { } // 0
		interface MFLatestSpecificBehaviorSpecific extends MFLatestSpecificBehavior { } // 1
		interface MFLatestSpecificBehaviorLatest extends MFLatestSpecificBehavior { } // 2
		interface MFLatestSpecificBehaviorAutomatic extends MFLatestSpecificBehavior { } // 3
	}

	export interface MFBuiltInDocumentClass { }
	namespace MFBuiltInDocumentClass {
		interface MFBuiltInDocumentClassUnclassifiedDocument extends MFBuiltInDocumentClass { } // 0
		interface MFBuiltInDocumentClassOtherDocument extends MFBuiltInDocumentClass { } // 1
	}

	export interface MFBuiltInObjectClass { }
	namespace MFBuiltInObjectClass {
		interface MFBuiltInObjectClassGenericAssignment extends MFBuiltInObjectClass { } // -100
		interface MFBuiltInObjectClassAny extends MFBuiltInObjectClass { } // -3
		interface MFBuiltInObjectClassNotSet extends MFBuiltInObjectClass { } // -2
	}

	export interface MFUserAccountVaultRole { }
	namespace MFUserAccountVaultRole {
		interface MFUserAccountVaultRoleNone extends MFUserAccountVaultRole { } // 0
		interface MFUserAccountVaultRoleFullControl extends MFUserAccountVaultRole { } // 1
		interface MFUserAccountVaultRoleLogIn extends MFUserAccountVaultRole { } // 2
		interface MFUserAccountVaultRoleCreateObjects extends MFUserAccountVaultRole { } // 4
		interface MFUserAccountVaultRoleSeeAllObjects extends MFUserAccountVaultRole { } // 8
		interface MFUserAccountVaultRoleUndeleteObjects extends MFUserAccountVaultRole { } // 16
		interface MFUserAccountVaultRoleDestroyObjects extends MFUserAccountVaultRole { } // 32
		interface MFUserAccountVaultRoleForceUndoCheckout extends MFUserAccountVaultRole { } // 64
		interface MFUserAccountVaultRoleChangeObjectSecurity extends MFUserAccountVaultRole { } // 128
		interface MFUserAccountVaultRoleChangeMetadataStructure extends MFUserAccountVaultRole { } // 256
		interface MFUserAccountVaultRoleManageUserAccounts extends MFUserAccountVaultRole { } // 512
		interface MFUserAccountVaultRoleInternalUser extends MFUserAccountVaultRole { } // 1024
		interface MFUserAccountVaultRoleManageTraditionalFolders extends MFUserAccountVaultRole { } // 2048
		interface MFUserAccountVaultRoleDefaultRoles extends MFUserAccountVaultRole { } // 3078
		interface MFUserAccountVaultRoleDefineTemplates extends MFUserAccountVaultRole { } // 4096
		interface MFUserAccountVaultRoleManageCommonViews extends MFUserAccountVaultRole { } // 8192
		interface MFUserAccountVaultRoleManageWorkflows extends MFUserAccountVaultRole { } // 16384
	}

	export interface MFLoginServerRole { }
	namespace MFLoginServerRole {
		interface MFLoginServerRoleNone extends MFLoginServerRole { } // 0
		interface MFLoginServerRoleSystemAdministrator extends MFLoginServerRole { } // 1
		interface MFLoginServerRoleVaultCreator extends MFLoginServerRole { } // 2
		interface MFLoginServerRoleBackupOperator extends MFLoginServerRole { } // 4
		interface MFLoginServerRoleLogIn extends MFLoginServerRole { } // 8
	}

	export interface MFLoginAccountType { }
	namespace MFLoginAccountType {
		interface MFLoginAccountTypeMFiles extends MFLoginAccountType { } // 1
		interface MFLoginAccountTypeWindows extends MFLoginAccountType { } // 2
	}

	export interface MFLicenseType { }
	namespace MFLicenseType {
		interface MFLicenseTypeNone extends MFLicenseType { } // 0
		interface MFLicenseTypeNamedUserLicense extends MFLicenseType { } // 1
		interface MFLicenseTypeConcurrentUserLicense extends MFLicenseType { } // 2
		interface MFLicenseTypeReadOnlyLicense extends MFLicenseType { } // 3
	}

	export interface MFFileOpenMethod { }
	namespace MFFileOpenMethod {
		interface MFFileOpenMethodShowInShell extends MFFileOpenMethod { } // 0
		interface MFFileOpenMethodOpen extends MFFileOpenMethod { } // 1
		interface MFFileOpenMethodView extends MFFileOpenMethod { } // 2
		interface MFFileOpenMethodEdit extends MFFileOpenMethod { } // 3
	}

	export interface MFilesURLType { }
	namespace MFilesURLType {
		interface MFilesURLTypeShow extends MFilesURLType { } // 0
		interface MFilesURLTypeOpen extends MFilesURLType { } // 1
		interface MFilesURLTypeView extends MFilesURLType { } // 2
		interface MFilesURLTypeEdit extends MFilesURLType { } // 3
		interface MFilesURLTypeShowMetadata extends MFilesURLType { } // 6
	}

	export interface MFSoftwarePlatformType { }
	namespace MFSoftwarePlatformType {
		interface MFSoftwarePlatformTypeWin32 extends MFSoftwarePlatformType { } // 0
		interface MFSoftwarePlatformTypeX64 extends MFSoftwarePlatformType { } // 1
	}

	export interface MFBuiltInValueList { }
	namespace MFBuiltInValueList {
		interface MFBuiltInValueListDocuments extends MFBuiltInValueList { } // 0
		interface MFBuiltInValueListClasses extends MFBuiltInValueList { } // 1
		interface MFBuiltInValueListClassGroups extends MFBuiltInValueList { } // 2
		interface MFBuiltInValueListVersionLabels extends MFBuiltInValueList { } // 3
		interface MFBuiltInValueListTraditionalFolders extends MFBuiltInValueList { } // 4
		interface MFBuiltInValueListExternalLocations extends MFBuiltInValueList { } // 5
		interface MFBuiltInValueListUsers extends MFBuiltInValueList { } // 6
		interface MFBuiltInValueListWorkflows extends MFBuiltInValueList { } // 7
		interface MFBuiltInValueListStates extends MFBuiltInValueList { } // 8
		interface MFBuiltInValueListCollections extends MFBuiltInValueList { } // 9
		interface MFBuiltInValueListAssignments extends MFBuiltInValueList { } // 10
		interface MFBuiltInValueListUserGroups extends MFBuiltInValueList { } // 16
		interface MFBuiltInValueListStateTransitions extends MFBuiltInValueList { } // 17
		interface MFBuiltInValueListSources extends MFBuiltInValueList { } // 18
	}

	export interface MFBuiltInPropertyDef { }
	namespace MFBuiltInPropertyDef {
		interface MFBuiltInPropertyDefNameOrTitle extends MFBuiltInPropertyDef { } // 0,
		interface MFBuiltInPropertyDefCreated extends MFBuiltInPropertyDef { } // 20,
		interface MFBuiltInPropertyDefLastModified extends MFBuiltInPropertyDef { } // 21,
		interface MFBuiltInPropertyDefSingleFileObject extends MFBuiltInPropertyDef { } // 22,
		interface MFBuiltInPropertyDefLastModifiedBy extends MFBuiltInPropertyDef { } // 23,
		interface MFBuiltInPropertyDefStatusChanged extends MFBuiltInPropertyDef { } // 24,
		interface MFBuiltInPropertyDefCreatedBy extends MFBuiltInPropertyDef { } // 25,
		interface MFBuiltInPropertyDefKeywords extends MFBuiltInPropertyDef { } // 26,
		interface MFBuiltInPropertyDefDeleted extends MFBuiltInPropertyDef { } // 27,
		interface MFBuiltInPropertyDefDeletedBy extends MFBuiltInPropertyDef { } // 28,
		interface MFBuiltInPropertyDefVersionLabel extends MFBuiltInPropertyDef { } // 29,
		interface MFBuiltInPropertyDefSizeOnServerThisVersion extends MFBuiltInPropertyDef { } // 30,
		interface MFBuiltInPropertyDefSizeOnServerAllVersions extends MFBuiltInPropertyDef { } // 31,
		interface MFBuiltInPropertyDefMarkedForArchiving extends MFBuiltInPropertyDef { } // 32,
		interface MFBuiltInPropertyDefVersionComment extends MFBuiltInPropertyDef { } // 33,
		interface MFBuiltInPropertyDefTraditionalFolder extends MFBuiltInPropertyDef { } // 34,
		interface MFBuiltInPropertyDefCreatedFromExternalLocation extends MFBuiltInPropertyDef { } // 35,
		interface MFBuiltInPropertyDefAdditionalClasses extends MFBuiltInPropertyDef { } // 36,
		interface MFBuiltInPropertyDefIsTemplate extends MFBuiltInPropertyDef { } // 37,
		interface MFBuiltInPropertyDefWorkflow extends MFBuiltInPropertyDef { } // 38,
		interface MFBuiltInPropertyDefState extends MFBuiltInPropertyDef { } // 39,
		interface MFBuiltInPropertyDefStateEntered extends MFBuiltInPropertyDef { } // 40,
		interface MFBuiltInPropertyDefAssignmentDescription extends MFBuiltInPropertyDef { } // 41,
		interface MFBuiltInPropertyDefDeadline extends MFBuiltInPropertyDef { } // 42,
		interface MFBuiltInPropertyDefMonitoredBy extends MFBuiltInPropertyDef { } // 43,
		interface MFBuiltInPropertyDefAssignedTo extends MFBuiltInPropertyDef { } // 44,
		interface MFBuiltInPropertyDefCompletedBy extends MFBuiltInPropertyDef { } // 45,
		interface MFBuiltInPropertyDefCollectionMemberDocuments extends MFBuiltInPropertyDef { } // 46,
		interface MFBuiltInPropertyDefCollectionMemberCollections extends MFBuiltInPropertyDef { } // 47,
		interface MFBuiltInPropertyDefConstituent extends MFBuiltInPropertyDef { } // 48,
		interface MFBuiltInPropertyDefOriginalPath extends MFBuiltInPropertyDef { } // 75,
		interface MFBuiltInPropertyDefReference extends MFBuiltInPropertyDef { } // 76,
		interface MFBuiltInPropertyDefOriginalPath2 extends MFBuiltInPropertyDef { } // 77,
		interface MFBuiltInPropertyDefOriginalPath3 extends MFBuiltInPropertyDef { } // 78,
		interface MFBuiltInPropertyDefWorkflowAssignment extends MFBuiltInPropertyDef { } // 79,
		interface MFBuiltInPropertyDefAccessedByMe extends MFBuiltInPropertyDef { } // 81,
		interface MFBuiltInPropertyDefFavoriteView extends MFBuiltInPropertyDef { } // 82,
		interface MFBuiltInPropertyDefMessageID extends MFBuiltInPropertyDef { } // 83,
		interface MFBuiltInPropertyDefInReplyTo extends MFBuiltInPropertyDef { } // 84,
		interface MFBuiltInPropertyDefInReplyToReference extends MFBuiltInPropertyDef { } // 85,
		interface MFBuiltInPropertyDefSignatureManifestation extends MFBuiltInPropertyDef { } // 86,
		interface MFBuiltInPropertyDefReportURL extends MFBuiltInPropertyDef { } // 87,
		interface MFBuiltInPropertyDefReportPlacement extends MFBuiltInPropertyDef { } // 88,
		interface MFBuiltInPropertyDefObjectChanged extends MFBuiltInPropertyDef { } // 89,
		interface MFBuiltInPropertyDefACLChanged extends MFBuiltInPropertyDef { } // 90,
		interface MFBuiltInPropertyDefVersionLabelChanged extends MFBuiltInPropertyDef { } // 91,
		interface MFBuiltInPropertyDefVersionCommentChanged extends MFBuiltInPropertyDef { } // 92,
		interface MFBuiltInPropertyDefDeletionStatusChanged extends MFBuiltInPropertyDef { } // 93,
		interface MFBuiltInPropertyDefVaultGUID extends MFBuiltInPropertyDef { } // 94,
		interface MFBuiltInPropertyDefSharedFiles extends MFBuiltInPropertyDef { } // 95,
		interface MFBuiltInPropertyDefConflictResolved extends MFBuiltInPropertyDef { } // 96,
		interface MFBuiltInPropertyDefRejectedBy extends MFBuiltInPropertyDef { } // 97,
		interface MFBuiltInPropertyDefCompleted extends MFBuiltInPropertyDef { } // 98,
		interface MFBuiltInPropertyDefStateTransition extends MFBuiltInPropertyDef { } // 99,
		interface MFBuiltInPropertyDefClass extends MFBuiltInPropertyDef { } // 100,
		interface MFBuiltInPropertyDefClassGroups extends MFBuiltInPropertyDef { } // 101,
		interface MFBuiltInPropertyDefRepository extends MFBuiltInPropertyDef { } // 102,
		interface MFBuiltInPropertyDefLocation extends MFBuiltInPropertyDef { } // 103,
		interface MFBuiltInPropertyDefObjectID extends MFBuiltInPropertyDef { } // -102,
	}

	export interface MFObjectWindowResultCode { }
	namespace MFObjectWindowResultCode {
		interface MFObjectWindowResultCodeOk extends MFObjectWindowResultCode { } // 0
		interface MFObjectWindowResultCodeCancel extends MFObjectWindowResultCode { } // 1
		interface MFObjectWindowResultCodeOkToAll extends MFObjectWindowResultCode { } // 2
		interface MFObjectWindowResultCodeSkipThis extends MFObjectWindowResultCode { } // 3
	}

	export interface MFObjectWindowMode { }
	namespace MFObjectWindowMode {
		interface MFObjectWindowModeInsert extends MFObjectWindowMode { } // 0
		interface MFObjectWindowModeInsertSourceFiles extends MFObjectWindowMode { } // 1
		interface MFObjectWindowModeInsertSaveAsType extends MFObjectWindowMode { } // 2
		interface MFObjectWindowModeEdit extends MFObjectWindowMode { } // 3
		interface MFObjectWindowModeEditApplicationModal extends MFObjectWindowMode { } // 4
	}

	export interface MFUpdateType { }
	namespace MFUpdateType {
		interface MFUpdateTypeNormal extends MFUpdateType { } // 0
		interface MFUpdateTypeServerAuto extends MFUpdateType { } // 1
		interface MFUpdateTypeClientAuto extends MFUpdateType { } // 2
	}

	export interface MFViewType { }
	namespace MFViewType {
		interface MFViewTypeNormal extends MFViewType { } // 0
		interface MFViewTypeFilterOnly extends MFViewType { } // 1
	}

	export interface MFAuthType { }
	namespace MFAuthType {
		interface MFAuthTypeUnknown extends MFAuthType { } // 0
		interface MFAuthTypeLoggedOnWindowsUser extends MFAuthType { } // 1
		interface MFAuthTypeSpecificWindowsUser extends MFAuthType { } // 2
		interface MFAuthTypeSpecificMFilesUser extends MFAuthType { } // 3
	}

	export interface MFBuiltInObjectType { }
	namespace MFBuiltInObjectType {
		interface MFBuiltInObjectTypeDocument extends MFBuiltInObjectType { } // 0
		interface MFBuiltInObjectTypeDocumentCollection extends MFBuiltInObjectType { } // 9
		interface MFBuiltInObjectTypeAssignment extends MFBuiltInObjectType { } // 10
		interface MFBuiltInObjectTypeDocumentOrDocumentCollection extends MFBuiltInObjectType { } // -102
	}

	export interface MFContentType { }
	namespace MFContentType {
		interface MFContentTypeGeneric extends MFContentType { } // 0
		interface MFContentTypeEmailAddress extends MFContentType { } // 1
		interface MFContentTypeURL extends MFContentType { } // 2
		interface MFContentTypeRTF extends MFContentType { } // 3
		interface MFContentTypeHTML extends MFContentType { } // 4
	}

	export interface MFDataType { }
	namespace MFDataType {
		interface MFDatatypeUninitialized extends MFDataType { } // 0
		interface MFDatatypeText extends MFDataType { } // 1
		interface MFDatatypeInteger extends MFDataType { } // 2
		interface MFDatatypeFloating extends MFDataType { } // 3
		interface MFDatatypeDate extends MFDataType { } // 5
		interface MFDatatypeTime extends MFDataType { } // 6
		interface MFDatatypeTimestamp extends MFDataType { } // 7
		interface MFDatatypeBoolean extends MFDataType { } // 8
		interface MFDatatypeLookup extends MFDataType { } // 9
		interface MFDatatypeMultiSelectLookup extends MFDataType { } // 10
		interface MFDatatypeInteger64 extends MFDataType { } // 11
		interface MFDatatypeFILETIME extends MFDataType { } // 12
		interface MFDatatypeMultiLineText extends MFDataType { } // 13
		interface MFDatatypeACL extends MFDataType { } // 14
	}

	export interface MFDependencyRelation { }
	namespace MFDependencyRelation {
		interface MFDependencyRelationNothing extends MFDependencyRelation { } // 0
		interface MFDependencyRelationAutomaticFilling extends MFDependencyRelation { } // 1
		interface MFDependencyRelationFiltering extends MFDependencyRelation { } // 2
	}

	export interface MFExpressionType { }
	namespace MFExpressionType {
		interface MFExpressionTypeUninitialized extends MFExpressionType { } // 0
		interface MFExpressionTypePropertyValue extends MFExpressionType { } // 1
		interface MFExpressionTypeObjectIDSegment extends MFExpressionType { } // 2
		interface MFExpressionTypeStatusValue extends MFExpressionType { } // 3
		interface MFExpressionTypeFileValue extends MFExpressionType { } // 4
		interface MFExpressionTypeTypedValue extends MFExpressionType { } // 5
		interface MFExpressionTypeAnyField extends MFExpressionType { } // 6
		interface MFExpressionTypePermissions extends MFExpressionType { } // 7
	}

	export interface MFDefaultPropertyType { }
	namespace MFDefaultPropertyType {
		interface MFDefaultPropertyTypeUndefined extends MFDefaultPropertyType { } // 0
		interface MFDefaultPropertyTypeFixedValue extends MFDefaultPropertyType { } // 1
		interface MFDefaultPropertyTypeFromHPDSSXML extends MFDefaultPropertyType { } // 2
		interface MFDefaultPropertyTypeFromXML extends MFDefaultPropertyType { } // 3
		interface MFDefaultPropertyTypeFromEmail extends MFDefaultPropertyType { } // 4
		interface MFDefaultPropertyTypeFromEmailHeader extends MFDefaultPropertyType { } // 5
		interface MFDefaultPropertyTypeFromOCR extends MFDefaultPropertyType { } // 6
		interface MFDefaultPropertyTypeFromFile extends MFDefaultPropertyType { } // 7
	}

	export interface MFEmailField { }
	namespace MFEmailField {
		interface MFEmailFieldUndefined extends MFEmailField { } // 0
		interface MFEmailFieldFrom extends MFEmailField { } // 1
		interface MFEmailFieldTo extends MFEmailField { } // 2
		interface MFEmailFieldCc extends MFEmailField { } // 3
		interface MFEmailFieldSubject extends MFEmailField { } // 4
		interface MFEmailFieldBody extends MFEmailField { } // 5
		interface MFEmailFieldDate extends MFEmailField { } // 6
		interface MFEmailFieldImportance extends MFEmailField { } // 7
		interface MFEmailFieldSensitivity extends MFEmailField { } // 8
	}

	export interface MFDataFunction { }
	namespace MFDataFunction {
		interface MFDataFunctionNoOp extends MFDataFunction { } // 0
		interface MFDataFunctionYear extends MFDataFunction { } // 1
		interface MFDataFunctionMonth extends MFDataFunction { } // 2
		interface MFDataFunctionYearAndMonth extends MFDataFunction { } // 3
		interface MFDataFunctionDate extends MFDataFunction { } // 4
		interface MFDataFunctionDaysFrom extends MFDataFunction { } // 5
		interface MFDataFunctionDaysTo extends MFDataFunction { } // 6
		interface MFDataFunctionIntegerSegment extends MFDataFunction { } // 7
		interface MFDataFunctionLeftChars extends MFDataFunction { } // 8
		interface MFDataFunctionInitialCharGroup extends MFDataFunction { } // 9
	}

	export interface MFStatusType { }
	namespace MFStatusType {
		interface MFStatusTypeCheckedOut extends MFStatusType { } // 0
		interface MFStatusTypeCheckedOutTo extends MFStatusType { } // 1
		interface MFStatusTypeCheckedOutAt extends MFStatusType { } // 2
		interface MFStatusTypeObjectID extends MFStatusType { } // 3
		interface MFStatusTypeObjectVersionID extends MFStatusType { } // 4
		interface MFStatusTypeDeleted extends MFStatusType { } // 5
		interface MFStatusTypeObjectTypeID extends MFStatusType { } // 6
		interface MFStatusTypeIsLatestCheckedInVersion extends MFStatusType { } // 7
		interface MFStatusTypeExtID extends MFStatusType { } // 8
		interface MFStatusTypeLatestOrSpecific extends MFStatusType { } // 9
		interface MFStatusTypeObjectTypeAndID extends MFStatusType { } // 10
		interface MFStatusTypeObjectFlags extends MFStatusType { } // 11
		interface MFStatusTypeOriginalVaultGUID extends MFStatusType { } // 12
		interface MFStatusTypeOriginalObjectType extends MFStatusType { } // 13
		interface MFStatusTypeOriginalObjectID extends MFStatusType { } // 14
		interface MFStatusTypeOriginalObjectIDSegment extends MFStatusType { } // 15
	}

	export interface MFFileValueType { }
	namespace MFFileValueType {
		interface MFFileValueTypeHasFiles extends MFFileValueType { } // 0
		interface MFFileValueTypeFileName extends MFFileValueType { } // 1
		interface MFFileValueTypeFileSize extends MFFileValueType { } // 2
		interface MFFileValueTypeFileID extends MFFileValueType { } // 3
		interface MFFileValueTypeCreationTime extends MFFileValueType { } // 4
		interface MFFileValueTypeChangeTime extends MFFileValueType { } // 5
		interface MFFileValueTypeLinkedToExtLoc extends MFFileValueType { } // 6
		interface MFFileValueTypeLinkedToExtLocID extends MFFileValueType { } // 7
	}

	export interface MFPermissionsExpressionType { }
	namespace MFPermissionsExpressionType {
		interface MFACL extends MFPermissionsExpressionType { } // 0
		interface MFVisibleTo extends MFPermissionsExpressionType { } // 1
		interface MFEditableBy extends MFPermissionsExpressionType { } // 2
		interface MFPermissionsChangeableBy extends MFPermissionsExpressionType { } // 3
		interface MFFullControlBy extends MFPermissionsExpressionType { } // 4
		interface MFDeletableBy extends MFPermissionsExpressionType { } // 5
		interface MFObjectsAttachableToThisItemBy extends MFPermissionsExpressionType { } // 6
	}

	export interface MFConditionType { }
	namespace MFConditionType {
		interface MFConditionTypeEqual extends MFConditionType { } // 1
		interface MFConditionTypeNotEqual extends MFConditionType { } // 2
		interface MFConditionTypeGreaterThan extends MFConditionType { } // 3
		interface MFConditionTypeLessThan extends MFConditionType { } // 4
		interface MFConditionTypeGreaterThanOrEqual extends MFConditionType { } // 5
		interface MFConditionTypeLessThanOrEqual extends MFConditionType { } // 6
		interface MFConditionTypeContains extends MFConditionType { } // 7
		interface MFConditionTypeDoesNotContain extends MFConditionType { } // 8
		interface MFConditionTypeStartsWith extends MFConditionType { } // 9
		interface MFConditionTypeDoesNotStartWith extends MFConditionType { } // 10
		interface MFConditionTypeMatchesWildcardPattern extends MFConditionType { } // 11
		interface MFConditionTypeDoesNotMatchWildcardPattern extends MFConditionType { } // 12
		interface MFConditionTypeIsMissing extends MFConditionType { } // 13
		interface MFConditionTypeIsNotMissing extends MFConditionType { } // 14
		interface MFConditionTypeStartsWithAtWordBoundary extends MFConditionType { } // 15
		interface MFConditionTypeContainsAnyBitwise extends MFConditionType { } // 16
		interface MFConditionTypeDoesNotContainAnyBitwise extends MFConditionType { } // 17
	}

	export interface MFParentChildBehavior { }
	namespace MFParentChildBehavior {
		interface MFParentChildBehaviorNone extends MFParentChildBehavior { } // 0
		interface MFParentChildBehaviorIncludeChildValues extends MFParentChildBehavior { } // 1
		interface MFParentChildBehaviorIncludeParentValues extends MFParentChildBehavior { } // 2
	}

	export interface MFSearchFlags { }
	namespace MFSearchFlags {
		interface MFSearchFlagNone extends MFSearchFlags { } // 0
		interface MFSearchFlagLookInAllVersions extends MFSearchFlags { } // 1
		interface MFSearchFlagReturnLatestVisibleVersion extends MFSearchFlags { } // 2
		interface MFSearchFlagLookAllObjectTypes extends MFSearchFlags { } // 4
		interface MFSearchFlagDisableRelevancyRanking extends MFSearchFlags { } // 16
		interface MFSearchFlagIncludeUnmanagedObjects extends MFSearchFlags { } // 64
		interface MFSearchFlagResultsFromEachRepository extends MFSearchFlags { } // 128
	}

	export interface MFFullTextSearchFlags { }
	namespace MFFullTextSearchFlags {
		interface MFFullTextSearchFlagsNone extends MFFullTextSearchFlags { } // 0
		interface MFFullTextSearchFlagsStemming extends MFFullTextSearchFlags { } // 4
		interface MFFullTextSearchFlagsTypeAllWords extends MFFullTextSearchFlags { } // 131072
		interface MFFullTextSearchFlagsTypeAnyWords extends MFFullTextSearchFlags { } // 262144
		interface MFFullTextSearchFlagsLookInMetaData extends MFFullTextSearchFlags { } // 268435456
		interface MFFullTextSearchFlagsLookInFileData extends MFFullTextSearchFlags { } // 536870912
	}

	export interface MFRelationshipsMode { }
	namespace MFRelationshipsMode {
		interface MFRelationshipsModeFromThisObject extends MFRelationshipsMode { } // 1
		interface MFRelationshipsModeToThisObject extends MFRelationshipsMode { } // 2
		interface MFRelationshipsModeAll extends MFRelationshipsMode { } // 3
	}

	export interface MFProductMode { }
	namespace MFProductMode {
		interface MFProductModeFull extends MFProductMode { } // 0
		interface MFProductModeExpress extends MFProductMode { } // 1
		interface MFProductModeBusiness extends MFProductMode { } // 2
	}

	export interface MFBackupType { }
	namespace MFBackupType {
		interface MFBackupTypeFull extends MFBackupType { } // 0
		interface MFBackupTypeDifferential extends MFBackupType { } // 1
	}

	export interface MFImpersonationType { }
	namespace MFImpersonationType {
		interface MFImpersonationTypeLocalSystem extends MFImpersonationType { } // 0
		interface MFImpersonationTypeSpecificAccount extends MFImpersonationType { } // 1
		interface MFImpersonationTypeExtAccount extends MFImpersonationType { } // 2
	}

	export interface MFPermission { }
	namespace MFPermission {
		interface MFPermissionDeny extends MFPermission { } // 0
		interface MFPermissionAllow extends MFPermission { } // 1
		interface MFPermissionNotSet extends MFPermission { } // 2
	}

	export interface MFFolderDefType { }
	namespace MFFolderDefType {
		interface MFFolderDefTypeUnknown extends MFFolderDefType { } // 0
		interface MFFolderDefTypeAnyFolder extends MFFolderDefType { } // 1
		interface MFFolderDefTypeViewFolder extends MFFolderDefType { } // 2
		interface MFFolderDefTypePropertyFolder extends MFFolderDefType { } // 3
		interface MFFolderDefTypeTraditionalFolder extends MFFolderDefType { } // 4
		interface MFFolderDefTypeSearchFolder extends MFFolderDefType { } // 5
		interface MFFolderDefTypeExterViewFolder extends MFFolderDefType { } // 6
	}

	export interface MFFolderContentItemType { }
	namespace MFFolderContentItemType {
		interface MFFolderContentItemTypeUnknown extends MFFolderContentItemType { } // 0
		interface MFFolderContentItemTypeViewFolder extends MFFolderContentItemType { } // 1
		interface MFFolderContentItemTypePropertyFolder extends MFFolderContentItemType { } // 2
		interface MFFolderContentItemTypeTraditionalFolder extends MFFolderContentItemType { } // 3
		interface MFFolderContentItemTypeObjectVersion extends MFFolderContentItemType { } // 4
		interface MFFolderContentItemTypeExternalViewFolder extends MFFolderContentItemType { } // 5
	}

	export interface MFUserOrUserGroupType { }
	namespace MFUserOrUserGroupType {
		interface MFUserOrUserGroupTypeUnknown extends MFUserOrUserGroupType { } // 0
		interface MFUserOrUserGroupTypeUserAccount extends MFUserOrUserGroupType { } // 1
		interface MFUserOrUserGroupTypeUserGroup extends MFUserOrUserGroupType { } // 2
		interface MFUserOrUserGroupTypePseudoUser extends MFUserOrUserGroupType { } // 3
		interface MFUserOrUserGroupTypePropertyBasedPseudoUser extends MFUserOrUserGroupType { } // 4
	}

	export interface MFOCRZoneRecognitionMode { }
	namespace MFOCRZoneRecognitionMode {
		interface MFOCRZoneRecognitionModeNoZoneRecognition extends MFOCRZoneRecognitionMode { } // 0
		interface MFOCRZoneRecognitionModeRecognizeSpecifiedZones extends MFOCRZoneRecognitionMode { } // 1
		interface MFOCRZoneRecognitionModeAutoDetectZones extends MFOCRZoneRecognitionMode { } // 2
	}

	export interface MFOCRDimensionUnit { }
	namespace MFOCRDimensionUnit {
		interface MFOCRDimensionUnitPixel extends MFOCRDimensionUnit { } // 0
		interface MFOCRDimensionUnitMillimeterX10 extends MFOCRDimensionUnit { } // 1
		interface MFOCRDimensionUnitInchX100 extends MFOCRDimensionUnit { } // 2
	}

	export interface MFAutoStateTransitionMode { }
	namespace MFAutoStateTransitionMode {
		interface MFASTModeNone extends MFAutoStateTransitionMode { } // 0
		interface MFASTModeRelativeTime extends MFAutoStateTransitionMode { } // 1
		interface MFASTModeAssignmentCompleteOne extends MFAutoStateTransitionMode { } // 2
		interface MFASTModeAssignmentCompleteAll extends MFAutoStateTransitionMode { } // 3
		interface MFASTModeCriteriaFulfilled extends MFAutoStateTransitionMode { } // 4
		interface MFASTModeAllowedByScript extends MFAutoStateTransitionMode { } // 5
		interface MFASTMModeAssignmentComplete extends MFAutoStateTransitionMode { } // 6
		interface MFASTModeAssignmentRejected extends MFAutoStateTransitionMode { } // 7
	}

	export interface MFOCRLanguage { }
	namespace MFOCRLanguage {
		interface MFOCRLanguageNone extends MFOCRLanguage { } // 0
		interface MFOCRLanguageNeutral extends MFOCRLanguage { } // 1
		interface MFOCRLanguageNumbersOnly extends MFOCRLanguage { } // 2
		interface MFOCRLanguageEnglishUS extends MFOCRLanguage { } // 3
		interface MFOCRLanguageEnglishBr extends MFOCRLanguage { } // 4
		interface MFOCRLanguageGerman extends MFOCRLanguage { } // 5
		interface MFOCRLanguageFrench extends MFOCRLanguage { } // 6
		interface MFOCRLanguageSpanish extends MFOCRLanguage { } // 7
		interface MFOCRLanguageItalian extends MFOCRLanguage { } // 8
		interface MFOCRLanguageFinnish extends MFOCRLanguage { } // 9
		interface MFOCRLanguageSwedish extends MFOCRLanguage { } // 10
		interface MFOCRLanguageDanish extends MFOCRLanguage { } // 11
		interface MFOCRLanguageNorwegian extends MFOCRLanguage { } // 12
		interface MFOCRLanguageNynorsk extends MFOCRLanguage { } // 13
		interface MFOCRLanguageEstonian extends MFOCRLanguage { } // 14
		interface MFOCRLanguageLatvian extends MFOCRLanguage { } // 15
		interface MFOCRLanguageLithuanian extends MFOCRLanguage { } // 16
		interface MFOCRLanguageDutch extends MFOCRLanguage { } // 17
		interface MFOCRLanguagePortuguese extends MFOCRLanguage { } // 18
		interface MFOCRLanguageBrazilian extends MFOCRLanguage { } // 19
		interface MFOCRLanguageGalician extends MFOCRLanguage { } // 20
		interface MFOCRLanguageIcelandic extends MFOCRLanguage { } // 21
		interface MFOCRLanguageGreek extends MFOCRLanguage { } // 22
		interface MFOCRLanguageCzech extends MFOCRLanguage { } // 23
		interface MFOCRLanguageHungarian extends MFOCRLanguage { } // 24
		interface MFOCRLanguagePolish extends MFOCRLanguage { } // 25
		interface MFOCRLanguageRomanian extends MFOCRLanguage { } // 26
		interface MFOCRLanguageSlovak extends MFOCRLanguage { } // 27
		interface MFOCRLanguageCroatian extends MFOCRLanguage { } // 28
		interface MFOCRLanguageSerbian extends MFOCRLanguage { } // 29
		interface MFOCRLanguageSlovenian extends MFOCRLanguage { } // 30
		interface MFOCRLanguageLuxembourgish extends MFOCRLanguage { } // 31
		interface MFOCRLanguageSwissGerman extends MFOCRLanguage { } // 32
		interface MFOCRLanguageTurkish extends MFOCRLanguage { } // 33
		interface MFOCRLanguageRussian extends MFOCRLanguage { } // 34
		interface MFOCRLanguageByeloRussian extends MFOCRLanguage { } // 35
		interface MFOCRLanguageUkrainian extends MFOCRLanguage { } // 36
		interface MFOCRLanguageMacedonian extends MFOCRLanguage { } // 37
		interface MFOCRLanguageBulgarian extends MFOCRLanguage { } // 38
		interface MFOCRLanguageAfrikaans extends MFOCRLanguage { } // 39
		interface MFOCRLanguageAlbanian extends MFOCRLanguage { } // 40
		interface MFOCRLanguageCatalan extends MFOCRLanguage { } // 41
		interface MFOCRLanguageIrishGaelic extends MFOCRLanguage { } // 42
		interface MFOCRLanguageScottishGaelic extends MFOCRLanguage { } // 43
		interface MFOCRLanguageWelsh extends MFOCRLanguage { } // 44
		interface MFOCRLanguageBasque extends MFOCRLanguage { } // 45
		interface MFOCRLanguageMexican extends MFOCRLanguage { } // 46
	}

	export interface MFDBEngine { }
	namespace MFDBEngine {
		interface MFDBEngineNone extends MFDBEngine { } // 0
		interface MFDBEngineFirebird extends MFDBEngine { } // 1
		interface MFDBEngineMSSQLServer extends MFDBEngine { } // 2
	}

	export interface MFVaultAccess { }
	namespace MFVaultAccess {
		interface MFVaultAccessNone extends MFVaultAccess { } // 0
		interface MFVaultAccessCreateDocs extends MFVaultAccess { } // 1
		interface MFVaultAccessSeeAllDocs extends MFVaultAccess { } // 2
		interface MFVaultAccessUndeleteDocs extends MFVaultAccess { } // 4
		interface MFVaultAccessDestroyDocs extends MFVaultAccess { } // 8
		interface MFVaultAccessForceUndoCheckout extends MFVaultAccess { } // 16
		interface MFVaultAccessChangeDocSecurity extends MFVaultAccess { } // 32
		interface MFVaultAccessChangeMetaDataStructure extends MFVaultAccess { } // 64
		interface MFVaultAccessManageUserAccounts extends MFVaultAccess { } // 128
		interface MFVaultAccessChangeFullControlRole extends MFVaultAccess { } // 256
		interface MFVaultAccessVerifyVault extends MFVaultAccess { } // 1024
		interface MFVaultAccessEditAllDocs extends MFVaultAccess { } // 2048
		interface MFVaultAccessExportContent extends MFVaultAccess { } // 8192
		interface MFVaultAccessImportContent extends MFVaultAccess { } // 16384
		interface MFVaultAccessManageVLItemsFromClient extends MFVaultAccess { } // 65536
		interface MFVaultAccessManageExternalLocations extends MFVaultAccess { } // 131072
		interface MFVaultAccessLicenseAllowsModifications extends MFVaultAccess { } // 262144
		interface MFVaultAccessManageEvents extends MFVaultAccess { } // 524288
		interface MFVaultAccessManageTraditionalFolders extends MFVaultAccess { } // 1048576
		interface MFVaultAccessChangeObjectStates extends MFVaultAccess { } // 4194304
		interface MFVaultAccessChangeAssignments extends MFVaultAccess { } // 8388608
		interface MFVaultAccessManageCommonViews extends MFVaultAccess { } // 16777216
		interface MFVaultAccessManageCommonUISettings extends MFVaultAccess { } // 33554432
		interface MFVaultAccessManageCommonNotificationRules extends MFVaultAccess { } // 134217728
		interface MFVaultAccessSeeDeletedDocs extends MFVaultAccess { } // 268435456
		interface MFVaultAccessMaterializeViews extends MFVaultAccess { } // 536870912
	}

	export interface MFNamedValueType { }
	namespace MFNamedValueType {
		interface MFConfigurationValue extends MFNamedValueType { } // 3
		interface MFUserDefinedValue extends MFNamedValueType { } // 4
		interface MFRegistryValue extends MFNamedValueType { } // 5
		interface MFFolderConfiguration extends MFNamedValueType { } // 6
		interface MFAdminConfiguration extends MFNamedValueType { } // 7
		interface MFSystemAdminConfiguration extends MFNamedValueType { } // 8
		interface MFPrivateUserDefinedValue extends MFNamedValueType { } // 9
	}

	export interface MFViewFlag { }
	namespace MFViewFlag {
		interface MFViewFlagsNone extends MFViewFlag { } // 0
		interface MFViewFlagMaterialized extends MFViewFlag { } // 1
		interface MFViewFlagIncompatibleWithFullTextSearch extends MFViewFlag { } // 2
	}

	export interface MFExpressionExFlag { }
	namespace MFExpressionExFlag {
		interface MFExpressionExFlagNone extends MFExpressionExFlag { } // 0
		interface MFExpressionExIgnoreAclsForSubfoldersListing extends MFExpressionExFlag { } // 1
		interface MFExpressionExIncompatibleWithFullTextSearch extends MFExpressionExFlag { } // 2
	}

	export interface MFObjectVersionFlag { }
	namespace MFObjectVersionFlag {
		interface MFObjectVersionFlagNone extends MFObjectVersionFlag { } // 0
		interface MFObjectVersionFlagCompleted extends MFObjectVersionFlag { } // 1
		interface MFObjectVersionFlagHasRelatedObjects extends MFObjectVersionFlag { } // 2
	}

	export interface MFPredefinedSearchFilterType { }
	namespace MFPredefinedSearchFilterType {
		interface MFPredefinedSearchFilterTypeUnspecified extends MFPredefinedSearchFilterType { } // 0
		interface MFPredefinedSearchFilterTypeObjectType extends MFPredefinedSearchFilterType { } // 1
		interface MFPredefinedSearchFilterTypeDocumentsModifiedToday extends MFPredefinedSearchFilterType { } // 30000
		interface MFPredefinedSearchFilterTypeDocumentsModifiedLastWeek extends MFPredefinedSearchFilterType { } // 30001
		interface MFPredefinedSearchFilterTypeDocumentsModifiedLastMonth extends MFPredefinedSearchFilterType { } // 30002
		interface MFPredefinedSearchFilterTypeDocumentsModifiedLastYear extends MFPredefinedSearchFilterType { } // 30003
		interface MFPredefinedSearchFilterTypeDocumentsAccessedByMeToday extends MFPredefinedSearchFilterType { } // 30004
		interface MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastWeek extends MFPredefinedSearchFilterType { } // 30005
		interface MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastMonth extends MFPredefinedSearchFilterType { } // 30006
		interface MFPredefinedSearchFilterTypeDocumentsAccessedByMeLastYear extends MFPredefinedSearchFilterType { } // 30007
	}

	export interface MFTriggerType { }
	namespace MFTriggerType {
		interface MFTriggerTypeOnce extends MFTriggerType { } // 0
		interface MFTriggerTypeDaily extends MFTriggerType { } // 1
		interface MFTriggerTypeWeekly extends MFTriggerType { } // 2
		interface MFTriggerTypeMonthlyDate extends MFTriggerType { } // 3
		interface MFTriggerTypeMonthlyDOW extends MFTriggerType { } // 4
	}

	export interface MFTriggerWeekDay { }
	namespace MFTriggerWeekDay {
		interface MFTriggerWeekDaySunday extends MFTriggerWeekDay { } // 1
		interface MFTriggerWeekDayMonday extends MFTriggerWeekDay { } // 2
		interface MFTriggerWeekDayTuesday extends MFTriggerWeekDay { } // 4
		interface MFTriggerWeekDayWednesday extends MFTriggerWeekDay { } // 8
		interface MFTriggerWeekDayThursday extends MFTriggerWeekDay { } // 16
		interface MFTriggerWeekDayFriday extends MFTriggerWeekDay { } // 32
		interface MFTriggerWeekDaySaturday extends MFTriggerWeekDay { } // 64
		interface MFTriggerWeekDayEveryDay extends MFTriggerWeekDay { } // 125
	}

	export interface MFTriggerMonth { }
	namespace MFTriggerMonth {
		interface MFTriggerMonthJanuary extends MFTriggerMonth { } // 1
		interface MFTriggerMonthFebruary extends MFTriggerMonth { } // 2
		interface MFTriggerMonthMarch extends MFTriggerMonth { } // 4
		interface MFTriggerMonthApril extends MFTriggerMonth { } // 8
		interface MFTriggerMonthMay extends MFTriggerMonth { } // 16
		interface MFTriggerMonthJune extends MFTriggerMonth { } // 32
		interface MFTriggerMonthJuly extends MFTriggerMonth { } // 64
		interface MFTriggerMonthAugust extends MFTriggerMonth { } // 128
		interface MFTriggerMonthSeptember extends MFTriggerMonth { } // 256
		interface MFTriggerMonthOctober extends MFTriggerMonth { } // 512
		interface MFTriggerMonthNovember extends MFTriggerMonth { } // 1024
		interface MFTriggerMonthDecember extends MFTriggerMonth { } // 2048
		interface MFTriggerMonthEveryMonth extends MFTriggerMonth { } // 4095
	}

	export interface MFTriggerWeekOfMonth { }
	namespace MFTriggerWeekOfMonth {
		interface MFTriggerWeekOfMonthFirstWeek extends MFTriggerWeekOfMonth { } // 1
		interface MFTriggerWeekOfMonthSecondWeek extends MFTriggerWeekOfMonth { } // 2
		interface MFTriggerWeekOfMonthThirdWeek extends MFTriggerWeekOfMonth { } // 3
		interface MFTriggerWeekOfMonthFourthWeek extends MFTriggerWeekOfMonth { } // 4
		interface MFTriggerWeekOfMonthLastWeek extends MFTriggerWeekOfMonth { } // 5
	}

	export interface MFACLMode { }
	namespace MFACLMode {
		interface MFACLModeSimple extends MFACLMode { } // 0
		interface MFACLModeAutomaticPermissionsWithComponents extends MFACLMode { } // 1
	}

	export interface MFACLEnforcingMode { }
	namespace MFACLEnforcingMode {
		interface MFACLEnforcingModeAutomatic extends MFACLEnforcingMode { } // 0
		interface MFACLEnforcingModeProvided extends MFACLEnforcingMode { } // 1
		interface MFACLEnforcingModeResetToDefault extends MFACLEnforcingMode { } // 2
		interface MFACLEnforcingModeNone extends MFACLEnforcingMode { } // 3
	}

	export interface MFACLComponentOverrideAccess { }
	namespace MFACLComponentOverrideAccess {
		interface MFACLComponentOverrideAccessNone extends MFACLComponentOverrideAccess { } // 0
		interface MFACLComponentOverrideAccessGranted extends MFACLComponentOverrideAccess { } // 1
	}

	export interface MFNamedACLType { }
	namespace MFNamedACLType {
		interface MFNamedACLTypeNone extends MFNamedACLType { } // 0
		interface MFNamedACLTypeNormal extends MFNamedACLType { } // 1
		interface MFNamedACLTypeInternal extends MFNamedACLType { } // 2
	}

	export interface MFIndirectPropertyIDLevelType { }
	namespace MFIndirectPropertyIDLevelType {
		interface MFIndirectPropertyIDLevelTypePropertyDef extends MFIndirectPropertyIDLevelType { } // 0
		interface MFIndirectPropertyIDLevelTypeObjectType extends MFIndirectPropertyIDLevelType { } // 1
		interface MFIndirectPropertyIDLevelTypeStateChanger extends MFIndirectPropertyIDLevelType { } // 2
	}

	export interface MFEventHandlerType { }
	namespace MFEventHandlerType {
		interface MFEventHandlerTypeUndefined extends MFEventHandlerType { } // 0
		interface MFEventHandlerBeforeSetProperties extends MFEventHandlerType { } // 1
		interface MFEventHandlerAfterSetProperties extends MFEventHandlerType { } // 2
		interface MFEventHandlerAfterCreateNewObjectFinalize extends MFEventHandlerType { } // 3
		interface MFEventHandlerBeforeCheckInChanges extends MFEventHandlerType { } // 4
		interface MFEventHandlerAfterCheckInChanges extends MFEventHandlerType { } // 5
		interface MFEventHandlerBeforeCheckOut extends MFEventHandlerType { } // 6
		interface MFEventHandlerAfterCheckOut extends MFEventHandlerType { } // 7
		interface MFEventHandlerBeforeCancelCheckout extends MFEventHandlerType { } // 8
		interface MFEventHandlerAfterCancelCheckout extends MFEventHandlerType { } // 9
		interface MFEventHandlerBeforeDeleteObject extends MFEventHandlerType { } // 10
		interface MFEventHandlerAfterDeleteObject extends MFEventHandlerType { } // 11
		interface MFEventHandlerBeforeDestroyObject extends MFEventHandlerType { } // 12
		interface MFEventHandlerAfterDestroyObject extends MFEventHandlerType { } // 13
		interface MFEventHandlerBeforeSetObjectPermissions extends MFEventHandlerType { } // 14
		interface MFEventHandlerAfterSetObjectPermissions extends MFEventHandlerType { } // 15
		interface MFEventHandlerBeforeFileUpload extends MFEventHandlerType { } // 16
		interface MFEventHandlerAfterFileUpload extends MFEventHandlerType { } // 17
		interface MFEventHandlerBeforeFileDownload extends MFEventHandlerType { } // 18
		interface MFEventHandlerAfterFileDownload extends MFEventHandlerType { } // 19
		interface MFEventHandlerBeforeCreateNewValueListItem extends MFEventHandlerType { } // 20
		interface MFEventHandlerAfterCreateNewValueListItem extends MFEventHandlerType { } // 21
		interface MFEventHandlerBeforeLoginToVault extends MFEventHandlerType { } // 22
		interface MFEventHandlerAfterLoginToVault extends MFEventHandlerType { } // 23
		interface MFEventHandlerBeforeLogoutFromVault extends MFEventHandlerType { } // 24
		interface MFEventHandlerAfterLogoutFromVault extends MFEventHandlerType { } // 25
		interface MFEventHandlerBeforeRunScheduledJob extends MFEventHandlerType { } // 26
		interface MFEventHandlerAfterRunScheduledJob extends MFEventHandlerType { } // 27
		interface MFEventHandlerBeforeCreateNewObjectFinalize extends MFEventHandlerType { } // 28
		interface MFEventHandlerBeforeCancelCreateObject extends MFEventHandlerType { } // 29
		interface MFEventHandlerAfterCancelCreateObject extends MFEventHandlerType { } // 30
		interface MFEventHandlerBeforeDestroyObjectVersion extends MFEventHandlerType { } // 31
		interface MFEventHandlerAfterDestroyObjectVersion extends MFEventHandlerType { } // 32
		interface MFEventHandlerReplication_AfterCreateNewObjectFinalize extends MFEventHandlerType { } // 33
		interface MFEventHandlerReplication_AfterCheckInChanges extends MFEventHandlerType { } // 34
		interface MFEventHandlerVaultExtensionMethod extends MFEventHandlerType { } // 35
		interface MFEventHandlerBeforeCreateLoginAccount extends MFEventHandlerType { } // 36
		interface MFEventHandlerAfterCreateLoginAccount extends MFEventHandlerType { } // 37
		interface MFEventHandlerBeforeModifyLoginAccount extends MFEventHandlerType { } // 38
		interface MFEventHandlerAfterModifyLoginAccount extends MFEventHandlerType { } // 39
		interface MFEventHandlerBeforeRemoveLoginAccount extends MFEventHandlerType { } // 40
		interface MFEventHandlerAfterRemoveLoginAccount extends MFEventHandlerType { } // 41
		interface MFEventHandlerBeforeCreateUserAccount extends MFEventHandlerType { } // 42
		interface MFEventHandlerAfterCreateUserAccount extends MFEventHandlerType { } // 43
		interface MFEventHandlerBeforeModifyUserAccount extends MFEventHandlerType { } // 44
		interface MFEventHandlerAfterModifyUserAccount extends MFEventHandlerType { } // 45
		interface MFEventHandlerBeforeRemoveUserAccount extends MFEventHandlerType { } // 46
		interface MFEventHandlerAfterRemoveUserAccount extends MFEventHandlerType { } // 47
		interface MFEventHandlerBeforeCreateUserGroup extends MFEventHandlerType { } // 48
		interface MFEventHandlerAfterCreateUserGroup extends MFEventHandlerType { } // 49
		interface MFEventHandlerBeforeModifyUserGroup extends MFEventHandlerType { } // 50
		interface MFEventHandlerAfterModifyUserGroup extends MFEventHandlerType { } // 51
		interface MFEventHandlerBeforeRemoveUserGroup extends MFEventHandlerType { } // 52
		interface MFEventHandlerAfterRemoveUserGroup extends MFEventHandlerType { } // 53
		interface MFEventHandlerAfterBringOnline extends MFEventHandlerType { } // 54
		interface MFEventHandlerBeforeTakeOffline extends MFEventHandlerType { } // 55
		interface MFEventHandlerAfterCheckInChangesFinalize extends MFEventHandlerType { } // 56
		interface MFEventHandlerAfterBeginTransaction extends MFEventHandlerType { } // 57
		interface MFEventHandlerBeforeCommitTransaction extends MFEventHandlerType { } // 58
		interface MFEventHandlerBeforeRollbackTransaction extends MFEventHandlerType { } // 59
		interface MFEventHandlerAfterCancelCheckoutFinalize extends MFEventHandlerType { } // 60
		interface MFEventHandlerBeforeUndeleteObject extends MFEventHandlerType { } // 61
		interface MFEventHandlerAfterUndeleteObject extends MFEventHandlerType { } // 62
		interface MFEventHandlerAfterUndeleteObjectFinalize extends MFEventHandlerType { } // 63
		interface MFEventHandlerBeforeModifyMFilesCredentials extends MFEventHandlerType { } // 64
		interface MFEventHandlerAfterModifyMFilesCredentials extends MFEventHandlerType { } // 65
		interface MFEventHandlerBeforeReturnView extends MFEventHandlerType { } // 66
		interface MFEventHandlerBeforeCheckInChangesFinalize extends MFEventHandlerType { } // 67
		interface MFEventHandlerBeforeCreateView extends MFEventHandlerType { } // 68
		interface MFEventHandlerAfterCreateView extends MFEventHandlerType { } // 69
		interface MFEventHandlerBeforeModifyView extends MFEventHandlerType { } // 70
		interface MFEventHandlerAfterModifyView extends MFEventHandlerType { } // 71
		interface MFEventHandlerBeforeDeleteView extends MFEventHandlerType { } // 72
		interface MFEventHandlerAfterDeleteView extends MFEventHandlerType { } // 73
	}

	export interface MFAutomaticPermissionsOperationOptions { }
	namespace MFAutomaticPermissionsOperationOptions {
		interface MFAutomaticPermissionsOperationOptionsNone extends MFAutomaticPermissionsOperationOptions { } // 0
		interface MFAutomaticPermissionsOperationOptionsForceActive extends MFAutomaticPermissionsOperationOptions { } // 1
	}

	export interface MFObjectOperationFlags { }
	namespace MFObjectOperationFlags {
		interface MFObjectOperationFlagNone extends MFObjectOperationFlags { } // 0
		interface MFObjectOperationFlagRequireReadAccess extends MFObjectOperationFlags { } // 1
		interface MFObjectOperationFlagRequireEditAccess extends MFObjectOperationFlags { } // 2
		interface MFObjectOperationFlagDisallowNameChange extends MFObjectOperationFlags { } // 4
		interface MFObjectOperationFlagRequireChangeSecurityAccess extends MFObjectOperationFlags { } // 8
		interface MFObjectOperationFlagRequireFullAccess extends MFObjectOperationFlags { } // 16
		interface MFObjectOperationFlagChangeACLInAllVersions extends MFObjectOperationFlags { } // 32
		interface MFObjectOperationFlagRequireSomeAccess extends MFObjectOperationFlags { } // 64
	}

	export interface MFFileDataStorage { }
	namespace MFFileDataStorage {
		interface MFFileDataStorageDefault extends MFFileDataStorage { } // 0
		interface MFFileDataStorageDisk extends MFFileDataStorage { } // 1
		interface MFFileDataStorageDB extends MFFileDataStorage { } // 2
		interface MFFileDataStorageExternal extends MFFileDataStorage { } // 3
	}

	export interface MFMetadataSyncFormat { }
	namespace MFMetadataSyncFormat {
		interface MFMetadataSyncFormatWord extends MFMetadataSyncFormat { } // 0
		interface MFMetadataSyncFormatExcel extends MFMetadataSyncFormat { } // 1
		interface MFMetadataSyncFormatPowerPoint extends MFMetadataSyncFormat { } // 2
	}

	export interface MFExportContentFlag { }
	namespace MFExportContentFlag {
		interface MFExportContentFlagNone extends MFExportContentFlag { } // 0
		interface MFExportContentFlagLatestVersionsOnly extends MFExportContentFlag { } // 2
		interface MFExportContentFlagDestroyAfterExport extends MFExportContentFlag { } // 4
		interface MFExportContentFlagClearArchivalMarker extends MFExportContentFlag { } // 8
		interface MFExportContentFlagSaveFilesAlsoAsPDFA extends MFExportContentFlag { } // 32
		interface MFExportContentFlagExportInformationOnDestroyedData extends MFExportContentFlag { } // 64
		interface MFExportContentFlagUseMultipleContentPackages extends MFExportContentFlag { } // 128
		interface MFExportContentFlagIndicateDropouts extends MFExportContentFlag { } // 1024
	}

	export interface MFImportContentFlag { }
	namespace MFImportContentFlag {
		interface MFImportContentFlagNone extends MFImportContentFlag { } // 0
		interface MFImportContentFlagUseMultipleContentPackages extends MFImportContentFlag { } // 1
		interface MFImportContentFlagDeleteContentPackage extends MFImportContentFlag { } // 4
		interface MFImportContentFlagImportCheckoutStates extends MFImportContentFlag { } // 16
		interface MFImportContentFlagResetExportTimestamps extends MFImportContentFlag { } // 32
		interface MFImportContentFlagDoNotImportObjectDestructions extends MFImportContentFlag { } // 64
		interface MFImportContentFlagUseNamesAsAliases extends MFImportContentFlag { } // 128
		interface MFImportContentFlagForceNoStructureIdUpdate extends MFImportContentFlag { } // 16384
		interface MFImportContentFlagOmitDoneFile extends MFImportContentFlag { } // 32768
	}

	export interface MFSpecialObjectFlag { }
	namespace MFSpecialObjectFlag {
		interface MFSpecialObjectFlagNone extends MFSpecialObjectFlag { } // 0
		interface MFSpecialObjectFlagShortcut extends MFSpecialObjectFlag { } // 1
		interface MFSpecialObjectFlagDeleted extends MFSpecialObjectFlag { } // 2
		interface MFSpecialObjectFlagRecentlyAccessedByValid extends MFSpecialObjectFlag { } // 4
		interface MFSpecialObjectFlagHasSharedFiles extends MFSpecialObjectFlag { } // 8
		interface MFSpecialObjectFlagConflict extends MFSpecialObjectFlag { } // 16
		interface MFSpecialObjectFlagNormal extends MFSpecialObjectFlag { } // 64
		interface MFSpecialObjectFlagFolder extends MFSpecialObjectFlag { } // 128
		interface MFSpecialObjectFlagHasExternalData extends MFSpecialObjectFlag { } // 256
		interface MFSpecialObjectFlagUnmanagedReference extends MFSpecialObjectFlag { } // 512
	}

	export interface MFMetadataStructureItem { }
	namespace MFMetadataStructureItem {
		interface MFMetadataStructureItemNone extends MFMetadataStructureItem { } // 0
		interface MFMetadataStructureItemObjectType extends MFMetadataStructureItem { } // 1
		interface MFMetadataStructureItemPropertyDef extends MFMetadataStructureItem { } // 2
		interface MFMetadataStructureItemClass extends MFMetadataStructureItem { } // 3
		interface MFMetadataStructureItemWorkflow extends MFMetadataStructureItem { } // 4
		interface MFMetadataStructureItemState extends MFMetadataStructureItem { } // 5
		interface MFMetadataStructureItemNamedACL extends MFMetadataStructureItem { } // 6
		interface MFMetadataStructureItemUser extends MFMetadataStructureItem { } // 7
		interface MFMetadataStructureItemUserGroup extends MFMetadataStructureItem { } // 8
		interface MFMetadataStructureItemClassGroup extends MFMetadataStructureItem { } // 9
		interface MFMetadataStructureItemViewDef extends MFMetadataStructureItem { } // 10
		interface MFMetadataStructureItemValueListItem extends MFMetadataStructureItem { } // 13
		interface MFMetadataStructureItemValueList extends MFMetadataStructureItem { } // 14
		interface MFMetadataStructureItemVaultEventHandler extends MFMetadataStructureItem { } // 15
		interface MFMetadataStructureItemStateTransition extends MFMetadataStructureItem { } // 16
		interface MFMetadataStructureItemAll extends MFMetadataStructureItem { } // 10000
	}

	export interface MFBuiltInUserGroup { }
	namespace MFBuiltInUserGroup {
		interface MFBuiltInUserGroupAllInternalUsers extends MFBuiltInUserGroup { } // 1
		interface MFBuiltInUserGroupAllInternalAndExternalUsers extends MFBuiltInUserGroup { } // 2
	}

	export interface MFBuiltInMetadataStructureItemID { }
	namespace MFBuiltInMetadataStructureItemID {
		interface MFBuiltInMetadataStructureItemIDAll extends MFBuiltInMetadataStructureItemID { } // -1000000
	}

	export interface MFCustomApplicationType { }
	namespace MFCustomApplicationType {
		interface MFCustomApplicationTypeUnspecified extends MFCustomApplicationType { } // 0
		interface MFCustomApplicationTypeClient extends MFCustomApplicationType { } // 1
		interface MFCustomApplicationTypeServer extends MFCustomApplicationType { } // 2
	}

	export interface MFMetadataStructureSelectorFlags { }
	namespace MFMetadataStructureSelectorFlags {
		interface MFMetadataStructureSelectorFlagsNone extends MFMetadataStructureSelectorFlags { } // 0
		interface MFMetadataStructureSelectorFlagsSelectNew extends MFMetadataStructureSelectorFlags { } // 1
		interface MFMetadataStructureSelectorFlagsSelectExisting extends MFMetadataStructureSelectorFlags { } // 2
		interface MFMetadataStructureSelectorFlagsIncludeNewDependencies extends MFMetadataStructureSelectorFlags { } // 4
		interface MFMetadataStructureSelectorFlagsIncludeExistingDependencies extends MFMetadataStructureSelectorFlags { } // 8
	}

	export interface MFFileFormat { }
	namespace MFFileFormat {
		interface MFFileFormatNative extends MFFileFormat { } // 0
		interface MFFileFormatPDF extends MFFileFormat { } // 1
		interface MFFileFormatDisplayOnlyPDF extends MFFileFormat { } // 2
	}

	export interface MFFolderListingAlgorithm { }
	namespace MFFolderListingAlgorithm {
		interface MFFolderListingAlgorithmNone extends MFFolderListingAlgorithm { } // 0
		interface MFFolderListingAlgorithmTestEachValue extends MFFolderListingAlgorithm { } // 1
		interface MFFolderListingAlgorithmGetValuesByDistinctUse extends MFFolderListingAlgorithm { } // 2
		interface MFFolderListingAlgorithmTestEachValueWithSeparateQueries extends MFFolderListingAlgorithm { } // 3
	}

	export interface MFAttachVaultOptionsFlag { }
	namespace MFAttachVaultOptionsFlag {
		interface MFAttachVaultOptionsFlagDisableNone extends MFAttachVaultOptionsFlag { } // 0
		interface MFAttachVaultOptionsFlagDisableExternalObjectTypes extends MFAttachVaultOptionsFlag { } // 1
		interface MFAttachVaultOptionsFlagDisableExternalSources extends MFAttachVaultOptionsFlag { } // 2
		interface MFAttachVaultOptionsFlagDisableExportedDataSets extends MFAttachVaultOptionsFlag { } // 4
		interface MFAttachVaultOptionsFlagDisableExportImportJobs extends MFAttachVaultOptionsFlag { } // 8
		interface MFAttachVaultOptionsFlagDisableExternalUserGroups extends MFAttachVaultOptionsFlag { } // 16
		interface MFAttachVaultOptionsFlagDisableEventHandlers extends MFAttachVaultOptionsFlag { } // 32
		interface MFAttachVaultOptionsFlagDisableVaultApplications extends MFAttachVaultOptionsFlag { } // 64
		interface MFAttachVaultOptionsFlagDisableRemoteIndexes extends MFAttachVaultOptionsFlag { } // 128
	}

	export interface MFFolderUIStateLocationType { }
	namespace MFFolderUIStateLocationType {
		interface MFFolderUIStateLocationTypeUnknown extends MFFolderUIStateLocationType { } // 0
		interface MFFolderUIStateLocationTypeRootFolder extends MFFolderUIStateLocationType { } // 1
		interface MFFolderUIStateLocationTypeViewFoldersContainer extends MFFolderUIStateLocationType { } // 2
		interface MFFolderUIStateLocationTypePropertyFoldersContainer extends MFFolderUIStateLocationType { } // 3
		interface MFFolderUIStateLocationTypeObjectsContainer extends MFFolderUIStateLocationType { } // 4
		interface MFFolderUIStateLocationTypeObjectFilesContainer extends MFFolderUIStateLocationType { } // 5
		interface MFFolderUIStateLocationTypeTraditionalFolder extends MFFolderUIStateLocationType { } // 6
		interface MFFolderUIStateLocationTypeSearchResultsContainer extends MFFolderUIStateLocationType { } // 7
		interface MFFolderUIStateLocationTypeHistoryUI extends MFFolderUIStateLocationType { } // 8
		interface MFFolderUIStateLocationTypeRelationshipsUIFromTab extends MFFolderUIStateLocationType { } // 9
		interface MFFolderUIStateLocationTypeCollectionMembersUI extends MFFolderUIStateLocationType { } // 10
		interface MFFolderUIStateLocationTypeSubobjectsUI extends MFFolderUIStateLocationType { } // 11
		interface MFFolderUIStateLocationTypeClearLocalCacheUI extends MFFolderUIStateLocationType { } // 12
		interface MFFolderUIStateLocationTypeRelationshipsUIToTab extends MFFolderUIStateLocationType { } // 13
		interface MFFolderUIStateLocationTypeRelationshipsUIAllTab extends MFFolderUIStateLocationType { } // 14
		interface MFFolderUIStateLocationTypeLocalTemporaryItemsContainer extends MFFolderUIStateLocationType { } // 15
	}

	export interface MFFolderListingColumnFlags { }
	namespace MFFolderListingColumnFlags {
		interface MFFolderListingColumnFlagsSelectIfLeftOfSelectedMainColumn extends MFFolderListingColumnFlags { } // 1
		interface MFFolderListingColumnFlagsHideColumnText extends MFFolderListingColumnFlags { } // 2
	}

	export interface MFFolderListingViewMode { }
	namespace MFFolderListingViewMode {
		interface MFFolderListingViewModeIcon extends MFFolderListingViewMode { } // 1
		interface MFFolderListingViewModeSmallIcon extends MFFolderListingViewMode { } // 2
		interface MFFolderListingViewModeList extends MFFolderListingViewMode { } // 3
		interface MFFolderListingViewModeDetails extends MFFolderListingViewMode { } // 4
		interface MFFolderListingViewModeThumbnail extends MFFolderListingViewMode { } // 5
		interface MFFolderListingViewModeTile extends MFFolderListingViewMode { } // 6
		interface MFFolderListingViewModeThumbstrip extends MFFolderListingViewMode { } // 7
		interface MFFolderListingViewModeContent extends MFFolderListingViewMode { } // 8
	}

	export interface MFFolderListingItemGroupingMode { }
	namespace MFFolderListingItemGroupingMode {
		interface MFFolderListingItemGroupingModeNoGrouping extends MFFolderListingItemGroupingMode { } // 0
		interface MFFolderListingItemGroupingModeGroupObjectsByObjectType extends MFFolderListingItemGroupingMode { } // 1
		interface MFFolderListingItemGroupingModeGroupViewsAndFoldersByType extends MFFolderListingItemGroupingMode { } // 1024
		interface MFFolderListingItemGroupingModeUnspecified extends MFFolderListingItemGroupingMode { } // -1
	}

	export interface MFFolderColumnId { }
	namespace MFFolderColumnId {
		interface MFFolderColumnIdIdSegment extends MFFolderColumnId { } // -1000001
		interface MFFolderColumnIdExportedFile extends MFFolderColumnId { } // -1000000
		interface MFFolderColumnIdHasAssignments extends MFFolderColumnId { } // -22
		interface MFFolderColumnIdTypeEx extends MFFolderColumnId { } // -21
		interface MFFolderColumnIdObjectPermissions extends MFFolderColumnId { } // -20
		interface MFFolderColumnIdObjectType extends MFFolderColumnId { } // -19
		interface MFFolderColumnIdRelationshipTargetVer extends MFFolderColumnId { } // -18
		interface MFFolderColumnIdHasRelationships extends MFFolderColumnId { } // -17
		interface MFFolderColumnIdRelationshipDesc extends MFFolderColumnId { } // -16
		interface MFFolderColumnIdScore extends MFFolderColumnId { } // -15
		interface MFFolderColumnIdDateModified extends MFFolderColumnId { } // -14
		interface MFFolderColumnIdDateCreated extends MFFolderColumnId { } // -13
		interface MFFolderColumnIdRelLocation extends MFFolderColumnId { } // -12
		interface MFFolderColumnIdLocation extends MFFolderColumnId { } // -11
		interface MFFolderColumnIdShLastModifiedBy extends MFFolderColumnId { } // -10
		interface MFFolderColumnIdShStatusChanged extends MFFolderColumnId { } // -9
		interface MFFolderColumnIdObjectVersion extends MFFolderColumnId { } // -8
		interface MFFolderColumnIdObjectDispId extends MFFolderColumnId { } // -7
		interface MFFolderColumnIdCheckOutAt extends MFFolderColumnId { } // -6
		interface MFFolderColumnIdCheckoutTo extends MFFolderColumnId { } // -5
		interface MFFolderColumnIdStatus extends MFFolderColumnId { } // -4
		interface MFFolderColumnIdSize extends MFFolderColumnId { } // -3
		interface MFFolderColumnIdType extends MFFolderColumnId { } // -2
		interface MFFolderColumnIdName extends MFFolderColumnId { } // -1
	}

	export interface MFEmailImportance { }
	namespace MFEmailImportance {
		interface MFEmailImportanceLow extends MFEmailImportance { } // 0
		interface MFEmailImportanceNormal extends MFEmailImportance { } // 1
		interface MFEmailImportanceHigh extends MFEmailImportance { } // 2
	}

	export interface MFEmailSensitivity { }
	namespace MFEmailSensitivity {
		interface MFEmailSensitivityNone extends MFEmailSensitivity { } // 0
		interface MFEmailSensitivityNormal extends MFEmailSensitivity { } // 1
		interface MFEmailSensitivityPersonal extends MFEmailSensitivity { } // 2
		interface MFEmailSensitivityPrivate extends MFEmailSensitivity { } // 3
		interface MFEmailSensitivityConfidential extends MFEmailSensitivity { } // 4
	}

	export interface MFFileInformationType { }
	namespace MFFileInformationType {
		interface MFFileInformationTypeUnknown extends MFFileInformationType { } // 0
		interface MFFileInformationTypeEmailMessage extends MFFileInformationType { } // 1
	}

	export interface MFAssignmentType { }
	namespace MFAssignmentType {
		interface MFAssignmentTypeTask extends MFAssignmentType { } // 0
		interface MFAssignmentTypeApproval extends MFAssignmentType { } // 1
	}

	export interface MFStringDataType { }
	namespace MFStringDataType {
		interface MFStringDataTypeJSON extends MFStringDataType { } // 0
		interface MFStringDataTypeXML extends MFStringDataType { } // 1
	}

	export interface MFAdditionalClassInfoType { }
	namespace MFAdditionalClassInfoType {
		interface MFAdditionalClassInfoTypeUnknown extends MFAdditionalClassInfoType { } // 0
		interface MFAdditionalClassInfoTypeAssignment extends MFAdditionalClassInfoType { } // 1
	}

	export interface MFSignaturePromptInfoType { }
	namespace MFSignaturePromptInfoType {
		interface MFSignaturePromptInfoTypeFixed extends MFSignaturePromptInfoType { } // 0
		interface MFSignaturePromptInfoTypeSelectable extends MFSignaturePromptInfoType { } // 1
		interface MFSignaturePromptInfoTypeMetadataBased extends MFSignaturePromptInfoType { } // 2
	}

	export interface MFActionType { }
	namespace MFActionType {
		interface MFActionTypeUnknown extends MFActionType { } // 0
		interface MFActionTypeCreateAssignment extends MFActionType { } // 1
	}

	export interface MFExtApplicationPlatform { }
	namespace MFExtApplicationPlatform {
		interface MFExtApplicationPlatformNone extends MFExtApplicationPlatform { } // 0
		interface MFExtApplicationPlatformDesktop extends MFExtApplicationPlatform { } // 1
		interface MFExtApplicationPlatformWeb extends MFExtApplicationPlatform { } // 2
	}

	export interface MFFacetSearchFlags { }
	namespace MFFacetSearchFlags {
		interface MFFacetSearchFlagNone extends MFFacetSearchFlags { } // 0
		interface MFFacetSearchFlagIgnoreSearchPermissions extends MFFacetSearchFlags { } // 2
		interface MFFacetSearchFlagIgnoreFacetGroupPermissions extends MFFacetSearchFlags { } // 4
		interface MFFacetSearchFlagIgnoreFacetValuePermissions extends MFFacetSearchFlags { } // 8
		interface MFFacetSearchFlagSortFacetValues extends MFFacetSearchFlags { } // 16
		interface MFFacetSearchFlagAscendingOrder extends MFFacetSearchFlags { } // 32
		interface MFFacetSearchFlagOverrideByConfiguration extends MFFacetSearchFlags { } // 64
	}

	export interface MFApplicationLicenseStatus { }
	namespace MFApplicationLicenseStatus {
		interface MFApplicationLicenseStatusUnknown extends MFApplicationLicenseStatus { } // 0
		interface MFApplicationLicenseStatusNotNeeded extends MFApplicationLicenseStatus { } // 1
		interface MFApplicationLicenseStatusNotInstalled extends MFApplicationLicenseStatus { } // 2
		interface MFApplicationLicenseStatusInstalled extends MFApplicationLicenseStatus { } // 3
		interface MFApplicationLicenseStatusValid extends MFApplicationLicenseStatus { } // 4
		interface MFApplicationLicenseStatusInvalid extends MFApplicationLicenseStatus { } // 5
		interface MFApplicationLicenseStatusFormatError extends MFApplicationLicenseStatus { } // 6
		interface MFApplicationLicenseStatusTrial extends MFApplicationLicenseStatus { } // 7
		interface MFApplicationLicenseStatusGracePeriod extends MFApplicationLicenseStatus { } // 8
	}

	export interface MFFacetFilterStatusFlags { }
	namespace MFFacetFilterStatusFlags {
		interface MFFacetFilterStatusFlagNone extends MFFacetFilterStatusFlags { } // 0
		interface MFFacetFilterStatusFlagAvailable extends MFFacetFilterStatusFlags { } // 1
		interface MFFacetFilterStatusFlagApplied extends MFFacetFilterStatusFlags { } // 2
	}

	export interface MFObjVerVersionType { }
	namespace MFObjVerVersionType {
		interface MFObjVerVersionTypeUninitialized extends MFObjVerVersionType { } // 0
		interface MFObjVerVersionTypeLatest extends MFObjVerVersionType { } // 1
		interface MFObjVerVersionTypeAny extends MFObjVerVersionType { } // 2
		interface MFObjVerVersionTypeAll extends MFObjVerVersionType { } // 3
		interface MFObjVerVersionTypeSpecific extends MFObjVerVersionType { } // 4
	}

	export interface MFFileVerVersionType { }
	namespace MFFileVerVersionType {
		interface MFFileVerVersionTypeUninitialized extends MFFileVerVersionType { } // 0
		interface MFFileVerVersionTypeLatest extends MFFileVerVersionType { } // 1
		interface MFFileVerVersionTypeAny extends MFFileVerVersionType { } // 2
		interface MFFileVerVersionTypeSpecific extends MFFileVerVersionType { } // 3
	}

	export interface MFFileProperty { }
	namespace MFFileProperty {
		interface MFFilePropertyName extends MFFileProperty { } // 1
		interface MFFilePropertyExtension extends MFFileProperty { } // 2
		interface MFFilePropertyDirectory extends MFFileProperty { } // 3
		interface MFFilePropertyCreatedAt extends MFFileProperty { } // 4
		interface MFFilePropertyLastModified extends MFFileProperty { } // 5
		interface MFFilePropertyLastAccessed extends MFFileProperty { } // 6
		interface MFFilePropertySize extends MFFileProperty { } // 7
		interface MFFilePropertyReadOnly extends MFFileProperty { } // 8
		interface MFFilePropertyHidden extends MFFileProperty { } // 9
		interface MFFilePropertyArchive extends MFFileProperty { } // 10
	}

	export interface MFObjectCapabilityFlag { }
	namespace MFObjectCapabilityFlag {
		interface MFObjectCapabilityFlagNone extends MFObjectCapabilityFlag { } // 0
		interface MFObjectCapabilityFlagCanHaveHistory extends MFObjectCapabilityFlag { } // 1
		interface MFObjectCapabilityFlagCanHaveRelationships extends MFObjectCapabilityFlag { } // 2
		interface MFObjectCapabilityFlagEditableOldVersionDetails extends MFObjectCapabilityFlag { } // 4
		interface MFObjectCapabilityFlagCanBeDeleted extends MFObjectCapabilityFlag { } // 8
		interface MFObjectCapabilityFlagCanBeDestroyed extends MFObjectCapabilityFlag { } // 16
		interface MFObjectCapabilityFlagCanBeUndeleted extends MFObjectCapabilityFlag { } // 32
		interface MFObjectCapabilityFlagCanBeRenamed extends MFObjectCapabilityFlag { } // 64
		interface MFObjectCapabilityFlagEditableMetadata extends MFObjectCapabilityFlag { } // 128
		interface MFObjectCapabilityFlagEditableAssignments extends MFObjectCapabilityFlag { } // 256
		interface MFObjectCapabilityFlagEditableWorkflows extends MFObjectCapabilityFlag { } // 512
		interface MFObjectCapabilityFlagEditableFiles extends MFObjectCapabilityFlag { } // 1024
		interface MFObjectCapabilityFlagEditableVersionComments extends MFObjectCapabilityFlag { } // 2048
		interface MFObjectCapabilityFlagSingleFileMultiFileConversion extends MFObjectCapabilityFlag { } // 4096
		interface MFObjectCapabilityFlagAddAndRemoveFiles extends MFObjectCapabilityFlag { } // 8192
		interface MFObjectCapabilityFlagCanChangeFileType extends MFObjectCapabilityFlag { } // 16384
		interface MFObjectCapabilityFlagAllCapabilities extends MFObjectCapabilityFlag { } // -1
	}

	export interface MFExtensionAuthenticationSpecialUserType { }
	namespace MFExtensionAuthenticationSpecialUserType {
		interface MFExtensionAuthenticationSpecialUserTypeNone extends MFExtensionAuthenticationSpecialUserType { } // 0
		interface MFExtensionAuthenticationSpecialUserTypeCommon extends MFExtensionAuthenticationSpecialUserType { } // 1
		interface MFExtensionAuthenticationSpecialUserTypeIndexer extends MFExtensionAuthenticationSpecialUserType { } // 2
		interface MFExtensionAuthenticationSpecialUserTypePermissions extends MFExtensionAuthenticationSpecialUserType { } // 3
	}

	export interface MFSharedLinkType { }
	namespace MFSharedLinkType {
		interface MFSharedLinkTypeReadOnly extends MFSharedLinkType { } // 0
		interface MFSharedLinkTypeCoAuthoring extends MFSharedLinkType { } // 1
	}

	export interface MFFileSizePrecision { }
	namespace MFFileSizePrecision {
		interface MFFileSizePrecisionExact extends MFFileSizePrecision { } // 0
		interface MFFileSizePrecisionEstimate extends MFFileSizePrecision { } // 1
		interface MFFileSizePrecisionUnknown extends MFFileSizePrecision { } // 2
	}

	export interface MFClientType { }
	namespace MFClientType {
		interface MFClientTypeUnidentified extends MFClientType { } // 0
		interface MFClientTypeWindowsDesktop extends MFClientType { } // 1
		interface MFClientTypeGenericWindowsDesktopAPI extends MFClientType { } // 2
		interface MFClientTypeGenericServerAPI extends MFClientType { } // 3
		interface MFClientTypeWeb extends MFClientType { } // 4
		interface MFClientTypeMobileAndroid extends MFClientType { } // 5
		interface MFClientTypeMobileIOS extends MFClientType { } // 6
		interface MFClientTypeVNextDesktop extends MFClientType { } // 7
		interface MFClientTypeVNextMobile extends MFClientType { } // 8
		interface MFClientTypeVNextWeb extends MFClientType { } // 9
		interface MFClientTypeVNextHosted extends MFClientType { } // 10
	}

	export interface MFTextContentExtractionFlags { }
	namespace MFTextContentExtractionFlags {
		interface MFTextContentExtractionFlagsNone extends MFTextContentExtractionFlags { } // 0
		interface MFTextContentExtractionFlagsUnpackContainers extends MFTextContentExtractionFlags { } // 1
	}

	export interface MFMigrationSourceObjectPolicy { }
	namespace MFMigrationSourceObjectPolicy {
		interface MFMigrationSourceObjectPolicyUnspecified extends MFMigrationSourceObjectPolicy { } // 0
		interface MFMigrationSourceObjectPolicyKeep extends MFMigrationSourceObjectPolicy { } // 1
		interface MFMigrationSourceObjectPolicyDelete extends MFMigrationSourceObjectPolicy { } // 2
		interface MFMigrationSourceObjectPolicyDestroy extends MFMigrationSourceObjectPolicy { } // 3
	}

	export interface MFTaskQueueProcessingBehavior { }
	namespace MFTaskQueueProcessingBehavior {
		interface MFProcessingBehaviorSequential extends MFTaskQueueProcessingBehavior { } // 0
		interface MFProcessingBehaviorConcurrent extends MFTaskQueueProcessingBehavior { } // 1
	}

	export interface MFTaskState { }
	namespace MFTaskState {
		interface MFTaskStateWaiting extends MFTaskState { } // 0
		interface MFTaskStateInProgress extends MFTaskState { } // 1
		interface MFTaskStateCompleted extends MFTaskState { } // 2
		interface MFTaskStateFailed extends MFTaskState { } // 3
		interface MFTaskStateCanceled extends MFTaskState { } // 4
		interface MFTaskStateNone extends MFTaskState { } // 5
	}

	export interface MFObjectDataRequestFlags { }
	namespace MFObjectDataRequestFlags {
		interface MFObjectDataRequestNone extends MFObjectDataRequestFlags { } // 0
		interface MFObjectDataRequestObjectInfo extends MFObjectDataRequestFlags { } // 1
		interface MFObjectDataRequestProperties extends MFObjectDataRequestFlags { } // 2
		interface MFObjectDataRequestAcl extends MFObjectDataRequestFlags { } // 4
		interface MFObjectDataRequestObjectPermissionsForClient extends MFObjectDataRequestFlags { } // 8
		interface MFObjectDataRequestPropertiesForDisplay extends MFObjectDataRequestFlags { } // 16
	}

	export interface MFHistoryRetrievalMode { }
	namespace MFHistoryRetrievalMode {
		interface MFHistoryRetrievalRelaxed extends MFHistoryRetrievalMode { } // 0
		interface MFHistoryRetrievalAscending extends MFHistoryRetrievalMode { } // 1
		interface MFHistoryRetrievalDescending extends MFHistoryRetrievalMode { } // 2
	}

	export interface MFObjectDataRequestVersionType { }
	namespace MFObjectDataRequestVersionType {
		interface MFObjectDataRequestSpecificVersions extends MFObjectDataRequestVersionType { } // 0
		interface MFObjectDataRequestLatestVersions extends MFObjectDataRequestVersionType { } // 1
		interface MFObjectDataRequestLatestCheckedInVersions extends MFObjectDataRequestVersionType { } // 2
	}

	export interface MFObjectDataRequestErrorTolerance { }
	namespace MFObjectDataRequestErrorTolerance {
		interface MFObjectDataRequestFailOnAnyError extends MFObjectDataRequestErrorTolerance { } // 0
		interface MFObjectDataRequestAllowMissingObjectVersions extends MFObjectDataRequestErrorTolerance { } // 1
	}


	export interface IAccessControlList {
		readonly Count: number;
		CustomComponent: AccessControlListComponent;
		readonly AutomaticComponents: AccessControlListComponentContainer;
		readonly CheckedOutToUserID: number;
		readonly HasCheckedOutToUserID: boolean;
		IsFullyAuthoritative: boolean;
		EqualTo(AccessControlList: AccessControlList): boolean;
		Item(Index: number): MFilesAPI.AccessControlEntry;
		Add(Index: number, AccessControlEntry: AccessControlEntry): void;
		Remove(Index: number): void;
		GetACEByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): MFilesAPI.AccessControlEntry;
		GetACEIndexByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): number;
		Clone(): MFilesAPI.AccessControlList;
		HasIdenticalPermissions(AccessControlList: AccessControlList): boolean;
		CloneFrom(AccessControlList: AccessControlList): void;
	}

	export interface IEnumerable {
	}

	export interface AccessControlList extends IAccessControlList {
		[index: number]: AccessControlEntry;
	}

	export interface AccessControlEntry extends IAccessControlEntry {
	}

	export interface IAccessControlEntry {
		UserOrGroupID: number;
		IsGroup: boolean;
		ReadPermission: MFilesAPI.MFPermission;
		EditPermission: MFilesAPI.MFPermission;
		ChangePermissionsPermission: MFilesAPI.MFPermission;
		Clone(): MFilesAPI.AccessControlEntry;
	}

	export interface AccessControlListComponent extends IAccessControlListComponent {
	}

	export interface IAccessControlListComponent {
		AccessControlEntries: AccessControlEntryContainer;
		IsActive: boolean;
		readonly HasCurrentUser: boolean;
		readonly HasPseudoUsers: boolean;
		CanDeactivate: boolean;
		readonly NamedACLLink: number;
		readonly CurrentUserBinding: number;
		readonly HasNamedACLLink: boolean;
		readonly HasCurrentUserBinding: boolean;
		GetACEByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): MFilesAPI.AccessControlEntryData;
		GetACEKeyByUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): MFilesAPI.AccessControlEntryKey;
		ResetNamedACLLink(): void;
		ResetCurrentUserBinding(): void;
		Clone(): MFilesAPI.AccessControlListComponent;
	}

	export interface AccessControlListComponentContainer extends IAccessControlListComponentContainer {
	}

	export interface IAccessControlListComponentContainer {
		readonly Count: number;
		GetKeys(): MFilesAPI.AccessControlListComponentKeys;
		HasKey(AccessControlListComponentKey: AccessControlListComponentKey): boolean;
		At(AccessControlListComponentKey: AccessControlListComponentKey): MFilesAPI.AccessControlListComponent;
	}

	export interface AccessControlEntryContainer extends IAccessControlEntryContainer {
	}

	export interface IAccessControlEntryContainer {
		readonly IsEmpty: boolean;
		GetKeys(): MFilesAPI.AccessControlEntryKeys;
		HasKey(AccessControlEntryKey: AccessControlEntryKey): boolean;
		At(AccessControlEntryKey: AccessControlEntryKey): MFilesAPI.AccessControlEntryData;
		Add(AccessControlEntryKey: AccessControlEntryKey, AccessControlEntryData: AccessControlEntryData): void;
		Remove(AccessControlEntryKey: AccessControlEntryKey): void;
		Clear(): void;
		Clone(): MFilesAPI.AccessControlEntryContainer;
		GetKeysWithPseudoUserDefinitions(): MFilesAPI.AccessControlEntryKeys;
	}

	export interface AccessControlEntryData extends IAccessControlEntryData {
	}

	export interface IAccessControlEntryData {
		ReadPermission: MFilesAPI.MFPermission;
		EditPermission: MFilesAPI.MFPermission;
		DeletePermission: MFilesAPI.MFPermission;
		ChangePermissionsPermission: MFilesAPI.MFPermission;
		AttachObjectsPermission: MFilesAPI.MFPermission;
		SetAllPermissions(Permission: MFilesAPI.MFPermission): void;
		Clone(): MFilesAPI.AccessControlEntryData;
	}

	export interface AccessControlEntryKey extends IAccessControlEntryKey {
	}

	export interface IAccessControlEntryKey {
		readonly UserOrGroupID: number;
		readonly IsGroup: boolean;
		readonly IsPseudoUser: boolean;
		readonly HasConcreteUserOrGroupID: boolean;
		PseudoUserID: IndirectPropertyID;
		SetUserOrGroupID(UserOrGroupID: number, IsGroup: boolean): void;
		GetResolvedPseudoUserOrGroupIDs(): MFilesAPI.UserOrUserGroupIDs;
		ResetResolvedPseudoUserOrGroupIDs(): void;
		Clone(): MFilesAPI.AccessControlEntryKey;
	}

	export interface AccessControlEntryKeys extends IAccessControlEntryKeys {
		[index: number]: AccessControlEntryKey;
	}

	export interface IAccessControlEntryKeys {
		readonly Count: number;
		Item(Index: number): MFilesAPI.AccessControlEntryKey;
		Clone(): MFilesAPI.AccessControlEntryKeys;
	}

	export interface IndirectPropertyID extends IIndirectPropertyID {
		[index: number]: IndirectPropertyIDLevel;
	}

	export interface IIndirectPropertyID {
		readonly Count: number;
		Item(Index: number): MFilesAPI.IndirectPropertyIDLevel;
		Add(Index: number, IndirectPropertyIDLevel: IndirectPropertyIDLevel): void;
		Remove(Index: number): void;
		EqualTo(IndirectPropertyID: IndirectPropertyID): boolean;
		Clone(): MFilesAPI.IndirectPropertyID;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface UserOrUserGroupIDs extends IUserOrUserGroupIDs {
		[index: number]: UserOrUserGroupID;
	}

	export interface IUserOrUserGroupIDs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.UserOrUserGroupID;
		Add(Index: number, UserOrUserGroupID: UserOrUserGroupID): void;
		Remove(Index: number): void;
		GetUserOrUserGroupID(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType): MFilesAPI.UserOrUserGroupID;
		GetUserOrUserGroupIDIndex(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType): number;
		Clone(): MFilesAPI.UserOrUserGroupIDs;
	}

	export interface IndirectPropertyIDLevel extends IIndirectPropertyIDLevel {
	}

	export interface IIndirectPropertyIDLevel {
		LevelType: MFilesAPI.MFIndirectPropertyIDLevelType;
		ID: number;
		Clone(): MFilesAPI.IndirectPropertyIDLevel;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface UserOrUserGroupID extends IUserOrUserGroupID {
	}

	export interface IUserOrUserGroupID {
		UserOrGroupType: MFilesAPI.MFUserOrUserGroupType;
		UserOrGroupID: number;
		Clone(): MFilesAPI.UserOrUserGroupID;
	}

	export interface AccessControlListComponentKeys extends IAccessControlListComponentKeys {
		[index: number]: AccessControlListComponentKey;
	}

	export interface IAccessControlListComponentKeys {
		readonly Count: number;
		Item(Index: number): MFilesAPI.AccessControlListComponentKey;
		Clone(): MFilesAPI.AccessControlListComponentKeys;
	}

	export interface AccessControlListComponentKey extends IAccessControlListComponentKey {
	}

	export interface IAccessControlListComponentKey {
		PropertyDefID: number;
		ItemID: number;
		Clone(): MFilesAPI.AccessControlListComponentKey;
	}

	export interface IAuthenticationResult {
		readonly Intermediate: AuthenticationResultIntermediate;
		readonly ServerFinal: AuthenticationResultServerFinal;
		readonly VaultFinal: AuthenticationResultVaultFinal;
	}

	export interface AuthenticationResultIntermediate extends IAuthenticationResultIntermediate {
	}

	export interface IAuthenticationResultIntermediate {
		readonly AttemptIdentifier: string;
		readonly AuthenticationData: NamedValues;
	}

	export interface AuthenticationResultServerFinal extends IAuthenticationResultServerFinal {
	}

	export interface IAuthenticationResultServerFinal {
		readonly ServerConnection: MFilesAPI.MFServerConnection;
	}

	export interface AuthenticationResultVaultFinal extends IAuthenticationResultVaultFinal {
	}

	export interface IAuthenticationResultVaultFinal {
		readonly Vault: Vault;
	}

	export interface NamedValues extends INamedValues {
	}

	export interface INamedValues {
		Value: object;
		Modified: boolean;
		readonly Names: Strings;
		Clone(): MFilesAPI.NamedValues;
		Contains(Name: string): boolean;
		[index: string]: any;
	}

	export interface Strings extends IStrings {
		[index: number]: string;
	}

	export interface IStrings {
		readonly Count: number;
		Item(Index: number): string;
		Add(Index: number, Item: string): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.Strings;
		CloneFrom(Strings: Strings): void;
		Join(Separator: string): string;
	}

	export interface Vault extends IVault {
	}

	export interface IVault {
		readonly ObjectTypeOperations: VaultObjectTypeOperations;
		readonly ObjectOperations: VaultObjectOperations;
		readonly ObjectPropertyOperations: VaultObjectPropertyOperations;
		readonly ObjectFileOperations: VaultObjectFileOperations;
		readonly PropertyDefOperations: VaultPropertyDefOperations;
		readonly ValueListOperations: VaultValueListOperations;
		readonly ValueListItemOperations: VaultValueListItemOperations;
		readonly ClassOperations: VaultClassOperations;
		readonly ClassGroupOperations: VaultClassGroupOperations;
		readonly WorkflowOperations: VaultWorkflowOperations;
		readonly ViewOperations: VaultViewOperations;
		readonly UserOperations: VaultUserOperations;
		readonly UserGroupOperations: VaultUserGroupOperations;
		readonly NamedACLOperations: VaultNamedACLOperations;
		readonly TraditionalFolderOperations: VaultTraditionalFolderOperations;
		readonly ReadOnlyAccess: boolean;
		readonly LoggedIn: boolean;
		readonly SessionInfo: SessionInfo;
		readonly ClientOperations: VaultClientOperations;
		readonly ObjectSearchOperations: VaultObjectSearchOperations;
		readonly CurrentLoggedInUserID: number;
		readonly ManagementOperations: VaultManagementOperations;
		readonly UserSettingOperations: VaultUserSettingOperations;
		readonly VaultLanguages: Languages;
		readonly NamedValueStorageOperations: VaultNamedValueStorageOperations;
		readonly DataSetOperations: VaultDataSetOperations;
		readonly EventLogOperations: VaultEventLogOperations;
		readonly Name: string;
		readonly ElectronicSignatureOperations: VaultElectronicSignatureOperations;
		readonly ScheduledJobManagementOperations: VaultScheduledJobManagementOperations;
		readonly CustomApplicationManagementOperations: VaultCustomApplicationManagementOperations;
		readonly Async: IVaultAsync;
		readonly ExtensionMethodOperations: VaultExtensionMethodOperations;
		KeepAlive: boolean;
		readonly NotificationOperations: VaultNotificationOperations;
		readonly ServerDataPushOperations: VaultServerDataPushOperations;
		readonly LoginSessionID: string;
		readonly LoginAccountOperations: VaultLoginAccountOperations;
		readonly AutomaticMetadataOperations: VaultAutomaticMetadataOperations;
		readonly SharedLinkOperations: VaultSharedLinkOperations;
		readonly ExternalObjectOperations: VaultExternalObjectOperations;
		readonly ExtensionAuthenticationOperations: VaultExtensionAuthenticationOperations;
		readonly UserOperationsEx: VaultUserOperationsEx;
		readonly ApplicationTaskOperations: VaultApplicationTaskOperations;
		readonly DocumentComparisonOperations: VaultDocumentComparisonOperations;
		LogOutWithDialogs(ParentWindow: number): boolean;
		GetGUID(): string;
		LogOutSilent(): void;
		ChangePassword(OldPassword: string, NewPassword: string): void;
		GetServerVersionOfVault(): MFilesAPI.MFilesVersion;
		TestConnectionToServer(): void;
		TestConnectionToVault(): void;
		GetMFilesURLForVaultRoot(): string;
		TestConnectionToVaultWithTimeout(TimeoutInMilliseconds: number): void;
		CloneFrom(SourceVault: Vault): void;
		GetMetadataStructureItemIDByAlias(MetadataStructureItemType: MFilesAPI.MFMetadataStructureItem, Alias: string, Unused?: boolean): number;
		CloneForParallelActivity(): MFilesAPI.Vault;
		GetMetadataStructureVersionID(): number;
		GetAllTranslations(): string;
		GetServerLicenseStatus(): MFilesAPI.LicenseStatus;
		DisconnectDevice(DeviceToken: string): void;
		DetachSession(): string;
		Restart(): void;
	}

	export interface VaultObjectTypeOperations extends IVaultObjectTypeOperations {
	}

	export interface IVaultObjectTypeOperations {
		GetBuiltInObjectType(ObjectType: MFilesAPI.MFBuiltInObjectType): MFilesAPI.ObjType;
		GetObjectTypes(): MFilesAPI.ObjTypes;
		GetObjectType(ObjectType: number): MFilesAPI.ObjType;
		RefreshExternalObjectType(ObjectType: number, RefreshType: MFilesAPI.MFExternalDBRefreshType): void;
		AddObjectTypeAdmin(ObjectType: ObjTypeAdmin): MFilesAPI.ObjTypeAdmin;
		RemoveObjectTypeAdmin(ObjectTypeID: number): void;
		UpdateObjectTypeAdmin(ObjectType: ObjTypeAdmin): MFilesAPI.ObjTypeAdmin;
		GetObjectTypesAdmin(): MFilesAPI.ObjTypesAdmin;
		GetObjectTypeAdmin(ObjectType: number): MFilesAPI.ObjTypeAdmin;
		UpdateObjectTypeWithAutomaticPermissionsAdmin(ObjectType: ObjTypeAdmin, AutomaticPermissionsForcedActive?: boolean): MFilesAPI.ObjTypeAdmin;
		GetObjectTypeIDByAlias(Alias: string): number;
		GetObjectTypeIDByGUID(ObjectTypeGUID: string): number;
		RefreshExternalObjectTypeColumnMappingsAdmin(ObjectType: ObjTypeAdmin): MFilesAPI.ObjTypeAdmin;
	}

	export interface VaultObjectOperations extends IVaultObjectOperations {
	}

	export interface IVaultObjectOperations {
		ShowBasicNewObjectWindow(ParentWindow: number, ObjectType: ObjType): MFilesAPI.ObjectWindowResult;
		ShowNewObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjectCreationInfo: ObjectCreationInfo): MFilesAPI.ObjectWindowResult;
		ShowBasicEditObjectWindow(ParentWindow: number, ObjVer: ObjVer): MFilesAPI.ObjectWindowResult;
		ShowEditObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjVer: ObjVer): MFilesAPI.ObjectWindowResult;
		CreateNewObject(ObjectType: number, PropertyValues: PropertyValues, SourceObjectFiles: SourceObjectFiles | null, AccessControlList: AccessControlList | null): MFilesAPI.ObjectVersionAndProperties;
		CheckIn(ObjVer: ObjVer): MFilesAPI.ObjectVersion;
		CheckOut(ObjID: ObjID): MFilesAPI.ObjectVersion;
		GetObjectVersionAndProperties(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionAndProperties;
		GetLatestObjectVersionAndProperties(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionAndProperties;
		IsCheckedOut(ObjID: ObjID, UpdateFromServer?: boolean): boolean;
		ShowCheckoutPrompt(ParentWindow: number, Message: string, ObjID: ObjID, ShowCancel: boolean, AutoRejectConsequentPrompts?: boolean): MFilesAPI.ObjectVersion;
		IsSingleFileObject(ObjVer: ObjVer): boolean;
		SetSingleFileObject(ObjVer: ObjVer, SingleFile: boolean): void;
		ChangePermissionsToNamedACL(ObjVer: ObjVer, NamedACL: number, ChangeAllVersions: boolean): MFilesAPI.ObjectVersion;
		ChangePermissionsToACL(ObjVer: ObjVer, AccessControlList: AccessControlList, ChangeAllVersions: boolean): MFilesAPI.ObjectVersion;
		DestroyObject(ObjID: ObjID, DestroyAllVersions: boolean, ObjectVersion: number): void;
		GetThumbnailAsBytes(ObjVer: ObjVer, FileVer: FileVer, Width: number, Height: number, GetFileIconThumbnailIfRealThumbnailNotAvailable: boolean): number[];
		Rollback(ObjID: ObjID, RollbackToVersion: number): MFilesAPI.ObjectVersion;
		UndeleteObject(ObjID: ObjID): MFilesAPI.ObjectVersion;
		UndoCheckout(ObjVer: ObjVer): MFilesAPI.ObjectVersion;
		GetHistory(ObjID: ObjID): MFilesAPI.ObjectVersions;
		GetRelationships(ObjVer: ObjVer, Mode: MFilesAPI.MFRelationshipsMode): MFilesAPI.ObjectVersions;
		GetCollectionMembers(ObjVer: ObjVer): MFilesAPI.ObjectVersions;
		GetObjectInfo(ObjVer: ObjVer, LatestVersion: boolean, UpdateFromServer?: boolean): MFilesAPI.ObjectVersion;
		CreateNewObjectEx(ObjectType: number, Properties: PropertyValues, SourceFiles: SourceObjectFiles | null, SFD: boolean | undefined, CheckIn: boolean | undefined, AccessControlList: AccessControlList | null): MFilesAPI.ObjectVersionAndProperties;
		GetObjectPermissions(ObjVer: ObjVer): MFilesAPI.ObjectVersionPermissions;
		RemoveObject(ObjID: ObjID): MFilesAPI.ObjectVersion;
		GetLatestObjVer(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean): MFilesAPI.ObjVer;
		CreateNewObjectExQuick(ObjectType: number, Properties: PropertyValues, SourceFiles: SourceObjectFiles | null, SFD: boolean | undefined, CheckIn: boolean | undefined, AccessControlList: AccessControlList | null): number;
		GetMFilesURLForObject(ObjID: ObjID, TargetVersion: number, SpecificVersion: boolean, URLType?: MFilesAPI.MFilesURLType): string;
		ShowPrefilledNewObjectWindow(ParentWindow: number, Mode: MFilesAPI.MFObjectWindowMode, ObjectCreationInfo: ObjectCreationInfo, PrefilledPropertyValues?: PropertyValues, AccessControlList?: AccessControlList): MFilesAPI.ObjectWindowResult;
		CreateNewEmptySingleFileDocument(PropertyValues: PropertyValues, Title: string, Extension: string, AccessControlList?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		SetOfflineAvailability(ObjID: ObjID, AvailableInOfflineMode: boolean): void;
		GetObjectLocationsInView(View: number, LatestSpecificBehavior: MFilesAPI.MFLatestSpecificBehavior, ObjectVersion: ObjVer): MFilesAPI.Strings;
		ShowRelatedObjects(ParentWindow: number, SourceObject: ObjID, ObjectTypeTargetForBrowsing: ObjectTypeTargetForBrowsing, ViewSelectionDialogInfoText?: string): void;
		ShowRelationshipsDialog(ParentWindow: number, ObjectVersion: ObjVer, Modeless?: boolean): void;
		ShowCollectionMembersDialog(ParentWindow: number, ObjectVersion: ObjVer, Modeless?: boolean): void;
		ShowSubObjectsDialogModal(ParentWindow: number, ObjectVersion: ObjVer): void;
		ShowHistoryDialogModal(ParentWindow: number, ObjectID: ObjID): void;
		ShowSelectObjectHistoryDialogModal(ParentWindow: number, ObjectID: ObjID, WindowTitle?: string): MFilesAPI.ObjOrFileVer;
		ShowCommentsDialogModal(ParentWindow: number, ObjectID: ObjID): void;
		ShowCheckInReminder(ParentWindow: number, ObjVer: ObjVer, Asynchronous: boolean): MFilesAPI.ObjectVersion;
		GetMFilesURLForObjectOrFile(ObjID: ObjID, TargetVersion?: number, SpecificVersion?: boolean, File?: number, URLType?: MFilesAPI.MFilesURLType): string;
		RejectCheckInReminder(ObjVer: ObjVer): void;
		DelayedCheckIn(ObjVer: ObjVer): void;
		ShowCheckInReminderDialogModal(ParentWindow: number, ObjVer: ObjVer, ApplyEnvironmentConditions: boolean): boolean;
		ProposeCheckOutForFile(ParentWindow: number, ObjVersionFile: ObjectVersionFile, CanCancel: boolean): boolean;
		ForceUndoCheckout(ObjVer: ObjVer): MFilesAPI.ObjectVersion;
		CreateNewSFDObject(ObjectType: number, Properties: PropertyValues, SourceFile: SourceObjectFile, CheckIn: boolean, AccessControlList?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		CreateNewSFDObjectQuick(ObjectType: number, Properties: PropertyValues, SourceFile: SourceObjectFile, CheckIn: boolean, AccessControlList?: AccessControlList): number;
		AddFavorites(ObjIDs: ObjIDs): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
		AddFavorite(ObjID: ObjID): MFilesAPI.ObjectVersionAndProperties;
		RemoveFavorites(ObjIDs: ObjIDs): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
		RemoveFavorite(ObjID: ObjID): MFilesAPI.ObjectVersionAndProperties;
		NotifyObjectAccess(ObjID: ObjID): MFilesAPI.ObjectVersionAndProperties;
		CreateNewAssignment(AssignmentName: string, AssignmentDescription: string, AssignedToUser: TypedValue, Deadline?: TypedValue, AccessControlList?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		GetObjectGUID(ObjID: ObjID): string;
		SetObjectGUID(ObjID: ObjID, ObjectGUID: string): void;
		GetObjIDByGUID(ObjectGUID: string): MFilesAPI.ObjID;
		DestroyObjects(ObjIDs: ObjIDs): void;
		CheckOutMultipleObjects(ObjIDs: ObjIDs): MFilesAPI.ObjectVersions;
		CheckInMultipleObjects(ObjVers: ObjVers): MFilesAPI.ObjectVersions;
		GetObjIDByOriginalObjID(OriginalVaultGUID: string, OriginalObjID: ObjID): MFilesAPI.ObjID;
		ResolveConflict(ParticipantObjID: ObjID, KeepThis: boolean): MFilesAPI.ObjectVersions;
		GetObjectInfoEx(ObjVer: ObjVer, LatestVersion: boolean, UpdateFromServer?: boolean, NotifyViews?: boolean): MFilesAPI.ObjectVersion;
		GetLatestObjVerEx(ObjID: ObjID, AllowCheckedOut: boolean, UpdateFromServer?: boolean, NotifyViews?: boolean): MFilesAPI.ObjVer;
		UndoCheckoutMultipleObjects(ObjVers: ObjVers): MFilesAPI.ObjectVersions;
		ShowChangeStateDialogModal(ParentWindow: number, ObjectID: ObjID): void;
		GetObjectVersionAndPropertiesOfMultipleObjects(ObjVers: ObjVers, LatestVersions: boolean, AllowCheckedOut: boolean, AllowMissingObjectVersions: boolean, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
		IsObjectCheckedOut(ObjID: ObjID, UpdateFromServer?: boolean): boolean;
		IsObjectCheckedOutToThisUserOnThisComputer(ObjID: ObjID, UpdateFromServer?: boolean): boolean;
		DeleteObject(ObjID: ObjID): MFilesAPI.ObjectVersion;
		FollowObject(ObjID: ObjID, Follow?: boolean): void;
		IsObjectFollowed(ObjID: ObjID): boolean;
		MatchesSearchConditions(pIObjVer: ObjVer, pISearchConditions: SearchConditions): boolean;
		MatchesSearchConditionsEx(pIObjectVersion: ObjectVersion, pISearchConditions: SearchConditions, pIPropertyValues?: PropertyValues, pIObjectVersionAndPropertiesOfMultipleObjects?: ObjectVersionAndPropertiesOfMultipleObjects): boolean;
		GetOfflineAvailability(ObjID: ObjID): boolean;
		GetOfflineObjIDs(): MFilesAPI.ObjIDs;
		SetExternalID(ObjID: ObjID, ExtID: string): void;
		GetMFilesURLForObjectEx(ObjVer: ObjVer, SpecificVersion: boolean, URLType?: MFilesAPI.MFilesURLType): string;
		GetMFilesURLForObjectOrFileEx(ObjVer: ObjVer, FileVer: FileVer, SpecificVersion?: boolean, URLType?: MFilesAPI.MFilesURLType): string;
		DestroyObjectEx(ObjID: ObjID, DestroyAllVersions: boolean, ObjectVersion: ObjVerVersion): void;
		RollbackEx(ObjID: ObjID, RollbackToVersion: ObjVerVersion): MFilesAPI.ObjectVersion;
		GetRelatedObjectInfo(Lookup: Lookup, UpdateFromServer?: boolean): MFilesAPI.ObjectVersion;
		GetRelationshipsEx(ObjVer: ObjVer, Mode: MFilesAPI.MFRelationshipsMode, SearchInEachObjectType: boolean): MFilesAPI.ObjectVersions;
		GetObjectDataOfMultipleObjects(IObjVers: ObjVers, ObjectDataRequest: ObjectVersionDataRequest): MFilesAPI.ObjectVersionDataResults;
		GetHistoryEx(ObjID: ObjID, HistoryRetrievalMode: MFilesAPI.MFHistoryRetrievalMode): MFilesAPI.ObjectVersions;
		CompareWithPreviousVersion(ParentWindow: number, ObjVer: ObjVer): void;
		CompareWithAnotherVersion(ParentWindow: number, ObjVer: ObjVer): void;
		CompareWithAnotherDocument(ParentWindow: number, ObjVer: ObjVer, FileTitleAndExtension: string): void;
		GetShortObjectPath(ObjVer: ObjVer): string;
	}

	export interface VaultObjectPropertyOperations extends IVaultObjectPropertyOperations {
	}

	export interface IVaultObjectPropertyOperations {
		GetProperties(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.PropertyValues;
		SetProperties(ObjVer: ObjVer, PropertyValues: PropertyValues): MFilesAPI.ObjectVersionAndProperties;
		GetProperty(ObjVer: ObjVer, Property: number): MFilesAPI.PropertyValue;
		SetProperty(ObjVer: ObjVer, PropertyValue: PropertyValue): MFilesAPI.ObjectVersionAndProperties;
		RemoveProperty(ObjVer: ObjVer, Property: number): MFilesAPI.ObjectVersionAndProperties;
		GetPropertiesForDisplay(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.PropertyValuesForDisplay;
		GetAssignment_DEPRECATED(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.WorkflowAssignment;
		SetAssignment_DEPRECATED(ObjVer: ObjVer, Assignment: WorkflowAssignment): MFilesAPI.ObjectVersionAndProperties;
		MarkAssignmentComplete(ObjVer: ObjVer): MFilesAPI.ObjectVersionAndProperties;
		SetAllProperties(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues): MFilesAPI.ObjectVersionAndProperties;
		SetVersionComment(ObjVer: ObjVer, VersionComment: PropertyValue): MFilesAPI.ObjectVersionAndProperties;
		GetVersionComment(ObjVer: ObjVer): MFilesAPI.VersionComment;
		GetVersionCommentHistory(ObjVer: ObjVer): MFilesAPI.VersionComments;
		SetWorkflowState(ObjVer: ObjVer, WorkflowState: ObjectVersionWorkflowState): MFilesAPI.ObjectVersionAndProperties;
		GetWorkflowState(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionWorkflowState;
		GetPropertiesAsXML(ObjVer: ObjVer, UpdateFromServer?: boolean): string;
		GetPropertiesOfMultipleObjects(ObjectVersions: ObjVers): MFilesAPI.PropertyValuesOfMultipleObjects;
		SetCreationInfoAdmin(ObjVer: ObjVer, UpdateCreatedBy: boolean, CreatedBy: TypedValue, UpdateCreated: boolean, CreatedUtc: TypedValue): MFilesAPI.ObjectVersionAndProperties;
		SetLastModificationInfoAdmin(ObjVer: ObjVer, UpdateLastModifiedBy: boolean, LastModifiedBy: TypedValue, UpdateLastModified: boolean, LastModifiedUtc: TypedValue): MFilesAPI.ObjectVersionAndProperties;
		SetPropertiesOfMultipleObjects(SetPropertiesParamsOfObjects: SetPropertiesParamsOfMultipleObjects): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
		GetPropertiesWithIconClues(ObjVer: ObjVer, UpdateFromServer?: boolean): MFilesAPI.PropertyValuesWithIconClues;
		GetPropertiesWithIconCluesOfMultipleObjects(ObjectVersions: ObjVers): MFilesAPI.PropertyValuesWithIconCluesOfMultipleObjects;
		SetPropertiesWithPermissions(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		SetAllPropertiesWithPermissions(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		GenerateAutomaticPermissionsFromPropertyValues(PropertyValues: PropertyValues): MFilesAPI.AccessControlList;
		GetPropertiesForMetadataSync(ObjVer: ObjVer, Format: MFilesAPI.MFMetadataSyncFormat): MFilesAPI.NamedValues;
		SetWorkflowStateEx(ObjVer: ObjVer, WorkflowState: ObjectVersionWorkflowState, ElectronicSignature?: object): MFilesAPI.ObjectVersionAndProperties;
		SetPropertiesWithPermissionsEx(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, ElectronicSignature?: object): MFilesAPI.ObjectVersionAndProperties;
		SetAllPropertiesWithPermissionsEx(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, ACLProvided?: AccessControlList, ElectronicSignature?: object): MFilesAPI.ObjectVersionAndProperties;
		CreatePropertiesFromFileInformation(FileInformation: FileInformation): MFilesAPI.PropertyValues;
		SetWorkflowStateTransition(ObjVer: ObjVer, Workflow: number, lStateTransition: number, lVersionComment: string): MFilesAPI.ObjectVersionAndProperties;
		SetWorkflowStateTransitionEx(ObjVer: ObjVer, Workflow: number, StateTransition: number, VersionComment: string, ElectronicSignature: object): MFilesAPI.ObjectVersionAndProperties;
		MarkAssignmentCompleteByUser(ObjVer: ObjVer, UserID: number): MFilesAPI.ObjectVersionAndProperties;
		ApproveOrRejectAssignment(ObjVer: ObjVer, Approve: boolean): MFilesAPI.ObjectVersionAndProperties;
		ApproveOrRejectAssignmentByUser(ObjVer: ObjVer, Approve: boolean, UserID: number): MFilesAPI.ObjectVersionAndProperties;
		GetPropertiesOfMultipleObjectsForDisplay(ObjectVersions: ObjVers): MFilesAPI.PropertyValuesOfMultipleObjectsForDisplay;
		MarkForArchiving(ObjID: ObjID): MFilesAPI.ObjectVersionAndProperties;
		ClearArchivingMarker(ObjID: ObjID): MFilesAPI.ObjectVersionAndProperties;
	}

	export interface VaultObjectFileOperations extends IVaultObjectFileOperations {
	}

	export interface IVaultObjectFileOperations {
		AddFile(ObjVer: ObjVer, Title: string, Extension: string, SourcePath: string): MFilesAPI.FileVer;
		RemoveFile(ObjVer: ObjVer, FileVer: FileVer): MFilesAPI.ObjectVersion;
		GetFiles(ObjVer: ObjVer): MFilesAPI.ObjectFiles;
		GetPathInDefaultView(ObjID: ObjID, ObjectVersion: number, FileID: number, FileVersion: number, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, UpdateFromServer?: boolean): string;
		DownloadFile(File: number, FileVersion: number, FilePath: string): void;
		DownloadFileInBlocks_Begin(File: number, FileVersion: number): MFilesAPI.FileDownloadSession;
		DownloadFileInBlocks_ReadBlock(DownloadID: number, BlockSize: number, Offset: number): number[];
		DownloadFileInBlocks_Begin_32bit(File: number, FileVersion: number): MFilesAPI.FileDownloadSession;
		DownloadFileInBlocks_ReadBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): number[];
		UploadFile(File: number, FileVersion: number, FilePath: string): void;
		UploadFileBlockBegin(): number;
		UploadFileBlock(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[]): void;
		UploadFileBlockBegin_32bit(): number;
		UploadFileBlock_32bit(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[]): void;
		UploadFileCommit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void;
		UploadFileCommit_32bit(UploadID: number, File: number, FileVersion: number, LogicalSize: number): void;
		RenameFile(ObjVer: ObjVer, FileVer: FileVer, Title: string, Extension: string, UpdateSingleFileDocumentTitle?: boolean): MFilesAPI.ObjectVersion;
		GetFileSize(FileVer: FileVer): number;
		GetLatestFileVersion(FileID: number, AllowCheckedOut: boolean): MFilesAPI.FileVer;
		AddEmptyFile(ObjVer: ObjVer, Title: string, Extension: string): MFilesAPI.FileVer;
		OpenFileInDefaultApplication(ParentWindow: number, ObjVer: ObjVer, FileVer: FileVer, FileOpenMethod: MFilesAPI.MFFileOpenMethod): void;
		GetFileSize_32bit(FileVer: FileVer): number;
		GetObjIDOfFile(FileID: number): MFilesAPI.ObjID;
		PerformOCROperation(ObjVer: ObjVer, FileVer: FileVer, OCROptions?: OCROptions, ZoneRecognitionMode?: MFilesAPI.MFOCRZoneRecognitionMode, ZoneRecognitionPages?: OCRPages, ConvertToSearchablePDF?: boolean): MFilesAPI.OCRPageResults;
		GetFilesForModificationInEventHandler(ObjVer: ObjVer): MFilesAPI.ObjectFiles;
		ConvertToPDF(ObjVer: ObjVer, FileID: number, StoreAsSeparateFile?: boolean, OverwriteExistingFile?: boolean, PDFA1b?: boolean, FailOnUnsupportedSourceFiles?: boolean): MFilesAPI.ObjectVersion;
		DownloadFileEx(File: number, FileVersion: number, FilePath: string, FileFormat: MFilesAPI.MFFileFormat): void;
		DownloadFileInBlocks_BeginEx(File: number, FileVersion: number, FileFormat: MFilesAPI.MFFileFormat): MFilesAPI.FileDownloadSession;
		DownloadFileInBlocks_BeginEx_32bit(File: number, FileVersion: number, FileFormat: MFilesAPI.MFFileFormat): MFilesAPI.FileDownloadSession;
		UploadFromDataURI(ObjVer: ObjVer, File: number, FileVersion: number, DataURI: string): void;
		DownloadFileAsDataURI(ObjVer: ObjVer, File: number, FileVersion: number): string;
		UpdateMetadataInFile(ObjVer: ObjVer, File?: number, FailOnUnsupportedFiles?: boolean): MFilesAPI.ObjectVersion;
		GetPathInDefaultViewEx(ObjID: ObjID, ObjectVersion: number, FileID: number, FileVersion: number, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, PreferTraditionalFolderLocation?: boolean, UpdateFromServer?: boolean): string;
		UploadTemporaryFile(FilePath: string): number;
		CloseUploadSession(UploadID: number): void;
		UploadTemporaryFileBlockBegin(FileExtension: string): number;
		UploadTemporaryFileBlockBegin_32bit(FileExtension: string): number;
		UploadTemporaryFileBlock(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[]): void;
		UploadTemporaryFileBlock_32bit(UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[]): void;
		UploadTemporaryFileCommit(UploadID: number, LogicalSize: number): void;
		UploadTemporaryFileCommit_32bit(UploadID: number, LogicalSize: number): void;
		DownloadFileEx2(ObjID: ObjID, FileVer: FileVer, FilePath: string): void;
		DownloadFileInBlocks_BeginEx2(ObjID: ObjID, FileVer: FileVer): MFilesAPI.FileDownloadSession;
		DownloadFileInBlocks_Begin_32bitEx(ObjID: ObjID, FileVer: FileVer): MFilesAPI.FileDownloadSession;
		UploadFileEx(ObjID: ObjID, FileVer: FileVer, FilePath: string): void;
		UploadFileCommitEx(UploadID: number, ObjID: ObjID, FileVer: FileVer, LogicalSize: number): void;
		UploadFileCommit_32bitEx(UploadID: number, ObjID: ObjID, FileVer: FileVer, LogicalSize: number): void;
		DownloadFileEx3(ObjID: ObjID, FileVer: FileVer, FilePath: string, FileFormat: MFilesAPI.MFFileFormat): void;
		DownloadFileInBlocks_BeginEx3(ObjID: ObjID, FileVer: FileVer, FileFormat: MFilesAPI.MFFileFormat): MFilesAPI.FileDownloadSession;
		DownloadFileInBlocks_BeginEx_32bitEx(ObjID: ObjID, FileVer: FileVer, FileFormat: MFilesAPI.MFFileFormat): MFilesAPI.FileDownloadSession;
		UploadFromDataURIEx(ObjVer: ObjVer, FileVer: FileVer, DataURI: string): void;
		DownloadFileAsDataURIEx(ObjVer: ObjVer, FileVer: FileVer): string;
		GetFileSizeEx(ObjID: ObjID, FileVer: FileVer): number;
		GetFileSize_32bitEx(ObjID: ObjID, FileVer: FileVer): number;
		GetPathInDefaultViewEx2(ObjVer: ObjVer, FileVer: FileVer, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, UpdateFromServer?: boolean): string;
		GetPathInDefaultViewEx3(ObjVer: ObjVer, FileVer: FileVer, LatestSpecificBehavior?: MFilesAPI.MFLatestSpecificBehavior, PreferTraditionalFolderLocation?: boolean, UpdateFromServer?: boolean): string;
		CancelFileDownloadSession(DownloadID: number): void;
		GetTextContentForTemporaryFile(UploadSessionID: number): string;
		GetTextContentForFile(ObjVer: ObjVer, FileVer: FileVer): string;
		DetectTextLanguage(TextContent: string): string;
		GetTextContentForFileEx(ObjID: ObjID, FileVer: FileVer, OptionFlags: MFilesAPI.MFTextContentExtractionFlags): string;
		DetectTextLanguageEx(TextContent: string): MFilesAPI.LanguageDetectionResult;
		FindFileDuplicates(ObjID: ObjID, FileVer: FileVer, IncludeVersionsOfThisFile?: boolean, ExcludeFilesFromDeletedObjects?: boolean): MFilesAPI.ObjIDs;
		FindFileDuplicatesBasedOnPath(SourceFilePath: string, ExcludeFilesFromDeletedObjects?: boolean): MFilesAPI.ObjIDs;
		HasFileDuplicates(ObjID: ObjID, FileVer: FileVer): boolean;
		GetShortObjectFilePath(ObjectFileAndVersion: ObjectVersionFile): string;
	}

	export interface VaultPropertyDefOperations extends IVaultPropertyDefOperations {
	}

	export interface IVaultPropertyDefOperations {
		GetPropertyDefs(): MFilesAPI.PropertyDefs;
		GetPropertyDef(PropertyDef: number): MFilesAPI.PropertyDef;
		GetBuiltInPropertyDef(PropertyDefType: MFilesAPI.MFBuiltInPropertyDef): MFilesAPI.PropertyDef;
		AddPropertyDefAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue): MFilesAPI.PropertyDefAdmin;
		RemovePropertyDefAdmin(PropertyDef: number, CopyToAnotherPropertyDef?: boolean, TargetPropertyDef?: number, Append?: boolean, DeleteFromClassesIfNecessary?: boolean): void;
		UpdatePropertyDefAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue): void;
		GetPropertyDefsAdmin(): MFilesAPI.PropertyDefsAdmin;
		GetPropertyDefAdmin(PropertyDef: number): MFilesAPI.PropertyDefAdmin;
		UpdatePropertyDefWithAutomaticPermissionsAdmin(PropertyDefAdmin: PropertyDefAdmin, ResetLastUsedValue?: TypedValue, AutomaticPermissionsForcedActive?: boolean): void;
		GetPropertyDefIDByAlias(Alias: string): number;
		GetPropertyDefIDByGUID(PropertyDefGUID: string): number;
		Recalculate(PropertyDef: number, RecalculateCurrentlyEmptyValuesOnly: boolean): void;
	}

	export interface VaultValueListOperations extends IVaultValueListOperations {
	}

	export interface IVaultValueListOperations {
		GetValueLists(): MFilesAPI.ObjTypes;
		GetValueList(ValueList: number): MFilesAPI.ObjType;
		GetBuiltInValueList(BuiltInValueList: MFilesAPI.MFBuiltInValueList): MFilesAPI.ObjType;
		RefreshExternalValueList(ValueList: number, RefreshType: MFilesAPI.MFExternalDBRefreshType): void;
		AddValueListAdmin(ValueList: ObjTypeAdmin): MFilesAPI.ObjTypeAdmin;
		RemoveValueListAdmin(ValueListID: number): void;
		UpdateValueListAdmin(ValueList: ObjTypeAdmin): MFilesAPI.ObjTypeAdmin;
		GetValueListsAdmin(): MFilesAPI.ObjTypesAdmin;
		GetValueListAdmin(ValueListID: number): MFilesAPI.ObjTypeAdmin;
		UpdateValueListWithAutomaticPermissionsAdmin(ObjectType: ObjTypeAdmin, AutomaticPermissionsForcedActive?: boolean): MFilesAPI.ObjTypeAdmin;
		GetValueListIDByAlias(Alias: string): number;
		GetValueListIDByGUID(ValueListGUID: string): number;
	}

	export interface VaultValueListItemOperations extends IVaultValueListItemOperations {
	}

	export interface IVaultValueListItemOperations {
		GetValueListItems(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType): MFilesAPI.ValueListItems;
		AddValueListItem(ValueList: number, ValueListItem: ValueListItem, AdministrativeOperation?: boolean): MFilesAPI.ValueListItem;
		UpdateValueListItem(ValueListItem: ValueListItem): void;
		RemoveValueListItem(ValueList: number, Item: number): void;
		SearchForValueListItems(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType): MFilesAPI.ValueListItemSearchResults;
		GetValueListItemByID(ValueList: number, ValueListItemID: number): MFilesAPI.ValueListItem;
		ChangePermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number): void;
		ChangePermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList): void;
		ChangeDefaultPermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number): void;
		ChangeDefaultPermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList): void;
		GetValueListItemByDisplayID(ValueList: number, ValueListItemDisplayID: string): MFilesAPI.ValueListItem;
		GetValueListItemsEx(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItems;
		SearchForValueListItemsEx(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItemSearchResults;
		GetValueListItemByIDEx(ValueList: number, ValueListItemID: number, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItem;
		GetValueListItemByDisplayIDEx(ValueList: number, ValueListItemDisplayID: string, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItem;
		GetValueListItemsEx2(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number): MFilesAPI.ValueListItems;
		SearchForValueListItemsEx2(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, MaxResults?: number): MFilesAPI.ValueListItemSearchResults;
		GetValueListItemsWithPermissions(ValueList: number, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number): MFilesAPI.ValueListItemsWithPermissions;
		SearchForValueListItemsWithPermissions(ValueList: number, SearchConditions: SearchConditions, UpdateFromServer?: boolean, RefreshTypeIfExternalValueList?: MFilesAPI.MFExternalDBRefreshType, ReplaceCurrentUserWithCallersIdentity?: boolean, PropertyDef?: number, MaxResults?: number): MFilesAPI.ValueListItemSearchResultsWithPermissions;
		ChangeAutomaticPermissionsToNamedACL(ValueList: number, ValueListItemID: number, NamedACL: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ChangeAutomaticPermissionsToACL(ValueList: number, ValueListItemID: number, AccessControlList: AccessControlList, NameForAutomaticPermissions: string, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ChangeAutomaticPermissionsToItemsOwnPermissions(ValueList: number, ValueListItemID: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ClearAutomaticPermissions(ValueList: number, ValueListItemID: number): void;
		UndeleteValueListItem(ValueList: number, ValueListItemID: number): void;
		GetValueListItemByGUID(ValueList: number, ItemGUID: string, AllowDeletedItems?: boolean, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItem;
		GetValueListItemIDByGUID(ValueList: number, ItemGUID: string, AllowDeletedItems?: boolean): number;
		RemoveValueListItemEx(ObjID: ObjID): void;
		GetValueListItemByIDEx2(ObjID: ObjID, ReplaceCurrentUserWithCallersIdentity?: boolean): MFilesAPI.ValueListItem;
		ChangePermissionsToNamedACLEx(ObjID: ObjID, NamedACL: number): void;
		ChangePermissionsToACLEx(ObjID: ObjID, AccessControlList: AccessControlList): void;
		ChangeAutomaticPermissionsToNamedACLEx(ObjID: ObjID, NamedACL: number, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ChangeAutomaticPermissionsToACLEx(ObjID: ObjID, AccessControlList: AccessControlList, NameForAutomaticPermissions: string, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ChangeAutomaticPermissionsToItemsOwnPermissionsEx(ObjID: ObjID, CanDeactivate?: boolean, AutomaticPermissionsOperationOptions?: MFilesAPI.MFAutomaticPermissionsOperationOptions): void;
		ClearAutomaticPermissionsEx(ObjID: ObjID): void;
		UndeleteValueListItemEx(ObjID: ObjID): void;
		GetValueListItemsInIdOrder(ValueList: number, LastReceivedItemID: number, BatchSize: number): MFilesAPI.ValueListItems;
		GetReferencedValueListItemsInIdOrder(ValueList: number, LastReceivedItemID: number, BatchSize: number, SearchConditions: SearchConditions): MFilesAPI.ValueListItems;
	}

	export interface VaultClassOperations extends IVaultClassOperations {
	}

	export interface IVaultClassOperations {
		GetObjectClasses(ObjectType: number): MFilesAPI.ObjectClasses;
		GetObjectClass(ObjectClass: number): MFilesAPI.ObjectClass;
		GetAllObjectClasses(): MFilesAPI.ObjectClasses;
		AddObjectClassAdmin(ObjectClassAdmin: ObjectClassAdmin): MFilesAPI.ObjectClassAdmin;
		RemoveObjectClassAdmin(ObjectClassID: number): void;
		UpdateObjectClassAdmin(ObjectClass: ObjectClassAdmin): void;
		GetAllObjectClassesAdmin(): MFilesAPI.ObjectClassesAdmin;
		GetObjectClassesAdmin(ObjectType: number): MFilesAPI.ObjectClassesAdmin;
		GetObjectClassAdmin(Class: number): MFilesAPI.ObjectClassAdmin;
		GetObjectClassIDByAlias(Alias: string): number;
		GetObjectClassIDByGUID(ObjectClassGUID: string): number;
		UpdateObjectNames(ObjectClassID: number): void;
	}

	export interface VaultClassGroupOperations extends IVaultClassGroupOperations {
	}

	export interface IVaultClassGroupOperations {
		GetClassGroups(ObjectType: number): MFilesAPI.ClassGroups;
		AddClassGroup(ClassGroup: ClassGroup): MFilesAPI.ClassGroup;
		RemoveClassGroup(ClassGroupID: number): void;
		UpdateClassGroup(ClassGroup: ClassGroup): void;
		GetClassGroup(ObjectType: number, ClassGroupID: number): MFilesAPI.ClassGroup;
		GetClassGroupIDByGUID(ClassGroupGUID: string): number;
	}

	export interface VaultWorkflowOperations extends IVaultWorkflowOperations {
	}

	export interface IVaultWorkflowOperations {
		GetWorkflowsAsValueListItems(UpdateFromServer?: boolean): MFilesAPI.ValueListItems;
		GetWorkflowStates(Workflow: number, CurrentState?: TypedValue): MFilesAPI.States;
		GetWorkflowsForClient(UpdateFromServer?: boolean): MFilesAPI.Workflows;
		AddWorkflowAdmin(Workflow: WorkflowAdmin): MFilesAPI.WorkflowAdmin;
		RemoveWorkflowAdmin(WorkflowID: number): void;
		UpdateWorkflowAdmin(Workflow: WorkflowAdmin): MFilesAPI.WorkflowAdmin;
		GetWorkflowsAdmin(): MFilesAPI.WorkflowsAdmin;
		GetWorkflowForClient(WorkflowID: number, UpdateFromServer?: boolean): MFilesAPI.Workflow;
		GetWorkflowAdmin(WorkflowID: number): MFilesAPI.WorkflowAdmin;
		GetWorkflowStatesEx(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer): MFilesAPI.States;
		GetWorkflowIDByAlias(Alias: string): number;
		GetWorkflowStateIDByAlias(Alias: string): number;
		GetStateTransitionSignatureSettings(FromState: number, ToState: number): MFilesAPI.SignatureSettings;
		GetWorkflowIDByGUID(WorkflowGUID: string): number;
		GetWorkflowStateIDByGUID(StateGUID: string): number;
		GetWorkflowStateTransitionsAsJSON(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer): string;
		GetWorkflowStateTransitions(Workflow: number, CurrentState?: TypedValue): MFilesAPI.StateTransitionsForClient;
		GetWorkflowStateTransitionsEx(Workflow: number, CurrentState?: TypedValue, ObjVer?: ObjVer): MFilesAPI.StateTransitionsForClient;
		GetWorkflowStateTransitionIDByAlias(Alias: string): number;
		GetWorkflowStateTransitionIDByGUID(StateTransitionGUID: string): number;
		GetStateTransitionSignatureSettingsByID(StateTransitionID: number): MFilesAPI.SignatureSettings;
	}

	export interface VaultViewOperations extends IVaultViewOperations {
	}

	export interface IVaultViewOperations {
		GetViews(ViewCategory?: MFilesAPI.MFViewCategory, AllViews?: boolean, ParentView?: number): MFilesAPI.Views;
		GetView(View: number): MFilesAPI.View;
		GetFolderNameListing(ExpressionEx: ExpressionEx, SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean): MFilesAPI.FolderNameListing;
		GetViewLocationInClient(View: number, IncludeViewNameInPath?: boolean): string;
		FindPropertyFolderLocationInView(View: number, PropertyFolders: TypedValues): string;
		ShowViewOrPropertyFolder(ParentWindow: number, View: number, PropertyFolders?: TypedValues): void;
		AddView(View: View): MFilesAPI.View;
		UpdateView(View: View): MFilesAPI.View;
		RemoveView(View: number): void;
		AddOfflineFilter(OfflineFilter: View): MFilesAPI.View;
		GetBuiltInView(BuiltInView: MFilesAPI.MFBuiltInView): MFilesAPI.View;
		AddTemporarySearchView(View: View, SearchCriteria: SearchCriteria, Reserved?: SearchConditions): MFilesAPI.View;
		GetTemporarySearchView(ViewID: number): MFilesAPI.TemporarySearchView;
		GetMFilesURLForView(ViewID: number, PropertyFolders?: TypedValues, SimpleURL?: boolean): string;
		GetFolderContents(FolderLocation: FolderDefs): MFilesAPI.FolderContentItems;
		GetViewIDByGUID(ViewGUID: string): number;
		GetViewsAdmin(IncludeCommonViews: boolean, UserID: number): MFilesAPI.Views;
		GetFolderUIStateForFolder(CommonState: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean): MFilesAPI.FolderUIState;
		ResetFolderUIStateForFolder(ResetToProgramDefaults: boolean, ResetToCommonDefaults: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean): MFilesAPI.FolderUIState;
		SaveFolderUIStateForFolder(SaveAsCommonSettings: boolean, ResetCommonSettingsToAllUsers: boolean, FolderLocation: FolderDefs, ObjectFolder: boolean, State: FolderUIState): void;
		GetFolderUIStateForSpecialLocation(CommonState: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType): MFilesAPI.FolderUIState;
		ResetFolderUIStateForSpecialLocation(ResetToProgramDefaults: boolean, ResetToCommonDefaults: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType): MFilesAPI.FolderUIState;
		SaveFolderUIStateForSpecialLocation(SaveAsCommonSettings: boolean, ResetCommonSettingsToAllUsers: boolean, LocationType: MFilesAPI.MFFolderUIStateLocationType, State: FolderUIState): void;
		GetPropertyValuesOfFolder(FolderLocation: FolderDefs, ObjectType: number): MFilesAPI.PropertyValues;
		GetPropertyValuesOfPath(Path: string, ObjectType: number): MFilesAPI.PropertyValues;
		GetTemporarySearchByPath(RelativePath: string): MFilesAPI.TemporarySearchView;
		ModifyTemporarySearch(TemporarySearchView: TemporarySearchView): void;
		GetIconAsBytes(ExternalRepository: string, IconID: string, Size: number): number[];
		GetFolder(FolderID: FolderID): MFilesAPI.FolderData;
		AddTemporarySearchViewEx(View: View, SearchCriteria: SearchCriteria, ForceUsingAdvancedSearchConds: boolean): MFilesAPI.View;
	}

	export interface VaultUserOperations extends IVaultUserOperations {
	}

	export interface IVaultUserOperations {
		GetUserList(): MFilesAPI.KeyNamePairs;
		GetUserAccounts(): MFilesAPI.UserAccounts;
		ModifyUserAccount(User: UserAccount): void;
		AddUserAccount_DEPRECATED(User: UserAccount): number;
		RemoveUserAccount(UserID: number): void;
		GetUserAccount(UserID: number): MFilesAPI.UserAccount;
		AddUserAccount(User: UserAccount): MFilesAPI.UserAccount;
		AddOrUndeleteUserAccount(User: UserAccount): MFilesAPI.UserAccount;
		GetUserIDByGUID(UserGUID: string): number;
		GetLoginAccountOfUser(UserID: number): MFilesAPI.LoginAccount;
		GetLoginAccounts(): MFilesAPI.LoginAccounts;
		UndeleteUserAccountByGUID(UserAccountGUIDToUndelete: string, User: UserAccount): MFilesAPI.UserAccount;
	}

	export interface VaultUserGroupOperations extends IVaultUserGroupOperations {
	}

	export interface IVaultUserGroupOperations {
		GetUserGroups(): MFilesAPI.UserGroups;
		GetUserGroupList(): MFilesAPI.KeyNamePairs;
		AddUserGroup_DEPRECATED(UserGroup: UserGroup): MFilesAPI.UserGroup;
		RemoveUserGroupAdmin(UserGroupID: number): void;
		UpdateUserGroup_DEPRECATED(UserGroup: UserGroup): void;
		GetUserGroupsAdmin(): MFilesAPI.UserGroupsAdmin;
		AddUserGroupAdmin(UserGroup: UserGroupAdmin): MFilesAPI.UserGroupAdmin;
		UpdateUserGroupAdmin(UserGroup: UserGroupAdmin): void;
		GetUserGroup(UserGroupID: number): MFilesAPI.UserGroup;
		GetUserGroupAdmin(UserGroupID: number): MFilesAPI.UserGroupAdmin;
		GetGroupsOfUserOrGroup(UserOrGroupID: number, IsGroup: boolean): MFilesAPI.UserGroups;
		GetUserGroupIDByAlias(Alias: string): number;
		GetUserGroupIDByGUID(UserGroupGUID: string): number;
		AddOrUndeleteUserGroup(UserGroup: UserGroupAdmin): MFilesAPI.UserGroupAdmin;
		GetUserContainersAdmin(): MFilesAPI.UserGroupsAdmin;
	}

	export interface VaultNamedACLOperations extends IVaultNamedACLOperations {
	}

	export interface IVaultNamedACLOperations {
		GetNamedACLs(): MFilesAPI.NamedACLs;
		AddNamedACL_DEPRECATED(NamedACL: NamedACL): MFilesAPI.NamedACL;
		RemoveNamedACLAdmin(NamedACLID: number): void;
		UpdateNamedACL_DEPRECATED(NamedACL: NamedACL): void;
		GetNamedACLsAdmin(): MFilesAPI.NamedACLsAdmin;
		AddNamedACLAdmin(NamedACLAdmin: NamedACLAdmin): MFilesAPI.NamedACLAdmin;
		UpdateNamedACLAdmin(NamedACLAdmin: NamedACLAdmin): void;
		GetNamedACL(NamedACLID: number): MFilesAPI.NamedACL;
		GetNamedACLAdmin(NamedACLID: number): MFilesAPI.NamedACLAdmin;
		IsNamedACLUsedInAutomaticPermissionsAdmin(NamedACLID: number): boolean;
		UpdateNamedACLWithPropagationAdmin(NamedACLAdmin: NamedACLAdmin, MaintainLinks?: boolean, AllowPropagation?: boolean): void;
		RemoveNamedACLWithPropagationAdmin(NamedACLID: number, AllowPropagation?: boolean): void;
		GetNamedACLsByTypeAdmin(Type?: MFilesAPI.MFNamedACLType): MFilesAPI.NamedACLsAdmin;
		GetMatchingNamedACLForAccessControlList(AccessControlList: AccessControlList, ExplicitLinkOnly?: boolean, ActiveAccessControlComponentsOnly?: boolean, RefreshFromServer?: boolean): MFilesAPI.NamedACL;
		GetMatchingNamedACLForAccessControlListComponent(AccessControlListComponent: AccessControlListComponent, ExplicitLinkOnly?: boolean, RefreshFromServer?: boolean): MFilesAPI.NamedACL;
		GetNamedACLsWithRefresh(RefreshFromServer?: boolean): MFilesAPI.NamedACLs;
		GetNamedACLWithRefresh(NamedACLID: number, RefreshFromServer?: boolean): MFilesAPI.NamedACL;
		GetNamedACLIDByAlias(Alias: string): number;
		GetNamedACLIDByGUID(NamedACLGUID: string): number;
	}

	export interface VaultTraditionalFolderOperations extends IVaultTraditionalFolderOperations {
	}

	export interface IVaultTraditionalFolderOperations {
		GetTraditionalFolderContents(Folder: number): MFilesAPI.TraditionalFolderContents;
	}

	export interface SessionInfo extends ISessionInfo {
	}

	export interface ISessionInfo {
		readonly UserID: number;
		readonly InternalUser: boolean;
		readonly ProductMode: MFilesAPI.MFProductMode;
		readonly LocalComputerName: string;
		readonly VaultGUID: string;
		readonly AccountName: string;
		readonly AuthenticationType: MFilesAPI.MFAuthType;
		readonly ServerVersion: number;
		readonly Language: number;
		readonly KeepAliveIntervalInSeconds: number;
		readonly UserAndSubstitutedByMe: UserOrUserGroupIDs;
		readonly UserAndGroupMemberships: UserOrUserGroupIDs;
		readonly CanManageCommonViews: boolean;
		readonly CanManageCommonUISettings: boolean;
		readonly CanManageTraditionalFolders: boolean;
		readonly CanCreateObjects: boolean;
		readonly CanSeeAllObjects: boolean;
		readonly CanSeeDeletedObjects: boolean;
		readonly LicenseAllowsModifications: boolean;
		readonly CanForceUndoCheckout: boolean;
		readonly TimeZoneInfo: TimeZoneInformation;
		readonly CanMaterializeViews: boolean;
		readonly ACLMode: MFilesAPI.MFACLMode;
		readonly UseSetBasedNotEqualComparisons: boolean;
		readonly ClientCulture: string;
		readonly IsSharingPublicLinksAllowed: boolean;
		readonly IsSharingPublicLinksToLatestVersionAllowed: boolean;
		readonly AutomaticMetadataEnabled: boolean;
		readonly ServerVaultCapabilities: ServerVaultCapabilities;
		readonly LoginHint: string;
		CheckPropertyDefAccess(PropertyDefAccessControlList: AccessControlList, DesiredPropertyDefAccess: MFilesAPI.MFPropertyDefAccess): boolean;
		CheckObjectTypeAccess(ObjectTypeAccessControlList: AccessControlList, DesiredObjectTypeAccess: MFilesAPI.MFObjectTypeAccess): boolean;
		IsLoggedOnUserSubstituteOfUser(UserID: number): boolean;
		CheckObjectAccess(ObjectAccessControlList: AccessControlList, DesiredObjectAccess: MFilesAPI.MFObjectAccess): boolean;
		CheckVaultAccess(DesiredVaultAccess: MFilesAPI.MFVaultAccess): boolean;
		CloneFrom(SessionInfo: SessionInfo): void;
	}

	export interface MFilesVersion extends IMFilesVersion {
	}

	export interface IMFilesVersion {
		Major: number;
		Minor: number;
		Build: number;
		Patch: number;
		SoftwarePlatform: MFilesAPI.MFSoftwarePlatformType;
		readonly Display: string;
		CompareTo(RightSide: MFilesVersion): number;
		Clone(): MFilesAPI.MFilesVersion;
	}

	export interface VaultClientOperations extends IVaultClientOperations {
	}

	export interface IVaultClientOperations {
		IsOffline(): boolean;
		IsOnline(): boolean;
		SetVaultToOffline(ParentWindow: number): MFilesAPI.MFOfflineTransitionResultFlags;
		SetVaultToOnline(ParentWindow: number): MFilesAPI.MFOnlineTransitionResultFlags;
		DisableCheckInReminderForCallingProcess(): void;
		EnableCheckInReminderForCallingProcess(): void;
	}

	export interface VaultObjectSearchOperations extends IVaultObjectSearchOperations {
	}

	export interface IVaultObjectSearchOperations {
		SearchForObjectsByExportedSearchConditionsXML(SearchString: string, SortResults: boolean): MFilesAPI.XMLSearchResult;
		SearchForObjectsByExportedSearchConditions(ExportedSearchString: string, SortResults: boolean): MFilesAPI.ObjectSearchResults;
		SearchForObjectsByString(SearchString: string, SortResults: boolean, FullTextSearchFlags: MFilesAPI.MFFullTextSearchFlags): MFilesAPI.ObjectSearchResults;
		SearchForObjectsByCondition(SearchCondition: SearchCondition, SortResults: boolean): MFilesAPI.ObjectSearchResults;
		SearchForObjectsByConditionsXML(SearchConditions: SearchConditions, SortResults: boolean): MFilesAPI.XMLSearchResult;
		SearchForObjectsByConditions(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean): MFilesAPI.ObjectSearchResults;
		SearchForObjectsByConditionsEx(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags, SortResults: boolean, MaxResultCount?: number, SearchTimeoutInSeconds?: number): MFilesAPI.ObjectSearchResults;
		GetObjectsInPath(RelativePath: string, SortResults: boolean, UpdateFromServer?: boolean): MFilesAPI.ObjectSearchResults;
		FindObjectVersionAndProperties(RelativePath: string, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionAndProperties;
		FindFile(RelativePath: string, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionFile;
		IsObjectPathInMFiles(RelativePath: string): boolean;
		GetFacetValues(SearchConditions: SearchConditions, Facets: Expressions, FacetValuesMaxCount: number, Flags: MFilesAPI.MFFacetSearchFlags): MFilesAPI.StringData;
		GetFacetValuesByPath(RelativePath: string, Facets: Expressions, FacetValuesMaxCount: number, Flags: MFilesAPI.MFFacetSearchFlags): MFilesAPI.StringData;
		GetObjectCountInSearch(SearchConditions: SearchConditions, SearchFlags: MFilesAPI.MFSearchFlags): number;
		GetSearchHits(Input: string, SearchCondition: SearchCondition): MFilesAPI.Strings;
	}

	export interface VaultManagementOperations extends IVaultManagementOperations {
	}

	export interface IVaultManagementOperations {
		RebuildFullTextSearchIndex(Metadata: boolean, FileContents: boolean): void;
		UpdateVaultProperties(VaultProperties: VaultProperties, RegistrationDataOnly?: boolean): void;
		GetEventHandlers(): MFilesAPI.EventHandlers;
		SetEventHandlers(EventHandlers: EventHandlers): void;
		ExportContent(ExportContentJob: ExportContentJob): void;
		ArchiveOldVersions(ArchiveOldVersionsJob: ArchiveOldVersionsJob): void;
		ImportContent(ImportContentJob: ImportContentJob): void;
		VerifyVault(VerifyVaultJob: VerifyVaultJob): MFilesAPI.VerifyVaultJobOutput;
		PreviewImportContent(ImportContentJob: ImportContentJob, SummaryFile: string): void;
		ImportContentAsync(ImportContentJob: ImportContentJob): number;
		WaitAsyncJob(JobID: number): void;
		IsAsyncJobRunning(JobID: number): boolean;
		GetVaultProperties(): MFilesAPI.VaultProperties;
		QueueAndWaitForLatestBackgroundTask(): void;
		IsGroundLinkProxy(): boolean;
	}

	export interface VaultUserSettingOperations extends IVaultUserSettingOperations {
	}

	export interface IVaultUserSettingOperations {
		GetSubstituteUsers(): MFilesAPI.UserOrUserGroupIDs;
		SetSubstituteUsers(UserOrUserGroupIDs: UserOrUserGroupIDs): void;
		GetVaultLanguage(): number;
		ChangeVaultLanguage(Language: number): void;
		GetVaultLanguageCode(): string;
		GetSubstituteUsersOfUser(UserID: number): MFilesAPI.UserOrUserGroupIDs;
		GetUsersBySubstituteUser(UserID: number): MFilesAPI.UserOrUserGroupIDs;
	}

	export interface Languages extends ILanguages {
		[index: number]: Language;
	}

	export interface ILanguages {
		readonly Count: number;
		Item(Index: number): MFilesAPI.Language;
	}

	export interface VaultNamedValueStorageOperations extends IVaultNamedValueStorageOperations {
	}

	export interface IVaultNamedValueStorageOperations {
		GetNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string): MFilesAPI.NamedValues;
		SetNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValues: NamedValues): void;
		RemoveNamedValues(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValueNames: Strings): void;
		SetNamedValuesIfUnmodified(NamedValueType: MFilesAPI.MFNamedValueType, Namespace: string, NamedValues: NamedValues, ExpectedValues: NamedValues): void;
	}

	export interface VaultDataSetOperations extends IVaultDataSetOperations {
	}

	export interface IVaultDataSetOperations {
		GetDataSets(): MFilesAPI.DataSets;
		GetReportAccessCredentials(): MFilesAPI.ReportAccessCredentials;
		StartDataSetExport(ID: number): void;
		GetDataSetExportingStatus(ID: number): MFilesAPI.DataSetExportingStatus;
	}

	export interface VaultEventLogOperations extends IVaultEventLogOperations {
	}

	export interface IVaultEventLogOperations {
		Clear(): void;
		IsLoggingEnabled(): boolean;
		SetLoggingEnabled(Enabled: boolean): void;
		ExportAll(): string;
		ExportRange(FirstEventID: number, LastEventID: number, DeleteEventsAfterExporting?: boolean): string;
		ClearRange(FirstEventID: number, LastEventID: number): void;
		ExportRange_32bit(FirstEventID: string, LastEventID: string, DeleteEventsAfterExporting?: boolean): string;
		ClearRange_32bit(FirstEventID: string, LastEventID: string): void;
		GetIDRange(): MFilesAPI.IDRange;
		AddCustomEventEntry(EventType: string, XmlData: string): number;
	}

	export interface VaultElectronicSignatureOperations extends IVaultElectronicSignatureOperations {
	}

	export interface IVaultElectronicSignatureOperations {
		AddEmptySignature(ObjVer: ObjVer, SignatureIdentifier: string): MFilesAPI.ObjectVersionAndProperties;
		AddEmptySignatures(ObjVer: ObjVer): MFilesAPI.ObjectVersionAndProperties;
		DisconnectSignature(ObjVer: ObjVer, SignatureIdentifier: string): MFilesAPI.ObjectVersionAndProperties;
		DisconnectSignatures(ObjVer: ObjVer): MFilesAPI.ObjectVersionAndProperties;
		DisconnectSignatureEx(ObjVer: ObjVer, SignatureIdentifier: string, InvalidateDisconnectedSignatures: boolean): MFilesAPI.ObjectVersionAndProperties;
		DisconnectSignaturesEx(ObjVer: ObjVer, InvalidateDisconnectedSignatures: boolean): MFilesAPI.ObjectVersionAndProperties;
	}

	export interface VaultScheduledJobManagementOperations extends IVaultScheduledJobManagementOperations {
	}

	export interface IVaultScheduledJobManagementOperations {
		GetScheduledJobs(): MFilesAPI.ScheduledJobs;
		GetScheduledJob(ID: number): MFilesAPI.ScheduledJob;
		GetScheduledJobRunInfo(ID: number): MFilesAPI.ScheduledJobRunInfo;
		StartScheduledJob(ID: number): void;
		CancelScheduledJob(ID: number): void;
		AddScheduledJob(ScheduledJob: ScheduledJob): number;
		ModifyScheduledJob(ScheduledJob: ScheduledJob): void;
		RemoveScheduledJob(ID: number): void;
	}

	export interface VaultCustomApplicationManagementOperations extends IVaultCustomApplicationManagementOperations {
	}

	export interface IVaultCustomApplicationManagementOperations {
		GetCustomApplications(): MFilesAPI.CustomApplications;
		EnableCustomApplication(ApplicationID: string, Enabled: boolean): void;
		InstallCustomApplication(File: string): void;
		UninstallCustomApplication(ApplicationID: string): void;
		GetCustomApplication(ApplicationID: string): MFilesAPI.CustomApplication;
		DownloadCustomApplicationBlockBegin(ApplicationID: string): MFilesAPI.FileDownloadSession;
		DownloadCustomApplicationBlockBegin_32bit(ApplicationID: string): MFilesAPI.FileDownloadSession;
		DownloadCustomApplicationBlock(DownloadID: number, BlockSize: number, Offset: number): number[];
		DownloadCustomApplicationBlock_32bit(DownloadID: number, BlockSize: number, Offset: number): number[];
		GetCustomApplicationsEx(Platform: MFilesAPI.MFExtApplicationPlatform): MFilesAPI.CustomApplications;
		InstallCustomApplicationLicense(ApplicationID: string, NewLicenseContent: string): void;
		GetCustomApplicationLicenseStatus(ApplicationID: string): MFilesAPI.MFApplicationLicenseStatus;
		GetCustomApplicationNewLicenseStatus(ApplicationID: string, NewLicenseContent: string): MFilesAPI.MFApplicationLicenseStatus;
		GetCustomApplicationLicenseDetails(ApplicationID: string): string;
		GetCustomApplicationNewLicenseDetails(ApplicationID: string, NewLicenseContent: string): string;
		GetCustomApplicationsEx2(Type: MFilesAPI.MFCustomApplicationType, Platform: MFilesAPI.MFExtApplicationPlatform): MFilesAPI.CustomApplications;
		EnableCustomApplicationInVault(ApplicationID: string, Enabled: boolean): void;
	}

	export interface VaultExtensionMethodOperations extends IVaultExtensionMethodOperations {
	}

	export interface IVaultExtensionMethodOperations {
		ExecuteVaultExtensionMethod(MethodIdentifier: string, Input: string): string;
		DoesActiveVaultExtensionMethodExist(MethodIdentifier: string): boolean;
		ExecuteVaultExtensionMethodEx(ApplicationGuid: string, Extension: string, Instance: string, Method: string, Input: string): string;
	}

	export interface VaultNotificationOperations extends IVaultNotificationOperations {
	}

	export interface IVaultNotificationOperations {
		SendCustomNotification(UserOrUserGroupIDs: UserOrUserGroupIDs, IncludeSubstituteUsers: boolean, ExternalRecipients: Strings, SendWithServerEmailIdentity: boolean, Subject: string, Body: string): void;
		GetNotificationRuleNamesByID(): MFilesAPI.KeyNamePairs;
	}

	export interface VaultServerDataPushOperations extends IVaultServerDataPushOperations {
	}

	export interface IVaultServerDataPushOperations {
		SetServerDataPushSink(ServerDataPushSink: IServerDataPushSink): void;
		SendResponse(RequestID: number, JsonResponseContent: string): void;
		SendError(RequestID: number, Error: string): void;
		SendCancel(RequestID: number): void;
		SendHeartbeat(RequestID: number): void;
		CloneVaultForServerDataPush(ServerDataPushSink: IServerDataPushSink): MFilesAPI.Vault;
	}

	export interface VaultLoginAccountOperations extends IVaultLoginAccountOperations {
	}

	export interface IVaultLoginAccountOperations {
		GetLoginAccounts(): MFilesAPI.LoginAccounts;
		GetLoginAccount(AccountName: string): MFilesAPI.LoginAccount;
		ModifyLoginAccount(LoginAccount: LoginAccount): void;
		RemoveLoginAccount(AccountName: string): void;
		AddLoginAccount(LoginAccount: LoginAccount, Password?: string): void;
		GetPersonalInformationFromDomain(AccountName: string): MFilesAPI.LoginAccountPersonalInformation;
		UpdateLoginPassword(AccountName: string, NewPassword: string): void;
		GetPasswordHash(AccountName: string): string;
		SetPasswordHash(AccountName: string, PasswordHash: string): void;
		GetLoginAccountsWithSessions(): MFilesAPI.LoginAccounts;
		ForceLogout(AccountNames: Strings): void;
		CreatePasswordResetRequest(AccountName: string, AccountEmailAddress: string, SiteUrl: string, SendEmail: boolean): string;
		ResetPassword(AccountName: string, ExpirationTime: string, ResetPasswordHash: string, NewPassword: string): void;
		ModifyLoginAccountEx(AccountName: string, AllowChangingUsername: boolean, LoginAccount: LoginAccount): void;
	}

	export interface VaultAutomaticMetadataOperations extends IVaultAutomaticMetadataOperations {
	}

	export interface IVaultAutomaticMetadataOperations {
		GetAutomaticMetadataForTemporaryFile(UploadSessionID: number): MFilesAPI.AutomaticMetadataResult;
		GetAutomaticMetadataForTemporaryFiles(IIDs: IDs): MFilesAPI.AutomaticMetadataResult;
		GetAutomaticMetadataForObject(ObjVer: ObjVer): MFilesAPI.AutomaticMetadataResult;
		GetAutomaticMetadata(IIDs: IDs, ObjectType: number, ObjVer: ObjVer, PropertyValues: PropertyValues, SuggestionProviders: Strings, CustomData: string): MFilesAPI.AutomaticMetadataResult;
		DetectTextLanguage(TextContent: string): string;
		DetectTextLanguageEx(TextContent: string): MFilesAPI.LanguageDetectionResult;
	}

	export interface VaultSharedLinkOperations extends IVaultSharedLinkOperations {
	}

	export interface IVaultSharedLinkOperations {
		CreateSharedLink(SharedLinkCreationInfo: SharedLinkInfo): MFilesAPI.SharedLinkInfo;
		DeleteSharedLink(AccessKey: string): void;
		GetSharedLink(AccessKey: string): MFilesAPI.SharedLinkInfo;
		GetSharedLinks(CreatedByUser?: number): MFilesAPI.SharedLinkInfos;
		GetSharedLinksByObject(ObjID: ObjID): MFilesAPI.SharedLinkInfos;
	}

	export interface VaultExternalObjectOperations extends IVaultExternalObjectOperations {
	}

	export interface IVaultExternalObjectOperations {
		PromoteObject(ObjVer: ObjVer, PropertyValues: PropertyValues, ACLEnforcingMode?: MFilesAPI.MFACLEnforcingMode, pACLProvidedCBN?: AccessControlList): MFilesAPI.ObjectVersionAndProperties;
		ResolveManagedIDOfPromotedObject(objIdUnmanaged: ObjID): MFilesAPI.ObjID;
		DemoteObjects(ObjIDs: ObjIDs): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
		MigrateObject(MigrateObjectParams: MigrateObjectParams): MFilesAPI.MigrationResult;
		GetPromotedObjects(ExternalRepository?: string, LastSeenObjectID?: ObjID, MaxResultCount?: number): MFilesAPI.ObjIDPairs;
	}

	export interface LicenseStatus extends ILicenseStatus {
	}

	export interface ILicenseStatus {
		readonly EvaluationMode: boolean;
		readonly Expired: boolean;
		readonly EvaluationDaysLeft: number;
		readonly SerialNumber: string;
		readonly LicenseCode: string;
		readonly NumOfNamedUserLicenses: number;
		readonly NumOfConcurrentUserLicenses: number;
		readonly NumOfReadonlyLicenses: number;
		ClearLicenseCode(): void;
	}

	export interface VaultExtensionAuthenticationOperations extends IVaultExtensionAuthenticationOperations {
	}

	export interface IVaultExtensionAuthenticationOperations {
		GetExtensionAuthenticationTargets(): MFilesAPI.ExtensionAuthenticationTargets;
		LogInWithExtensionAuthentication(TargetID: string, ExtensionAuthenticationResponse: ExtensionAuthenticationResponse): void;
		LogOutWithExtensionAuthentication(TargetID: string): void;
		LogInAsDifferentUserForExtensionAuthentication(TargetID: string): void;
		GetExtensionAuthenticationStatus(): MFilesAPI.ExtensionAuthenticationStatuses;
		StoreExtensionAuthenticationSpecialCredentials(ExtensionAuthenticationSpecialUserType: MFilesAPI.MFExtensionAuthenticationSpecialUserType, TargetID: string, ExtensionAuthenticationResponse: ExtensionAuthenticationResponse): void;
		RemoveExtensionAuthenticationSpecialCredentials(ExtensionAuthenticationSpecialUserType: MFilesAPI.MFExtensionAuthenticationSpecialUserType, TargetID: string): void;
	}

	export interface VaultUserOperationsEx extends IVaultUserOperationsEx {
	}

	export interface IVaultUserOperationsEx {
		SearchForUserAccount(AccountName: string): MFilesAPI.UserAccounts;
		AddMemberToUserGroup(UserGroup: number, MemberID: number): void;
		RemoveMemberFromUserGroup(UserGroup: number, MemberID: number): void;
	}

	export interface VaultApplicationTaskOperations extends IVaultApplicationTaskOperations {
	}

	export interface IVaultApplicationTaskOperations {
		OpenTaskQueue(QueueID: string, QueueProcessingBehavior: MFilesAPI.MFTaskQueueProcessingBehavior): void;
		AddTask(QueueID: string, RestoreToWaitingTimeoutInMinutes: number, TaskType: string, TaskData: number[]): string;
		ReserveTasksForProcessing(QueueIDCollection: Strings): MFilesAPI.ApplicationTaskInfos;
		UpdateTask(TaskID: string, NewState: MFilesAPI.MFTaskState, Progress: string): void;
		GetTaskQueues(): MFilesAPI.Strings;
		GetTaskIDsFromQueue(QueueID: string, States: IDs): MFilesAPI.Strings;
		GetTasks(TaskIDCollection: Strings): MFilesAPI.ApplicationTaskInfos;
		SendBroadcastMessage(QueueID: string, TaskType: string, TaskData: number[]): void;
		GetLatestBroadcastMessageIdentifiers(QueueIDCollection: Strings): MFilesAPI.Strings;
		ClearAndDestroyTaskQueue(QueueID: string): void;
		GetNewBroadcastMessages(QueueID: string, LatestBroadcastMessageID: string): MFilesAPI.ApplicationBroadcastMessages;
		AddScheduledTask(QueueID: string, RestoreToWaitingTimeoutInMinutes: number, TaskType: string, TaskData: number[], ActivationTimestamp: Timestamp): string;
	}

	export interface VaultDocumentComparisonOperations extends IVaultDocumentComparisonOperations {
	}

	export interface IVaultDocumentComparisonOperations {
		Compare(ObjIdOriginal: ObjID, FileVerOriginal: FileVer, ObjIdModified: ObjID, FileVerModified: FileVer, Language: string, AllowDownload: boolean): string;
		CompareWithTemporaryFile(ObjIdOriginal: ObjID, FileVerOriginal: FileVer, UploadSessionID: number, UploadFileName: string, Language: string, AllowDownload: boolean): string;
		AllowDocumentComparison(): boolean;
	}

	export interface ObjType extends IObjectType {
	}

	export interface IObjectType {
		ID: number;
		NameSingular: string;
		NamePlural: string;
		Icon: number[];
		RealObjectType: boolean;
		Hierarchical: boolean;
		HasOwnerType: boolean;
		OwnerType: number;
		OwnerPropertyDef: number;
		CanHaveFiles: boolean;
		AllowAdding: boolean;
		External: boolean;
		ShowCreationCommandInTaskPane: boolean;
		DefaultPropertyDef: number;
		AccessControlList: AccessControlList;
		readonly ReadOnlyPropertiesDuringInsert: IDs;
		readonly ReadOnlyPropertiesDuringUpdate: IDs;
		ObjectTypeTargetsForBrowsing: ObjectTypeTargetsForBrowsing;
		DefaultAccessControlList: AccessControlList;
		readonly SupportsStartsWithAtWordBoundarySearches: boolean;
		readonly GUID: string;
		Translatable: boolean;
		AllowedAsGroupingLevel: boolean;
		readonly TitlePropertyID: number;
		GetIconAsPNG(Width: number, Height: number): number[];
		Clone(): MFilesAPI.ObjType;
		CanHaveItemIcons(): boolean;
		IsAddingAllowedForUser(SessionInfo: SessionInfo): boolean;
	}

	export interface ObjTypes extends IObjectTypes {
		[index: number]: any;
	}

	export interface IObjectTypes {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjType;
		Clone(): MFilesAPI.ObjTypes;
	}

	export interface ObjTypeAdmin extends IObjectTypeAdmin {
	}

	export interface IObjectTypeAdmin {
		ObjectType: ObjType;
		DefaultAccessControlList: AccessControlList;
		ConnectionString: string;
		SelectStatement: string;
		SelectStatementOneRecord: string;
		InsertIntoStatement: string;
		SelectExtIDStatement: string;
		UpdateStatement: string;
		DeleteStatement: string;
		ColumnMappings: ObjTypeColumnMappings;
		Translatable: boolean;
		DefaultForAutomaticPermissions: AutomaticPermissions;
		SemanticAliases: SemanticAliases;
		NamedValueNamespaces: NamedValueNamespaces;
		Clone(): MFilesAPI.ObjTypeAdmin;
	}

	export interface ObjTypesAdmin extends IObjectTypesAdmin {
		[index: number]: any;
	}

	export interface IObjectTypesAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjTypeAdmin;
	}

	export interface IDs extends IIDs {
		[index: number]: number;
	}

	export interface IIDs {
		readonly Count: number;
		Item(Index: number): number;
		Add(Index: number, ID: number): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.IDs;
		IndexOf(ID: number): number;
		RemoveAll(ID: number): number;
	}

	export interface ObjectTypeTargetsForBrowsing extends IObjectTypeTargetsForBrowsing {
		[index: number]: ObjectTypeTargetForBrowsing;
	}

	export interface IObjectTypeTargetsForBrowsing {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectTypeTargetForBrowsing;
		Add(Index: number, ObjectTypeTargetForBrowsing: ObjectTypeTargetForBrowsing): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectTypeTargetsForBrowsing;
	}

	export interface ObjectTypeTargetForBrowsing extends IObjectTypeTargetForBrowsing {
	}

	export interface IObjectTypeTargetForBrowsing {
		TargetObjectType: number;
		ViewCollection: number;
		Clone(): MFilesAPI.ObjectTypeTargetForBrowsing;
	}

	export interface TimeZoneInformation extends ITimeZoneInformation {
	}

	export interface ITimeZoneInformation {
		readonly StandardName: string;
		LoadWithCurrentTimeZone(): void;
		LoadTimeZoneByName(TimeZoneName: string): void;
		LoadTimeZoneByIndex(Index: number): void;
		Clone(): MFilesAPI.TimeZoneInformation;
	}

	export interface ServerVaultCapabilities extends IServerVaultCapabilities {
	}

	export interface IServerVaultCapabilities {
		readonly VaultLoginAccountsSupported: boolean;
		readonly PublicLinkSharingSupported: boolean;
		readonly LatestVersionPublicLinkSharingSupported: boolean;
		readonly FacetSearchSupported: boolean;
		readonly PropertyDefSearchabilitySupported: boolean;
		readonly AutomaticMetadataSupported: boolean;
		readonly FileStreamingSupported: boolean;
		readonly SearchOptionsSupported: boolean;
		readonly JSONExtApplicationsSupported: boolean;
		readonly SearchReferencedValueListItemsSupported: boolean;
		readonly GetTextContentWithOptionsSupported: boolean;
		readonly DetectTextLanguageSupported: boolean;
		readonly ObjectDataRetrievalInChunksSupported: boolean;
		readonly SettingsManagerSupported: boolean;
		readonly ExternalRepositoryObjectMigrationSupported: boolean;
		readonly ClientHttpApiSupported: boolean;
		readonly ReverseGroupingLevelSupported: boolean;
		readonly ReplicationConfigurationIDSupported: boolean;
		readonly AsyncNACLChangePropagationSupported: boolean;
		readonly AsyncTasksRetrievalSupported: boolean;
		readonly FindDuplicatesSupported: boolean;
		readonly FavorFullTextSearchSupported: boolean;
		readonly ApplicationTaskQueueSupported: boolean;
		readonly ObjectPermissionsForClientSupported: boolean;
		readonly UndeleteUserAccountByGUIDSupported: boolean;
		readonly UseUserVisibleACLInSearches: boolean;
		readonly NamedValueStorageConflictDetectionSupported: boolean;
		readonly HierarchicalObjectTypePropertiesSupported: boolean;
		readonly EmbeddingToSharePointSupported: boolean;
		readonly EmbeddingToSalesforceSupported: boolean;
		readonly AsyncModifyObjectClassSupported: boolean;
		readonly WebUserInterfaceSupported: boolean;
		readonly RemoveFromRecentsSupported: boolean;
		readonly EmbeddingToGoogleGSuiteSupported: boolean;
		readonly FullControlVaultUserCanModifyCodeSupported: boolean;
		readonly EmbeddingToArcGisSupported: boolean;
		Clone(): MFilesAPI.ServerVaultCapabilities;
	}

	export interface ObjTypeColumnMappings extends IObjectTypeColumnMappings {
		[index: number]: any;
	}

	export interface IObjectTypeColumnMappings {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjTypeColumnMapping;
		Add(Index: number, ObjectTypeColumnMapping: ObjTypeColumnMapping): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjTypeColumnMappings;
	}

	export interface AutomaticPermissions extends IAutomaticPermissions {
	}

	export interface IAutomaticPermissions {
		readonly NamedACL: NamedACL;
		readonly IsDefault: boolean;
		readonly IsBasedOnObjectACL: boolean;
		CanDeactivate: boolean;
		SetNamedACL(NamedACL: NamedACL): void;
		SetBasedOnObjectACL(): void;
		Clone(): MFilesAPI.AutomaticPermissions;
	}

	export interface SemanticAliases extends ISemanticAliases {
	}

	export interface ISemanticAliases {
		Value: string;
		Clone(): MFilesAPI.SemanticAliases;
	}

	export interface NamedValueNamespaces extends INamedValueNamespaces {
		[index: number]: NamedValueNamespace;
	}

	export interface INamedValueNamespaces {
		readonly Count: number;
		Item(Index: number): MFilesAPI.NamedValueNamespace;
		Add(Index: number, NamedValueNamespace: NamedValueNamespace): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.NamedValueNamespaces;
	}

	export interface ObjTypeColumnMapping extends IObjectTypeColumnMapping {
	}

	export interface IObjectTypeColumnMapping {
		ObjectType: number;
		Ordinal: number;
		TargetPropertyDef: number;
		SourceField: string;
		Type: number;
		PartOfInsert: boolean;
		PartOfUpdate: boolean;
		Clone(): MFilesAPI.ObjTypeColumnMapping;
	}

	export interface NamedACL extends INamedACL {
	}

	export interface INamedACL {
		ID: number;
		Name: string;
		AccessControlList: AccessControlList;
		AccessControlListForNamedACL: AccessControlList;
		readonly NamedACLType: MFilesAPI.MFNamedACLType;
		readonly GUID: string;
		Clone(): MFilesAPI.NamedACL;
	}

	export interface NamedValueNamespace extends INamedValueNamespace {
	}

	export interface INamedValueNamespace {
		NamespaceName: string;
		NamedValues: NamedValues;
		Clone(): MFilesAPI.NamedValueNamespace;
	}

	export interface ObjectWindowResult extends IObjectWindowResult {
	}

	export interface IObjectWindowResult {
		readonly Result: MFilesAPI.MFObjectWindowResultCode;
		readonly Properties: PropertyValues;
		readonly Visible: boolean;
		readonly SelectedFileClass: FileClass;
		readonly ObjVer: ObjVer;
		readonly AccessControlList: AccessControlList;
		readonly UseAsDefaults: boolean;
	}

	export interface ObjectCreationInfo extends IObjectCreationInfo {
	}

	export interface IObjectCreationInfo {
		SkipThisButtonVisible: boolean;
		OkToAllButtonVisible: boolean;
		ObjectGUID: string;
		IsObjectShortcut: boolean;
		ExplicitObjectID: number;
		DisallowTemplateSelection: boolean;
		SetTitle(Title: TypedValue, Editable: boolean): void;
		GetTitle(): MFilesAPI.TypedValue;
		SetExtension(Extension: string, Editable: boolean): void;
		GetExtension(): string;
		SetObjectType(ObjectType: number, Editable: boolean): void;
		GetObjectType(): number;
		SetDisableObjectCreation(Disable: boolean): void;
		GetDisableObjectCreation(): boolean;
		SetSingleFileDocument(SingleFile: boolean, Editable: boolean): void;
		GetSingleFileDocument(): boolean;
		SetSelectedFileClass(FileClass: FileClass, Editable: boolean): void;
		GetSelectedFileClass(): MFilesAPI.FileClass;
		SetSelectableFileClasses(FileClasses: FileClasses): void;
		GetSelectableFileClasses(): MFilesAPI.FileClasses;
		SetSourceFiles(SourceFiles: SourceObjectFiles): void;
		GetSourceFiles(): MFilesAPI.SourceObjectFiles;
		SetMetadataCardTitle(MetadataCardTitle: string): void;
		GetMetadataCardTitle(): string;
		SetHideGeneralFrame(HideGeneralFrame: boolean): void;
		GetHideGeneralFrame(): boolean;
		SetTemplate(Template: ObjVer): void;
		GetTemplate(): MFilesAPI.ObjVer;
		SetTitleAsDatatypeText(Title: string, Editable: boolean): void;
		GetTitleAsText(): string;
		SetUseAsDefaults(UseAsDefaults: boolean, Editable: boolean): void;
		GetUseAsDefaults(): boolean;
	}

	export interface ObjVer extends IObjVer {
	}

	export interface IObjVer {
		Type: number;
		ID: number;
		ObjID: ObjID;
		Version: number;
		ExternalRepositoryName: string;
		ExternalRepositoryObjectID: string;
		VersionEx: ObjVerVersion;
		SetIDs(ObjType: number, ID: number, Version: number): void;
		SetObjIDAndVersion(ObjID: ObjID, Version: number): void;
		Clone(): MFilesAPI.ObjVer;
		Serialize(): number[];
		Unserialize(Bytes: number[]): void;
		CloneFrom(ObjVer: ObjVer): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		SetSpecificVersion(ObjType: number, ID: number, Version: number): void;
		SetLatestVersion(ObjType: number, ID: number): void;
		IsSpecific(): boolean;
		IsLatest(): boolean;
		Set(ObjID: ObjID, ObjVerVersion: ObjVerVersion): void;
		SetLatestVersionEx(ObjID: ObjID): void;
		EqualTo(pIObjVer: ObjVer): boolean;
	}

	export interface ObjectVersionAndProperties extends IObjectVersionAndProperties {
	}

	export interface IObjectVersionAndProperties {
		readonly ObjVer: ObjVer;
		readonly VersionData: ObjectVersion;
		readonly Properties: PropertyValues;
		readonly Vault: Vault;
		Clone(): MFilesAPI.ObjectVersionAndProperties;
	}

	export interface PropertyValues extends IPropertyValues {
		[index: number]: PropertyValue;
	}

	export interface IPropertyValues {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValue;
		SearchForProperty(PropertyDef: number): MFilesAPI.PropertyValue;
		Add(Index: number, PropertyValue: PropertyValue): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.PropertyValues;
		IndexOf(PropertyDef: number): number;
		CloneFrom(PropertyValues: PropertyValues): void;
		SearchForPropertyEx(PropertyDef: number, ReturnNULLIfNotFound: boolean): MFilesAPI.PropertyValue | null;
		SearchForPropertyByAlias(Vault: Vault, PropertyDefAlias: string, ReturnNULLIfNotFound: boolean): MFilesAPI.PropertyValue;
		IndexOfByAlias(Vault: Vault, PropertyDefAlias: string): number;
		ToJSON(): string;
		FromJSON(Json: string): void;
		EqualTo(pIPropertyValues: PropertyValues): boolean;
	}

	export interface SourceObjectFiles extends ISourceObjectFiles {
		[index: number]: SourceObjectFile;
	}

	export interface ISourceObjectFiles {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SourceObjectFile;
		Add(Index: number, SourceObjectFile: SourceObjectFile): void;
		Remove(Index: number): void;
		AddFile(Title: string, Extension: string, SourcePath: string): MFilesAPI.SourceObjectFile;
		AddEmptyFile(Title: string, Extension: string): MFilesAPI.SourceObjectFile;
	}

	export interface ObjectVersion extends IObjectVersion {
	}

	export interface IObjectVersion {
		readonly Title: string;
		readonly SingleFile: boolean;
		readonly CreatedUtc: Date;
		readonly LastModifiedUtc: Date;
		readonly FilesCount: number;
		readonly Files: ObjectFiles;
		readonly Deleted: boolean;
		readonly CheckedOutVersion: number;
		readonly CheckedOutTo: number;
		readonly CheckedOutToUserName: string;
		readonly CheckedOutToHostName: string;
		readonly CheckedOutAtUtc: Date;
		readonly LatestCheckedInVersion: number;
		readonly HasRelationshipsFromThis: boolean;
		readonly HasRelationshipsToThis: boolean;
		readonly ObjVer: ObjVer;
		readonly DisplayID: string;
		readonly DisplayIDAvailable: boolean;
		readonly ObjectCheckedOut: boolean;
		readonly ObjectCheckedOutToThisUser: boolean;
		readonly ThisVersionCheckedOut: boolean;
		readonly ThisVersionLatestToThisUser: boolean;
		readonly LatestCheckedInVersionOrCheckedOutVersion: boolean;
		readonly VisibleAfterOperation: boolean;
		readonly HasAssignments: boolean;
		readonly ObjectVersionFlags: MFilesAPI.MFObjectVersionFlag;
		readonly Class: number;
		readonly IsStub: boolean;
		readonly ObjectGUID: string;
		readonly IsAccessedByMeValid: boolean;
		readonly AccessedByMeUtc: Date;
		readonly VersionGUID: string;
		readonly OriginalVaultGUID: string;
		readonly OriginalObjID: ObjID;
		readonly ObjectFlags: MFilesAPI.MFSpecialObjectFlag;
		readonly IsObjectShortcut: boolean;
		readonly IsObjectConflict: boolean;
		readonly HasSharedFiles: boolean;
		readonly ObjectCheckedOutToThisUserOnThisComputer: boolean;
		readonly ObjectCheckedOutToThisUserOnAnyComputer: boolean;
		readonly ObjectCapabilityFlags: MFilesAPI.MFObjectCapabilityFlag;
		readonly LatestCheckedInObjVerVersion: ObjVerVersion;
		readonly BaseProperties: PropertyValues;
		readonly AssociatedFolderID: FolderID;
		readonly IconID: string;
		readonly CurrentUser: number;
		readonly HostName: string;
		Clone(): MFilesAPI.ObjectVersion;
		GetNameForFileSystem(IncludeID?: boolean): string;
		GetNameForFileSystemEx(IncludeID?: boolean, UseOriginalID?: boolean): string;
		CompareObjectVersionEx(pIObjectVersion: ObjectVersion): boolean;
	}

	export interface ObjID extends IObjID {
	}

	export interface IObjID {
		Type: number;
		ID: number;
		ExternalRepositoryName: string;
		ExternalRepositoryObjectID: string;
		SetIDs(ObjType: number, ID: number): void;
		Clone(): MFilesAPI.ObjID;
		Serialize(): number[];
		Unserialize(Bytes: number[]): void;
		CloneFrom(ObjID: ObjID): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		SetExternalRepositoryIDs(ObjType: number, ExternalRepositoryName: string, ExternalRepositoryObjectID: string): void;
		IsManaged(): boolean;
		IsUnmanaged(): boolean;
	}

	export interface FileVer extends IFileVer {
	}

	export interface IFileVer {
		ID: number;
		Version: number;
		ExternalRepositoryFileID: string;
		ExternalRepositoryFileVersionID: string;
		ExternalRepositoryFileVersionSortKey: number;
		ExternalRepositoryFileVersionSortKeyAsString: string;
		Type: MFilesAPI.MFFileVerVersionType;
		Clone(): MFilesAPI.FileVer;
		CloneFrom(FileVer: FileVer): void;
		SetSpecificVersion(ID: number, Version: number): void;
		SetLatestVersion(ID: number): void;
		SetSpecificExternalRepositoryFileVersion(ExternalRepositoryFileID: string, ExternalRepositoryFileVersionID: string, ExternalRepositoryFileVersionSortKey?: number): void;
		SetSpecificExternalRepositoryFileVersionString(ExternalRepositoryFileID: string, ExternalRepositoryFileVersionID: string, ExternalRepositoryFileVersionSortKey?: string): void;
		SetLatestExternalRepositoryFileVersion(ExternalRepositoryFileID: string): void;
		IsSpecific(): boolean;
		IsLatest(): boolean;
		ConvertToLatestVersion(): void;
		EqualTo(FileVer: FileVer): boolean;
		EqualToIgnoreVersion(FileVer: FileVer): boolean;
	}

	export interface ObjectVersions extends IObjectVersions {
		[index: number]: ObjectVersion;
	}

	export interface IObjectVersions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectVersion;
		Sort(ObjectComparer: IObjectComparer): void;
		Add(Index: number, ObjectVersionData: ObjectVersion): void;
		Remove(Index: number): void;
		GetAsObjVers(): MFilesAPI.ObjVers;
	}

	export interface ObjectVersionPermissions extends IObjectVersionPermissions {
	}

	export interface IObjectVersionPermissions {
		readonly CustomACL: boolean;
		readonly NamedACL: NamedACL;
		readonly AccessControlList: AccessControlList;
		readonly ObjVer: ObjVer;
	}

	export interface ObjOrFileVer extends IObjOrFileVer {
	}

	export interface IObjOrFileVer {
		ObjVer: ObjVer;
		FileVer: FileVer;
		IsFile(): boolean;
		Clone(): MFilesAPI.ObjOrFileVer;
	}

	export interface ObjectVersionFile extends IObjectFileAndVersion {
	}

	export interface IObjectFileAndVersion {
		readonly ObjectFile: ObjectFile;
		readonly ObjectVersion: ObjectVersionAndProperties;
	}

	export interface SourceObjectFile extends ISourceObjectFile {
	}

	export interface ISourceObjectFile {
		Title: string;
		Extension: string;
		SourceFilePath: string;
		Clone(): MFilesAPI.SourceObjectFile;
	}

	export interface ObjectVersionAndPropertiesOfMultipleObjects extends IObjectVersionAndPropertiesOfMultipleObjects {
		[index: number]: ObjectVersionAndProperties;
	}

	export interface IObjectVersionAndPropertiesOfMultipleObjects {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectVersionAndProperties;
		Add(Index: number, ObjectVersionAndProperties: ObjectVersionAndProperties): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectVersionAndPropertiesOfMultipleObjects;
	}

	export interface ObjIDs extends IObjIDs {
		[index: number]: ObjID;
	}

	export interface IObjIDs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjID;
		Add(Index: number, ObjID: ObjID): void;
		Remove(Index: number): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		Clone(): MFilesAPI.ObjIDs;
	}

	export interface TypedValue extends ITypedValue {
	}

	export interface ITypedValue {
		readonly DataType: MFilesAPI.MFDataType;
		readonly DisplayValue: string;
		Value: number | string | boolean | Lookup | Lookups | Timestamp;
		SetValue(DataType: MFilesAPI.MFDataType, Value: number | string | boolean | Lookup | Lookups | Timestamp): void;
		IsNULL(): boolean;
		Clone(): MFilesAPI.TypedValue;
		Serialize(): number[];
		Unserialize(Bytes: number[], ReadFromOldSerializingFormat: boolean): void;
		CompareTo(TypedValue: TypedValue): number;
		GetValueAsLocalizedText(): string;
		GetValueAsUnlocalizedText(): string;
		GetValueAsText(Localized: boolean, NULLAsEmptyString: boolean, EmptyLookupDisplayValuesAsHidden: boolean, LongDateFormat: boolean, NoSeconds: boolean, NumericValueAsKilobytes: boolean): string;
		GetLookupID(): number;
		SetValueToNULL(DataType: MFilesAPI.MFDataType): void;
		GetValueAsTextWithExpression(Expression: Expression, Locale?: number): string;
		IsEmpty(): boolean;
		GetValueAsLookup(): MFilesAPI.Lookup;
		SetValueToLookup(Lookup: Lookup): void;
		GetValueAsLookups(): MFilesAPI.Lookups;
		SetValueToMultiSelectLookup(MultiSelectLookup: Lookups): void;
		IsUninitialized(): boolean;
		GetValueAsTimestamp(): MFilesAPI.Timestamp;
		CloneFrom(TypedValue: TypedValue): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		GetValueAsLocalizedTextEx(AllowDigitGrouping: boolean): string;
		GetValueAsTextEx(Localized: boolean, NULLAsEmptyString: boolean, EmptyLookupDisplayValuesAsHidden: boolean, LongDateFormat: boolean, NoSeconds: boolean, NumericValueAsKilobytes: boolean, AllowDigitGrouping: boolean): string;
	}

	export interface ObjVers extends IObjVers {
		[index: number]: ObjVer;
	}

	export interface IObjVers {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjVer;
		Add(Index: number, ObjVer: ObjVer): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjVers;
		GetAllDistinctObjIDs(): MFilesAPI.ObjIDs;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface SearchConditions extends ISearchConditions {
		[index: number]: SearchCondition;
	}

	export interface ISearchConditions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SearchCondition;
		Add(Index: number, SearchCondition: SearchCondition): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.SearchConditions;
		AppendFromExportedSearchString(ExportedSearchString: string): void;
		GetAsExportedSearchString(SearchFlags: MFilesAPI.MFSearchFlags): string;
	}

	export interface ObjVerVersion extends IObjVerVersion {
	}

	export interface IObjVerVersion {
		Type: MFilesAPI.MFObjVerVersionType;
		Version: number;
		ExternalRepositoryVersionID: string;
		ExternalRepositoryVersionSortKey: number;
		ExternalRepositoryVersionSortKeyAsString: string;
		Clone(): MFilesAPI.ObjVerVersion;
		Serialize(): number[];
		Unserialize(Bytes: number[]): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		SetLatestVersion(): void;
		SetVersion(Version: number): void;
		SetExternalRepositoryVersion(ExternalRepositoryVersionID: string, ExternalRepositoryVersionSortKey?: number): void;
		SetExternalRepositoryVersionString(ExternalRepositoryVersionID: string, ExternalRepositoryVersionSortKey?: string): void;
	}

	export interface Lookup extends ILookup {
	}

	export interface ILookup {
		Version: number;
		Deleted: boolean;
		readonly Hidden: boolean;
		DisplayValue: string;
		ObjectType: number;
		ItemGUID: string;
		readonly DisplayID: string;
		readonly DisplayIDAvailable: boolean;
		ObjectFlags: MFilesAPI.MFSpecialObjectFlag;
		ExternalRepositoryName: string;
		ExternalRepositoryObjectID: string;
		VersionEx: ObjVerVersion;
		ExternalRepositoryIconID: string;
		Item: number;
		GetFormattedDisplayValue(Localized: boolean, EmptyLookupDispValuesAsHidden: boolean, AddDeletedSuffixIfDeleted: boolean): string;
		Clone(): MFilesAPI.Lookup;
		CloneFrom(Lookup: Lookup): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		SetLatestVersion(): void;
		IsUnmanagedReference(): boolean;
		GetAsObjVer(): MFilesAPI.ObjVer;
	}

	export interface ObjectVersionDataResults extends IObjectVersionDataResults {
		[index: number]: ObjectVersionDataResult;
	}

	export interface IObjectVersionDataResults {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectVersionDataResult;
		Add(Index: number, ObjVer: ObjectVersionDataResult): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectVersionDataResults;
	}

	export interface ObjectVersionDataRequest extends IObjectVersionDataRequest {
	}

	export interface IObjectVersionDataRequest {
		Set(requiredDataFlags: number, optionalDataFlags: number, VersionType: MFilesAPI.MFObjectDataRequestVersionType, ErrorTolerance: MFilesAPI.MFObjectDataRequestErrorTolerance): void;
	}

	export interface FileClass extends IFileClass {
	}

	export interface IFileClass {
		readonly FileClass: string;
		readonly DotAndExtension: string;
		readonly Extension: string;
		DisplayName: string;
		Clone(): MFilesAPI.FileClass;
		LoadByExtension(Extension: string): void;
		SetFileClassInfo(DotAndFileExtension: string, FileClass: string, FileClassDisplayName: string): void;
		LoadByFileClass(Extension: string, FileClass: string): void;
	}

	export interface PropertyValue extends IPropertyValue {
	}

	export interface IPropertyValue {
		PropertyDef: number;
		TypedValue: TypedValue;
		Value: TypedValue;
		Clone(): MFilesAPI.PropertyValue;
		GetValueAsText(Localized: boolean, NULLAsEmptyString: boolean, EmptyLookupDisplayValuesAsHidden: boolean, LongDateFormat: boolean, NoSeconds: boolean, NumericValueAsKilobytes: boolean): string;
		GetValueAsLocalizedText(): string;
		GetValueAsUnlocalizedText(): string;
		CloneFrom(PropertyValue: PropertyValue): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		GetValueAsTextEx(Localized: boolean, NULLAsEmptyString: boolean, EmptyLookupDisplayValuesAsHidden: boolean, LongDateFormat: boolean, NoSeconds: boolean, NumericValueAsKilobytes: boolean, AllowDigitGrouping: boolean): string;
		GetValueAsLocalizedTextEx(AllowDigitGrouping: boolean): string;
	}

	export interface Expression extends IExpression {
	}

	export interface IExpression {
		readonly Type: MFilesAPI.MFExpressionType;
		DataPropertyValuePropertyDef: number;
		DataPropertyValueDataFunction: MFilesAPI.MFDataFunction;
		DataPropertyValueParentChildBehaviour: MFilesAPI.MFParentChildBehavior;
		DataObjectIDSegmentSegmentSize: number;
		DataStatusValueType: MFilesAPI.MFStatusType;
		DataStatusValueDataFunction: MFilesAPI.MFDataFunction;
		DataFileValueType: MFilesAPI.MFFileValueType;
		DataTypedValueDatatype: MFilesAPI.MFDataType;
		DataTypedValueValueList: number;
		DataTypedValueDataFunction: MFilesAPI.MFDataFunction;
		DataTypedValueParentChildBehaviour: MFilesAPI.MFParentChildBehavior;
		DataAnyFieldFTSFlags: MFilesAPI.MFFullTextSearchFlags;
		DataPermissionsType: MFilesAPI.MFPermissionsExpressionType;
		IndirectionLevels: PropertyDefOrObjectTypes;
		DataPropertyValueParentChildBehavior: MFilesAPI.MFParentChildBehavior;
		DataTypedValueParentChildBehavior: MFilesAPI.MFParentChildBehavior;
		Clone(): MFilesAPI.Expression;
		SetPropertyValueExpression(PropertyDef: number, PCBehavior: MFilesAPI.MFParentChildBehavior, DataFunctionCall: DataFunctionCall | null): void;
		SetTypedValueExpression(DataType: MFilesAPI.MFDataType, ValueList: number, PCBehavior: MFilesAPI.MFParentChildBehavior, DataFunctionCall: DataFunctionCall | null): void;
		SetStatusValueExpression(StatusType: MFilesAPI.MFStatusType, DataFunctionCall: DataFunctionCall | null): void;
		SetFileValueExpression(FileValueType: MFilesAPI.MFFileValueType): void;
		SetObjectIDSegmentExpression(Segment: number): void;
		SetAnyFieldExpression(FullTextSearchFlags: MFilesAPI.MFFullTextSearchFlags): void;
		SetPermissionExpression(PermissionsExpressionType: MFilesAPI.MFPermissionsExpressionType): void;
		SetValueListItemExpression(PseudoPropertyDef: MFilesAPI.MFValueListItemPropertyDef, PCBehavior: MFilesAPI.MFParentChildBehavior, DataFunctionCall: DataFunctionCall | null): void;
		GetExpressionAsText(PropertyDefinitions: PropertyDefs, ObjectTypes: ObjTypes): string;
		GetWholeExpressionAsIndirectionLevels(): MFilesAPI.PropertyDefOrObjectTypes;
	}

	export interface Lookups extends ILookups {
		[index: number]: Lookup;
	}

	export interface ILookups {
		readonly Count: number;
		Item(Index: number): MFilesAPI.Lookup;
		Add(Index: number, Lookup: Lookup): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.Lookups;
		GetLookupByItem(Item: number): MFilesAPI.Lookup;
		GetLookupIndexByItem(Item: number): number;
		CloneFrom(Lookups: Lookups): void;
	}

	export interface Timestamp extends ITimestamp {
	}

	export interface ITimestamp {
		Year: number;
		Month: number;
		Day: number;
		Hour: number;
		Minute: number;
		Second: number;
		Fraction: number;
		Clone(): MFilesAPI.Timestamp;
		SetValue(Value: object): void;
		GetValue(): object;
		UtcToLocalTime(): MFilesAPI.Timestamp;
		LocalTimeToUtc(): MFilesAPI.Timestamp;
	}

	export interface DataFunctionCall extends IDataFunctionCall {
	}

	export interface IDataFunctionCall {
		readonly DataFunction: MFilesAPI.MFDataFunction;
		SetDataNoOp(): void;
		SetDataYear(): void;
		SetDataMonth(): void;
		SetDataYearAndMonth(): void;
		SetDataDate(): void;
		SetDataDaysFrom(): void;
		SetDataDaysTo(): void;
		SetDataIntegerSegment(SegmentSize?: number): void;
		SetDataLeftChars(Characters: number): void;
		SetDataInitialCharGroup(Locale?: number): void;
	}

	export interface PropertyDefOrObjectTypes extends IPropertyDefOrObjectTypes {
		[index: number]: PropertyDefOrObjectType;
	}

	export interface IPropertyDefOrObjectTypes {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyDefOrObjectType;
		Add(Index: number, PropertyDefOrObjectType: PropertyDefOrObjectType): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.PropertyDefOrObjectTypes;
	}

	export interface PropertyDefs extends IPropertyDefs {
		[index: number]: PropertyDef;
	}

	export interface IPropertyDefs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyDef;
		Clone(): MFilesAPI.PropertyDefs;
	}

	export interface PropertyDefOrObjectType extends IPropertyDefOrObjectType {
	}

	export interface IPropertyDefOrObjectType {
		PropertyDef: boolean;
		ID: number;
		Clone(): MFilesAPI.PropertyDefOrObjectType;
		GetAsExpression(): MFilesAPI.Expression;
	}

	export interface PropertyDef extends IPropertyDef {
	}

	export interface IPropertyDef {
		ID: number;
		Name: string;
		DataType: MFilesAPI.MFDataType;
		ContentType: MFilesAPI.MFContentType;
		BasedOnValueList: boolean;
		ValueList: number;
		UpdateType: MFilesAPI.MFUpdateType;
		Predefined: boolean;
		readonly ThisIsOwnerPD: boolean;
		readonly ThisIsDefaultPD: boolean;
		AllObjectTypes: boolean;
		ObjectType: number;
		DependencyRelation: MFilesAPI.MFDependencyRelation;
		DependencyPD: number;
		SortAscending: boolean;
		OwnerPropertyDef: OwnerPropertyDef;
		AccessControlList: AccessControlList;
		AutomaticValueType: MFilesAPI.MFAutomaticValueType;
		AutomaticValue: string;
		ValueListSortingType: MFilesAPI.MFValueListSortingType;
		AutomaticValueDefinition: TypedValue;
		StaticFilter: SearchConditions;
		readonly ThisIsConflictPD: boolean;
		readonly GUID: string;
		ValidationType: MFilesAPI.MFValidationType;
		FormattingType: MFilesAPI.MFFormattingType;
		AllowedAsGroupingLevel: boolean;
		ObjectsSearchableByThisProperty: boolean;
		HistoryVersionsSearchableByThisProperty: boolean;
		Clone(): MFilesAPI.PropertyDef;
	}

	export interface OwnerPropertyDef extends IOwnerPropertyDef {
	}

	export interface IOwnerPropertyDef {
		ID: number;
		DependencyRelation: MFilesAPI.MFDependencyRelation;
		readonly IsRelationFiltering: boolean;
		IndexForAutomaticFilling: number;
	}

	export interface SearchCondition extends ISearchCondition {
	}

	export interface ISearchCondition {
		Expression: Expression;
		ConditionType: MFilesAPI.MFConditionType;
		TypedValue: TypedValue;
		Clone(): MFilesAPI.SearchCondition;
		Set(Expression: Expression, ConditionType: MFilesAPI.MFConditionType, TypedValue: TypedValue): void;
	}

	export interface FileClasses extends IFileClasses {
		[index: number]: FileClass;
	}

	export interface IFileClasses {
		readonly Count: number;
		Item(Index: number): MFilesAPI.FileClass;
		Add(Index: number, FileClass: FileClass): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.FileClasses;
	}

	export interface ObjectFiles extends IObjectFiles {
		[index: number]: ObjectFile;
	}

	export interface IObjectFiles {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectFile;
		Sort(ObjectFileComparer: IObjectFileComparer): void;
		GetObjectFileByNameForFileSystem(NameForFileSystem: string): MFilesAPI.ObjectFile;
		GetObjectFileIndexByNameForFileSystem(NameForFileSystem: string): number;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface FolderID extends IFolderID {
	}

	export interface IFolderID {
		ViewID: number;
		ExternalViewID: ExternalViewID;
		FolderType: MFilesAPI.MFFolderDefType;
		CloneFrom(FolderID: FolderID): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		Clone(): MFilesAPI.FolderID;
	}

	export interface ObjectFile extends IObjectFile {
	}

	export interface IObjectFile {
		readonly ID: number;
		readonly Version: number;
		readonly Title: string;
		readonly Extension: string;
		readonly LogicalSize: number;
		readonly LogicalSize_32bit: number;
		readonly CreationTimeUtc: Date;
		readonly LastAccessTimeUtc: Date;
		readonly LastWriteTimeUtc: Date;
		readonly ChangeTimeUtc: Date;
		readonly FileVer: FileVer;
		readonly FileGUID: string;
		readonly ExternalRepositoryFileID: string;
		readonly ExternalRepositoryFileVersionID: string;
		readonly LogicalSizeEx: FileSize;
		readonly VolatileContent: boolean;
		GetNameForFileSystem(): string;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface IObjectFileComparer {
		Compare(FileLeft: ObjectFile, FileRight: ObjectFile): number;
	}

	export interface FileSize extends IFileSize {
	}

	export interface IFileSize {
		readonly Size: number;
		readonly Precision: MFilesAPI.MFFileSizePrecision;
		Clone(): MFilesAPI.FileSize;
		CloneFrom(pIFileSize: FileSize): void;
		EqualTo(pIFileSize: FileSize): boolean;
	}

	export interface ExternalViewID extends IExternalViewID {
	}

	export interface IExternalViewID {
		ExternalRepositoryName: string;
		ID: string;
		Set(ExternalRepositoryName: string, ID: string): void;
		Clone(): MFilesAPI.ExternalViewID;
	}

	export interface IObjectComparer {
		Compare(ObjectVersionDataLeft: ObjectVersion, ObjectVersionDataRight: ObjectVersion): number;
	}

	export interface ObjectVersionDataResult extends IObjectVersionDataResult {
	}

	export interface IObjectVersionDataResult {
		readonly Data: ObjectVersionData;
		readonly ErrorCode: number;
		readonly VersionRequested: ObjVer;
		Clone(): MFilesAPI.ObjectVersionDataResult;
		IsSuccessful(): boolean;
	}

	export interface ObjectVersionData extends IObjectVersionData {
	}

	export interface IObjectVersionData {
		readonly ResolvedObjVer: ObjVer;
		readonly Properties: PropertyValues;
		readonly Permissions: AccessControlList;
		readonly ObjectInfo: ObjectVersion;
		readonly PropertiesForDisplay: PropertyValues;
	}

	export interface PropertyValuesForDisplay extends IPropertyValuesForDisplay {
		[index: number]: PropertyValueForDisplay;
	}

	export interface IPropertyValuesForDisplay {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValueForDisplay;
	}

	export interface WorkflowAssignment extends IWorkflowAssignment {
	}

	export interface IWorkflowAssignment {
		CompletedBy_DEPRECATED: PropertyValue;
		MonitoredBy_DEPRECATED: PropertyValue;
		Description_DEPRECATED: PropertyValue;
		Deadline_DEPRECATED: PropertyValue;
		AssignedTo_DEPRECATED: PropertyValue;
		Clone_DEPRECATED(): MFilesAPI.WorkflowAssignment;
	}

	export interface VersionComment extends IVersionComment {
	}

	export interface IVersionComment {
		readonly ObjVer: ObjVer;
		readonly VersionComment: PropertyValue;
		readonly LastModifiedBy: PropertyValue;
		readonly StatusChanged: PropertyValue;
	}

	export interface VersionComments extends IVersionComments {
		[index: number]: VersionComment;
	}

	export interface IVersionComments {
		readonly Count: number;
		Item(Index: number): MFilesAPI.VersionComment;
	}

	export interface ObjectVersionWorkflowState extends IObjectVersionWorkflowState {
	}

	export interface IObjectVersionWorkflowState {
		Workflow: PropertyValue;
		State: PropertyValue;
		VersionComment: PropertyValue;
	}

	export interface PropertyValuesOfMultipleObjects extends IPropertyValuesOfMultipleObjects {
		[index: number]: PropertyValues;
	}

	export interface IPropertyValuesOfMultipleObjects {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValues;
		Clone(): MFilesAPI.PropertyValuesOfMultipleObjects;
	}

	export interface SetPropertiesParamsOfMultipleObjects extends ISetPropertiesParamsOfMultipleObjects {
		[index: number]: SetPropertiesParams;
	}

	export interface ISetPropertiesParamsOfMultipleObjects {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SetPropertiesParams;
		Add(Index: number, SetPropertiesParams: SetPropertiesParams): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.SetPropertiesParamsOfMultipleObjects;
	}

	export interface PropertyValuesWithIconClues extends IPropertyValuesWithIconClues {
	}

	export interface IPropertyValuesWithIconClues {
		readonly PropertyValues: PropertyValues;
		readonly IconClues: PropertyValueIconClues;
		readonly ObjVer: ObjVer;
		Clone(): MFilesAPI.PropertyValuesWithIconClues;
	}

	export interface PropertyValuesWithIconCluesOfMultipleObjects extends IPropertyValuesWithIconCluesOfMultipleObjects {
		[index: number]: PropertyValuesWithIconClues;
	}

	export interface IPropertyValuesWithIconCluesOfMultipleObjects {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValuesWithIconClues;
		Clone(): MFilesAPI.PropertyValuesWithIconCluesOfMultipleObjects;
	}

	export interface FileInformation extends IFileInformation {
	}

	export interface IFileInformation {
		FileType: MFilesAPI.MFFileInformationType;
		EmailMessage: EmailMessageInformation;
		ExtractFromFile(PathToFile: string): void;
		Clear(): void;
	}

	export interface PropertyValuesOfMultipleObjectsForDisplay extends IPropertyValuesOfMultipleObjectsForDisplay {
		[index: number]: PropertyValuesForDisplay;
	}

	export interface IPropertyValuesOfMultipleObjectsForDisplay {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValuesForDisplay;
		Clone(): MFilesAPI.PropertyValuesOfMultipleObjectsForDisplay;
	}

	export interface PropertyValueForDisplay extends IPropertyValueForDisplay {
	}

	export interface IPropertyValueForDisplay {
		readonly PropertyDef: number;
		readonly PropertyDefName: string;
		readonly ReadOnly: boolean;
		readonly DisplayValue: string;
		readonly DataType: MFilesAPI.MFDataType;
		readonly ContentType: MFilesAPI.MFContentType;
		readonly PropertyValue: PropertyValue;
		Clone(): MFilesAPI.PropertyValueForDisplay;
	}

	export interface SetPropertiesParams extends ISetPropertiesParams {
	}

	export interface ISetPropertiesParams {
		ObjVer: ObjVer;
		AllowModifyingCheckedInObject: boolean;
		FailIfNotLatestCheckedInVersion: boolean;
		PropertyValuesToSet: PropertyValues;
		FullSet: boolean;
		PropertyValuesToRemove: IDs;
		DisallowNameChange: boolean;
		AccessControlListEnforcingMode: MFilesAPI.MFACLEnforcingMode;
		AccessControlListProvidedForEnforcing: AccessControlList;
		Set(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, FailIfNotLatestCheckedInVersion: boolean, PropertyValuesToSet: PropertyValues, FullSet: boolean, PropertyValuesToRemove: IDs, DisallowNameChange: boolean): void;
		Clone(): MFilesAPI.SetPropertiesParams;
		SetWithPermissions(ObjVer: ObjVer, AllowModifyingCheckedInObject: boolean, FailIfNotLatestCheckedInVersion: boolean, PropertyValuesToSet: PropertyValues, FullSet: boolean, PropertyValuesToRemove: IDs, ObjectOperationFlags?: MFilesAPI.MFObjectOperationFlags, AccessControlListEnforcingMode?: MFilesAPI.MFACLEnforcingMode, AccessControlListProvidedForEnforcing?: AccessControlList): void;
	}

	export interface PropertyValueIconClues extends IPropertyValueIconClues {
		[index: number]: PropertyValueIconClue;
	}

	export interface IPropertyValueIconClues {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValueIconClue;
		Clone(): MFilesAPI.PropertyValueIconClues;
	}

	export interface PropertyValueIconClue extends IPropertyValueIconClue {
	}

	export interface IPropertyValueIconClue {
		readonly PropertyDef: number;
		readonly ValueListItem: number;
		Clone(): MFilesAPI.PropertyValueIconClue;
	}

	export interface EmailMessageInformation extends IEmailMessageInformation {
	}

	export interface IEmailMessageInformation {
		MessageID: string;
		InReplyTo: string;
		From: string;
		To: Strings;
		Cc: Strings;
		Subject: string;
		Sent: Timestamp;
		Received: Timestamp;
		Importance: MFilesAPI.MFEmailImportance;
		Sensitivity: MFilesAPI.MFEmailSensitivity;
		Clone(): MFilesAPI.EmailMessageInformation;
		CloneFrom(EmailMessageInformation: EmailMessageInformation): void;
	}

	export interface FileDownloadSession extends IFileDownloadSession {
	}

	export interface IFileDownloadSession {
		readonly DownloadID: number;
		readonly FileSize: number;
		readonly FileSize32: number;
		readonly VersionData: ObjectVersion;
	}

	export interface OCRPageResults extends IOCRPageResults {
		[index: number]: OCRPageResult;
	}

	export interface IOCRPageResults {
		readonly Count: number;
		Item(Index: number): MFilesAPI.OCRPageResult;
	}

	export interface OCROptions extends IOCROptions {
	}

	export interface IOCROptions {
		PrimaryLanguage: MFilesAPI.MFOCRLanguage;
		SecondaryLanguage: MFilesAPI.MFOCRLanguage;
		Clone(): MFilesAPI.OCROptions;
	}

	export interface OCRPages extends IOCRPages {
		[index: number]: OCRPage;
	}

	export interface IOCRPages {
		readonly Count: number;
		Item(Index: number): MFilesAPI.OCRPage;
		Add(Index: number, OCRPage: OCRPage): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.OCRPages;
	}

	export interface LanguageDetectionResult extends ILanguageDetectionResult {
	}

	export interface ILanguageDetectionResult {
		Language: string;
		Confidence: number;
	}

	export interface OCRPage extends IOCRPage {
	}

	export interface IOCRPage {
		PageNum: number;
		OCRZones: OCRZones;
		Clone(): MFilesAPI.OCRPage;
	}

	export interface OCRZones extends IOCRZones {
		[index: number]: OCRZone;
	}

	export interface IOCRZones {
		readonly Count: number;
		Item(Index: number): MFilesAPI.OCRZone;
		Add(Index: number, OCRZone: OCRZone): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.OCRZones;
	}

	export interface OCRZone extends IOCRZone {
	}

	export interface IOCRZone {
		ID: number;
		Name: string;
		DimensionUnit: MFilesAPI.MFOCRDimensionUnit;
		Left: number;
		Top: number;
		Width: number;
		Height: number;
		OCROptions: OCROptions;
		readonly HasOCROptions: boolean;
		DataType: MFilesAPI.MFDataType;
		Barcode: boolean;
		SetOCROptions(OCROptions: OCROptions): void;
		ClearOCROptions(): void;
		Clone(): MFilesAPI.OCRZone;
	}

	export interface OCRPageResult extends IOCRPageResult {
	}

	export interface IOCRPageResult {
		readonly PageNum: number;
		readonly OCRZoneResults: OCRZoneResults;
	}

	export interface OCRZoneResults extends IOCRZoneResults {
		[index: number]: OCRZoneResult;
	}

	export interface IOCRZoneResults {
		readonly Count: number;
		Item(Index: number): MFilesAPI.OCRZoneResult;
	}

	export interface OCRZoneResult extends IOCRZoneResult {
	}

	export interface IOCRZoneResult {
		readonly ID: number;
		readonly DimensionUnit: MFilesAPI.MFOCRDimensionUnit;
		readonly Left: number;
		readonly Top: number;
		readonly Width: number;
		readonly Height: number;
		readonly Confidence: number;
		readonly RecognizedOnPage: number;
		readonly ResultValue: TypedValue;
	}

	export interface PropertyDefAdmin extends IPropertyDefAdmin {
	}

	export interface IPropertyDefAdmin {
		PropertyDef: PropertyDef;
		AutomaticValue: AutomaticValue;
		Validation: Validation;
		AllowAutomaticPermissions: boolean;
		SemanticAliases: SemanticAliases;
		NamedValueNamespaces: NamedValueNamespaces;
		Clone(): MFilesAPI.PropertyDefAdmin;
	}

	export interface PropertyDefsAdmin extends IPropertyDefsAdmin {
		[index: number]: PropertyDefAdmin;
	}

	export interface IPropertyDefsAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyDefAdmin;
	}

	export interface AutomaticValue extends IAutomaticValue {
	}

	export interface IAutomaticValue {
		ANSIncrement: number;
		ANVCode: string;
		CVSExpression: string;
		CVVCode: string;
		CalculationOrderNumber: number;
		Clone(): MFilesAPI.AutomaticValue;
	}

	export interface Validation extends IValidation {
	}

	export interface IValidation {
		RegularExpression: string;
		VBScript: string;
		Clone(): MFilesAPI.Validation;
	}

	export interface ValueListItems extends IValueListItems {
		[index: number]: ValueListItem;
	}

	export interface IValueListItems {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ValueListItem;
	}

	export interface ValueListItem extends IValueListItem {
	}

	export interface IValueListItem {
		ID: number;
		ValueListID: number;
		Name: string;
		HasParent: boolean;
		ParentID: number;
		HasOwner: boolean;
		OwnerID: number;
		readonly DisplayID: string;
		readonly DisplayIDAvailable: boolean;
		ACLForObjects: AccessControlList;
		Icon: number[];
		AutomaticPermissionsForObjects: AutomaticPermissions;
		readonly ItemGUID: string;
		readonly Deleted: boolean;
		ObjID: ObjID;
		ExternalRepositoryName: string;
		ExternalRepositoryObjectID: string;
		GetIconAsPNG(Width: number, Height: number): number[];
		Clone(): MFilesAPI.ValueListItem;
		CloneFrom(ValueListItem: ValueListItem): void;
	}

	export interface ValueListItemSearchResults extends IValueListItemSearchResults {
		[index: number]: ValueListItem;
	}

	export interface IValueListItemSearchResults {
		readonly Count: number;
		MoreResults: boolean;
		Item(Index: number): MFilesAPI.ValueListItem;
		Add(Index: number, ValueListItem: ValueListItem): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ValueListItemSearchResults;
	}

	export interface ValueListItemsWithPermissions extends IValueListItemsWithPermissions {
	}

	export interface IValueListItemsWithPermissions {
		readonly ValueListItems: ValueListItems;
		readonly Permissions: AccessControlLists;
	}

	export interface ValueListItemSearchResultsWithPermissions extends IValueListItemSearchResultsWithPermissions {
	}

	export interface IValueListItemSearchResultsWithPermissions {
		readonly ValueListItemSearchResults: ValueListItemSearchResults;
		readonly Permissions: AccessControlLists;
	}

	export interface AccessControlLists extends IAccessControlLists {
		[index: number]: AccessControlList;
	}

	export interface IAccessControlLists {
		readonly Count: number;
		Item(Index: number): MFilesAPI.AccessControlList;
	}

	export interface ObjectClasses extends IObjectClasses {
		[index: number]: ObjectClass;
	}

	export interface IObjectClasses {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectClass;
		Add(Index: number, ObjectClass: ObjectClass): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectClasses;
	}

	export interface ObjectClass extends IObjectClass {
	}

	export interface IObjectClass {
		ID: number;
		Name: string;
		AssociatedPropertyDefs: AssociatedPropertyDefs;
		Workflow: number;
		ObjectType: number;
		ACLForObjects: AccessControlList;
		NamePropertyDef: number;
		AutomaticPermissionsForObjects: AutomaticPermissions;
		ForceWorkflow: boolean;
		AccessControlList: AccessControlList;
		readonly AdditionalClassInfo: AdditionalClassInfo;
		readonly DefaultClass: boolean;
		Clone(): MFilesAPI.ObjectClass;
	}

	export interface ObjectClassAdmin extends IObjectClassAdmin {
	}

	export interface IObjectClassAdmin {
		ID: number;
		Name: string;
		AssociatedPropertyDefs: AssociatedPropertyDefs;
		Workflow: number;
		ObjectType: number;
		ACLForObjects: AccessControlList;
		NamePropertyDef: number;
		ForceWorkflow: boolean;
		Predefined: boolean;
		AutomaticPermissionsForObjects: AutomaticPermissions;
		SemanticAliases: SemanticAliases;
		readonly AdditionalClassInfo: AdditionalClassInfo;
		Clone(): MFilesAPI.ObjectClassAdmin;
	}

	export interface ObjectClassesAdmin extends IObjectClassesAdmin {
		[index: number]: ObjectClassAdmin;
	}

	export interface IObjectClassesAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectClassAdmin;
		Add(Index: number, ObjectClassAdmin: ObjectClassAdmin): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectClassesAdmin;
	}

	export interface AssociatedPropertyDefs extends IAssociatedPropertyDefs {
		[index: number]: AssociatedPropertyDef;
	}

	export interface IAssociatedPropertyDefs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.AssociatedPropertyDef;
		Add(Index: number, AssociatedPropertyDef: AssociatedPropertyDef): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.AssociatedPropertyDefs;
	}

	export interface AdditionalClassInfo extends IAdditionalClassInfo {
	}

	export interface IAdditionalClassInfo {
		readonly InfoType: MFilesAPI.MFAdditionalClassInfoType;
		AssignmentClassInfo: AssignmentClassInfo;
		Clear(): void;
		Clone(): MFilesAPI.AdditionalClassInfo;
	}

	export interface AssociatedPropertyDef extends IAssociatedPropertyDef {
	}

	export interface IAssociatedPropertyDef {
		PropertyDef: number;
		Required: boolean;
		Clone(): MFilesAPI.AssociatedPropertyDef;
	}

	export interface AssignmentClassInfo extends IAssignmentClassInfo {
	}

	export interface IAssignmentClassInfo {
		readonly AssignmentType: MFilesAPI.MFAssignmentType;
		TaskAssignmentClassInfo: TaskAssignmentClassInfo;
		ApprovalAssignmentClassInfo: ApprovalAssignmentClassInfo;
		Clone(): MFilesAPI.AssignmentClassInfo;
	}

	export interface TaskAssignmentClassInfo extends ITaskAssignmentClassInfo {
	}

	export interface ITaskAssignmentClassInfo {
		AnyAssigneeCompletes: boolean;
		SignatureForCompletion: SignatureSettings;
		Clone(): MFilesAPI.TaskAssignmentClassInfo;
	}

	export interface ApprovalAssignmentClassInfo extends IApprovalAssignmentClassInfo {
	}

	export interface IApprovalAssignmentClassInfo {
		AnyAssigneeApproves: boolean;
		SignatureForApproval: SignatureSettings;
		SignatureForRejection: SignatureSettings;
		Clone(): MFilesAPI.ApprovalAssignmentClassInfo;
	}

	export interface SignatureSettings extends ISignatureSettings {
	}

	export interface ISignatureSettings {
		IsRequired: boolean;
		Meaning: string;
		Manifestation: string;
		ManifestationPropertyID: number;
		Reason: string;
		AdditionalInfo: string;
		IsSeparateSignatureObject: boolean;
		SignatureIdentifier: string;
		IsFreeFormTextPrompted: boolean;
		FreeFormTextPropertyID: number;
		readonly PromptInfoType: MFilesAPI.MFSignaturePromptInfoType;
		SignaturePromptInfoFixed: SignaturePromptInfo;
		SignaturePromptInfoSelectable: SignaturePromptInfoSelectable;
		SignaturePromptInfoMetadataBased: SignaturePromptInfoMetadataBased;
		Clone(): MFilesAPI.SignatureSettings;
	}

	export interface SignaturePromptInfo extends ISignaturePromptInfo {
	}

	export interface ISignaturePromptInfo {
		Meaning: string;
		Reason: string;
		Clone(): MFilesAPI.SignaturePromptInfo;
	}

	export interface SignaturePromptInfoSelectable extends ISignaturePromptInfoSelectable {
	}

	export interface ISignaturePromptInfoSelectable {
		PromptInfos: SignaturePromptInfos;
		Clone(): MFilesAPI.SignaturePromptInfoSelectable;
	}

	export interface SignaturePromptInfoMetadataBased extends ISignaturePromptInfoMetadataBased {
	}

	export interface ISignaturePromptInfoMetadataBased {
		PromptInfoLookupPropertyID: number;
		ReasonPropertyID: number;
		MeaningPropertyID: number;
		IsReferencedBySignatureObject: boolean;
		Clone(): MFilesAPI.SignaturePromptInfoMetadataBased;
	}

	export interface SignaturePromptInfos extends ISignaturePromptInfos {
		[index: number]: SignaturePromptInfo;
	}

	export interface ISignaturePromptInfos {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SignaturePromptInfo;
		Add(Index: number, SignaturePromptInfo: SignaturePromptInfo): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.SignaturePromptInfos;
	}

	export interface ClassGroups extends IClassGroups {
		[index: number]: ClassGroup;
	}

	export interface IClassGroups {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ClassGroup;
		Clone(): MFilesAPI.ClassGroups;
	}

	export interface ClassGroup extends IClassGroup {
	}

	export interface IClassGroup {
		ID: number;
		Name: string;
		Members: IDs;
		ObjectType: number;
		Clone(): MFilesAPI.ClassGroup;
		AddMember(Member: number): void;
		RemoveMember(Member: number): void;
	}

	export interface States extends IStates {
		[index: number]: State;
	}

	export interface IStates {
		readonly Count: number;
		Item(Index: number): MFilesAPI.State;
	}

	export interface Workflows extends IWorkflows {
		[index: number]: Workflow;
	}

	export interface IWorkflows {
		readonly Count: number;
		Item(Index: number): MFilesAPI.Workflow;
	}

	export interface WorkflowAdmin extends IWorkflowAdmin {
	}

	export interface IWorkflowAdmin {
		Workflow: Workflow;
		States: StatesAdmin;
		StateTransitions: StateTransitions;
		Permissions: AccessControlList;
		Description: string;
		SemanticAliases: SemanticAliases;
		LayoutData: string;
		Clone(): MFilesAPI.WorkflowAdmin;
	}

	export interface WorkflowsAdmin extends IWorkflowsAdmin {
		[index: number]: WorkflowAdmin;
	}

	export interface IWorkflowsAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.WorkflowAdmin;
		Add(Index: number, WorkflowAdmin: WorkflowAdmin): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.WorkflowsAdmin;
	}

	export interface Workflow extends IWorkflow {
	}

	export interface IWorkflow {
		ID: number;
		Name: string;
		ObjectClass: number;
		Clone(): MFilesAPI.Workflow;
		GetAsLookup(): MFilesAPI.Lookup;
		GetAsTypedValue(): MFilesAPI.TypedValue;
	}

	export interface StateTransitionsForClient extends IStateTransitionsForClient {
		[index: number]: StateTransitionForClient;
	}

	export interface IStateTransitionsForClient {
		readonly Count: number;
		Item(Index: number): MFilesAPI.StateTransitionForClient;
		Add(Index: number, StateTransitionForClient: StateTransitionForClient): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.StateTransitionsForClient;
	}

	export interface State extends IState {
	}

	export interface IState {
		readonly ID: number;
		Name: string;
		Selectable: boolean;
		SelectableFlagAffectedByPseudoUsers: boolean;
		GetAsLookup(): MFilesAPI.Lookup;
		GetAsTypedValue(): MFilesAPI.TypedValue;
	}

	export interface StatesAdmin extends IStatesAdmin {
		[index: number]: StateAdmin;
	}

	export interface IStatesAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.StateAdmin;
		Add(Index: number, StateAdmin: StateAdmin): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.StatesAdmin;
	}

	export interface StateTransitions extends IStateTransitions {
		[index: number]: StateTransition;
	}

	export interface IStateTransitions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.StateTransition;
		Add(Index: number, StateTransition: StateTransition): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.StateTransitions;
	}

	export interface StateAdmin extends IStateAdmin {
	}

	export interface IStateAdmin {
		ActionSetPermissions: boolean;
		ActionDelete: boolean;
		ActionMarkForArchiving: boolean;
		ActionAssignToUser: boolean;
		ActionSendNotification: boolean;
		ActionSetProperties: boolean;
		ActionRunVBScript: boolean;
		ID: number;
		AutomaticStateTransitionNextState_DEPRECATED: number;
		Name: string;
		Description: string;
		ActionRunVBScriptDefinition: string;
		AutomaticStateTransitionAllowedByVBScript_DEPRECATED: string;
		RestrictTransitions: boolean;
		AutomaticStateTransitionInDays_DEPRECATED: number;
		AutomaticStateTransitionMode_DEPRECATED: MFilesAPI.MFAutoStateTransitionMode;
		StateACL: AccessControlList;
		ActionSetPermissionsDefinition: AccessControlList;
		ActionAssignToUserDefinition: ActionCreateAssignment;
		ActionSendNotificationDefinition: ActionSendNotification;
		ActionSetPropertiesDefinition: ActionSetProperties;
		AutomaticStateTransitionCriteria_DEPRECATED: SearchConditions;
		Preconditions: StateConditions;
		Postconditions: StateConditions;
		ActionCreateSeparateAssignment: boolean;
		ActionCreateSeparateAssignmentDefinition: ActionCreateAssignment;
		ActionSetPermissionsDetailedDefinition: ActionSetPermissions;
		SemanticAliases: SemanticAliases;
		ActionConvertToPDFDefinition: ActionConvertToPDF;
		TransitionsRequireEditAccessToObject: boolean;
		CheckInOutPermissions: boolean;
		InOutPermissions: AccessControlList;
		ActionConvertToPDF: boolean;
		ActionDefinitions: ActionDefinitions;
		Clone(): MFilesAPI.StateAdmin;
	}

	export interface ActionCreateAssignment extends IActionCreateAssignment {
	}

	export interface IActionCreateAssignment {
		AssignedToUsers: UserOrUserGroupIDs;
		MonitoredByUsers: UserOrUserGroupIDs;
		Description: string;
		Deadline: boolean;
		DeadlineInDays: number;
		Title: string;
		AssignedTo: UserOrUserGroupIDExs;
		MonitoredBy: UserOrUserGroupIDExs;
		Clone(): MFilesAPI.ActionCreateAssignment;
	}

	export interface ActionSendNotification extends IActionSendNotification {
	}

	export interface IActionSendNotification {
		Subject: string;
		Message: string;
		Recipients: UserOrUserGroupIDs;
		RecipientsEx: UserOrUserGroupIDExs;
		Clone(): MFilesAPI.ActionSendNotification;
	}

	export interface ActionSetProperties extends IActionSetProperties {
	}

	export interface IActionSetProperties {
		Properties: DefaultProperties;
		Clone(): MFilesAPI.ActionSetProperties;
	}

	export interface StateConditions extends IStateConditions {
	}

	export interface IStateConditions {
		PropertyConditions: boolean;
		VBScript: boolean;
		PropertyConditionsDefinition: SearchConditions;
		VBScriptDefinition: string;
		Clone(): MFilesAPI.StateConditions;
	}

	export interface ActionSetPermissions extends IActionSetPermissions {
	}

	export interface IActionSetPermissions {
		Permissions: AccessControlList;
		DiscardsAutomaticPermissions: boolean;
		Clone(): MFilesAPI.ActionSetPermissions;
	}

	export interface ActionConvertToPDF extends IActionConvertToPDF {
	}

	export interface IActionConvertToPDF {
		PDFA1b: boolean;
		StoreAsSeparateFile: boolean;
		OverwriteExistingFile: boolean;
		FailOnUnsupportedSourceFiles: boolean;
		Clone(): MFilesAPI.ActionConvertToPDF;
	}

	export interface ActionDefinitions extends IActionDefinitions {
		[index: number]: ActionDefinition;
	}

	export interface IActionDefinitions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ActionDefinition;
		Add(Index: number, ActionDefinition: ActionDefinition): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ActionDefinitions;
	}

	export interface UserOrUserGroupIDExs extends IUserOrUserGroupIDExs {
		[index: number]: UserOrUserGroupIDEx;
	}

	export interface IUserOrUserGroupIDExs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.UserOrUserGroupIDEx;
		Add(Index: number, UserOrUserGroupIDEx: UserOrUserGroupIDEx): void;
		Remove(Index: number): void;
		GetUserOrUserGroupIDEx(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType): MFilesAPI.UserOrUserGroupIDEx;
		GetUserOrUserGroupIDExIndex(UserOrGroupID: number, UserOrGroupType: MFilesAPI.MFUserOrUserGroupType): number;
		Clone(): MFilesAPI.UserOrUserGroupIDExs;
	}

	export interface UserOrUserGroupIDEx extends IUserOrUserGroupIDEx {
	}

	export interface IUserOrUserGroupIDEx {
		readonly UserOrGroupType: MFilesAPI.MFUserOrUserGroupType;
		readonly UserOrGroupID: number;
		readonly WorkflowState: number;
		readonly IndirectProperty: IndirectPropertyID;
		SetUserAccount(UserAccount: number): void;
		SetUserGroup(UserGroup: number): void;
		SetWorkflowStatePseudoUser(WorkflowState: number): void;
		SetIndirectPropertyPseudoUser(PseudoUserID: IndirectPropertyID): void;
		Clone(): MFilesAPI.UserOrUserGroupIDEx;
	}

	export interface DefaultProperties extends IDefaultProperties {
		[index: number]: DefaultProperty;
	}

	export interface IDefaultProperties {
		readonly Count: number;
		Item(Index: number): MFilesAPI.DefaultProperty;
		Add(Index: number, DefaultProperty: DefaultProperty): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.DefaultProperties;
	}

	export interface DefaultProperty extends IDefaultProperty {
	}

	export interface IDefaultProperty {
		PropertyDefID: number;
		readonly Type: MFilesAPI.MFDefaultPropertyType;
		DataFixedValueValue: TypedValue;
		DataFromHPDSSXMLPromptName: string;
		DataFromHPDSSXMLTreatLookupAsID: boolean;
		DataFromHPDSSXMLAddVLItemIfNotFound: boolean;
		DataFromXMLXPathExpression: string;
		DataFromXMLTreatLookupAsID: boolean;
		DataFromXMLAddVLItemIfNotFound: boolean;
		DataFromEmailField: MFilesAPI.MFEmailField;
		DataFromEmailTreatLookupAsID: boolean;
		DataFromEmailAddVLItemIfNotFound: boolean;
		DataFromEmailHeaderField: string;
		DataFromEmailHeaderTreatLookupAsID: boolean;
		DataFromEmailHeaderAddVLItemIfNotFound: boolean;
		DataFromOCRZone: OCRZone;
		DataFromOCRTreatLookupAsID: boolean;
		DataFromOCRAddVLItemIfNotFound: boolean;
		DataFromFileProperty: MFilesAPI.MFFileProperty;
		DataFromFileTreatLookupAsID: boolean;
		DataFromFileAddVLItemIfNotFound: boolean;
		Clone(): MFilesAPI.DefaultProperty;
		SetFixedValue(TypedValue: TypedValue): void;
		SetFromHPDSSXML(PromptName: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
		SetFromXML(XPathExpression: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
		SetFromEmail(EmailField: MFilesAPI.MFEmailField, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
		SetFromEmailHeader(Field: string, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
		SetFromOCR(OCRZone: OCRZone, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
		SetFromFile(FileProperty: MFilesAPI.MFFileProperty, TreatLookupAsID: boolean, AddVLItemIfNotFound: boolean): void;
	}

	export interface ActionDefinition extends IActionDefinition {
	}

	export interface IActionDefinition {
		readonly ActionType: MFilesAPI.MFActionType;
		ActionCreateSeparateAssignment: ActionCreateAssignment;
		Clear(): void;
		Clone(): MFilesAPI.ActionDefinition;
	}

	export interface StateTransition extends IStateTransition {
	}

	export interface IStateTransition {
		FromState: number;
		ToState: number;
		AccessControlList: AccessControlList;
		SignatureSettings: SignatureSettings;
		ID: number;
		Name: string;
		Description: string;
		EvaluationOrderNumber: number;
		SemanticAliases: SemanticAliases;
		TriggerMode: MFilesAPI.MFAutoStateTransitionMode;
		TriggerInDays: number;
		TriggerCriteria: SearchConditions;
		TriggerAllowedByVBScript: string;
		Clone(): MFilesAPI.StateTransition;
	}

	export interface StateTransitionForClient extends IStateTransitionForClient {
	}

	export interface IStateTransitionForClient {
		readonly ID: number;
		Name: string;
		FromState: number;
		ToState: number;
		Selectable: boolean;
		SelectableFlagAffectedByPseudoUsers: boolean;
		Clone(): MFilesAPI.StateTransitionForClient;
		GetAsLookup(): MFilesAPI.Lookup;
		GetAsTypedValue(): MFilesAPI.TypedValue;
	}

	export interface Views extends IViews {
		[index: number]: View;
	}

	export interface IViews {
		readonly Count: number;
		Item(Index: number): MFilesAPI.View;
	}

	export interface View extends IView {
	}

	export interface IView {
		ID: number;
		Name: string;
		Common: boolean;
		Visible: boolean;
		SearchFlags: MFilesAPI.MFSearchFlags;
		LookInAllVersions: boolean;
		ReturnLatestVisibleVersion: boolean;
		SearchConditions: SearchConditions;
		Levels: ExpressionExs;
		ViewType: MFilesAPI.MFViewType;
		HasParent: boolean;
		Parent: number;
		AccessControlList: AccessControlList;
		ViewLocation: ViewLocation;
		SearchDef: SearchDef;
		ViewFlags: MFilesAPI.MFViewFlag;
		readonly GUID: string;
		Clone(): MFilesAPI.View;
		CloneFrom(View: View): void;
	}

	export interface FolderNameListing extends IFolderNameListing {
		[index: number]: TypedValue;
	}

	export interface IFolderNameListing {
		readonly Count: number;
		readonly MoreValues: boolean;
		Item(Index: number): MFilesAPI.TypedValue;
		SortWithExpression(Expression: Expression, Locale?: number): void;
	}

	export interface ExpressionEx extends IExpressionEx {
	}

	export interface IExpressionEx {
		Expression: Expression;
		ShowEmptyFolders: boolean;
		ShowNULLFolder: boolean;
		Conditions: SearchConditions;
		FilterLevel: number;
		ShowNULLFolderContentsOnThisLevel: boolean;
		ShowMatchingObjectsOnThisLevel: boolean;
		NULLFolderName: string;
		ShowContentsAsJITFolders: boolean;
		FolderListingAlgorithm: MFilesAPI.MFFolderListingAlgorithm;
		ObjectTypeToGroupBy: number;
		ReferFromViewLevel: boolean;
		readonly ExpressionExFlags: MFilesAPI.MFExpressionExFlag;
		Clone(): MFilesAPI.ExpressionEx;
	}

	export interface TypedValues extends ITypedValues {
		[index: number]: TypedValue;
	}

	export interface ITypedValues {
		readonly Count: number;
		Item(Index: number): MFilesAPI.TypedValue;
		Add(Index: number, TypedValue: TypedValue): void;
		Remove(Index: number): void;
	}

	export interface SearchCriteria extends ISearchCriteria {
	}

	export interface ISearchCriteria {
		FirstCondition: SearchConditionEx;
		SecondCondition: SearchConditionEx;
		ObjectTypeCondition: SearchConditionEx;
		FullTextSearchString: string;
		SearchFlags: MFilesAPI.MFSearchFlags;
		AdditionalConditions: SearchConditionExs;
		FullTextSearchFlags: MFilesAPI.MFFullTextSearchFlags;
		ExpandUI: boolean;
		SearchWithinThisFolder: boolean;
		PredefinedSearchFilter: MFilesAPI.MFPredefinedSearchFilterType;
		SearchRefinement: SearchConditions;
		PreviousBaseConditions: SearchConditions;
		FacetFilterAsJSON: string;
		FacetFilterStatusFlags: MFilesAPI.MFFacetFilterStatusFlags;
		Clone(): MFilesAPI.SearchCriteria;
		GetAsSearchConditions(ForceGettingExpandedConds: boolean, IncludeSearchRefinementConditions: boolean, IncludePreviousBaseConditions: boolean): MFilesAPI.SearchConditions;
		GetEffectiveSearchConditions(ForceGettingAdvancedSearchConds: boolean): MFilesAPI.SearchConditions;
		GetEffectiveSearchFlags(ForceGettingAdvancedSearchConds: boolean): MFilesAPI.MFSearchFlags;
		EqualTo(SearchCriteria: SearchCriteria): boolean;
	}

	export interface TemporarySearchView extends ITemporarySearchView {
	}

	export interface ITemporarySearchView {
		readonly View: View;
		SearchCriteria: SearchCriteria;
		readonly BaseSearchConditions: SearchConditions;
		Clone(): MFilesAPI.TemporarySearchView;
	}

	export interface FolderContentItems extends IFolderContentItems {
		[index: number]: FolderContentItem;
	}

	export interface IFolderContentItems {
		readonly Count: number;
		readonly MoreResults: boolean;
		Item(Index: number): MFilesAPI.FolderContentItem;
	}

	export interface FolderDefs extends IFolderDefs {
		[index: number]: FolderDef;
	}

	export interface IFolderDefs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.FolderDef;
		Add(Index: number, FolderDef: FolderDef): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.FolderDefs;
		ToJSON(jsonVersion: MFilesVersion): string;
		FromJSON(jsonData: string, jsonVersion: MFilesVersion): void;
	}

	export interface FolderUIState extends IFolderUIState {
	}

	export interface IFolderUIState {
		ShowBottomPaneBar: boolean;
		ShowRightPaneBar: boolean;
		BottomPaneBarMinimized: boolean;
		RightPaneBarMinimized: boolean;
		MetadataEditorInRightPane: boolean;
		HitHighlightingEnabled: boolean;
		RelativeBottomPaneHeight: number;
		RelativeRightPaneWidth: number;
		readonly ListingUIState: FolderListingUIState;
		ShowTaskPane: boolean;
		TaskPaneMinimized: boolean;
		UnserializeForVaultRootFolder(Bytes: number[]): void;
		UnserializeForViewLevel(Bytes: number[], View: View, ViewLevel: number, PropertyDefinitions: PropertyDefs, ObjectTypes: ObjTypes): void;
		UnserializeForSearchFolder(Bytes: number[], PropertyDefinitions: PropertyDefs): void;
		UnserializeForTraditionalFolder(Bytes: number[], PropertyDefinitions: PropertyDefs): void;
		UnserializeForObjectFolder(Bytes: number[]): void;
		Clone(): MFilesAPI.FolderUIState;
	}

	export interface FolderData extends IFolderData {
	}

	export interface IFolderData {
		View: View;
		ExternalView: ExternalView;
		FolderType: MFilesAPI.MFFolderDefType;
		FolderLocation: FolderDefs;
		Clone(): MFilesAPI.FolderData;
	}

	export interface ExpressionExs extends IExpressionExs {
		[index: number]: ExpressionEx;
	}

	export interface IExpressionExs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ExpressionEx;
		Add(Index: number, ExpressionEx: ExpressionEx): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ExpressionExs;
	}

	export interface ViewLocation extends IViewLocation {
	}

	export interface IViewLocation {
		ParentFolder: FolderDefs;
		Overlapping: boolean;
		OverlappedFolder: TypedValue;
		Clone(): MFilesAPI.ViewLocation;
	}

	export interface SearchDef extends ISearchDef {
	}

	export interface ISearchDef {
		Conditions: SearchConditions;
		Levels: ExpressionExs;
		SearchFlags: MFilesAPI.MFSearchFlags;
		LookInAllVersions: boolean;
		ReturnLatestVisibleVersion: boolean;
		Clone(): MFilesAPI.SearchDef;
		IsIndirectionUsed(): boolean;
	}

	export interface FolderDef extends IFolderDef {
	}

	export interface IFolderDef {
		readonly FolderDefType: MFilesAPI.MFFolderDefType;
		readonly View: number;
		readonly PropertyFolder: TypedValue;
		readonly TraditionalFolder: number;
		readonly SearchDef: SearchDef;
		ExternalFolder: ExternalViewID;
		SetView(View: number): void;
		SetPropertyFolder(TypedValue: TypedValue): void;
		SetTraditionalFolder(TraditionalFolder: number): void;
		SetSearchDef(SearchDef: SearchDef): void;
		Clone(): MFilesAPI.FolderDef;
	}

	export interface SearchConditionEx extends ISearchConditionEx {
	}

	export interface ISearchConditionEx {
		SearchCondition: SearchCondition;
		Enabled: boolean;
		SpecialNULL: boolean;
		Ignored: boolean;
		Clone(): MFilesAPI.SearchConditionEx;
		Set(SearchCondition: SearchCondition, Enabled: boolean, SpecialNULL: boolean, Ignored: boolean): void;
	}

	export interface SearchConditionExs extends ISearchConditionExs {
		[index: number]: SearchConditionEx;
	}

	export interface ISearchConditionExs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SearchConditionEx;
		Add(Index: number, SearchConditionEx: SearchConditionEx): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.SearchConditionExs;
	}

	export interface FolderContentItem extends IFolderContentItem {
	}

	export interface IFolderContentItem {
		readonly FolderContentItemType: MFilesAPI.MFFolderContentItemType;
		readonly View: View;
		readonly PropertyFolder: TypedValue;
		readonly TraditionalFolder: Lookup;
		readonly ObjectVersion: ObjectVersion;
		readonly ExternalView: ExternalView;
	}

	export interface ExternalView extends IExternalView {
	}

	export interface IExternalView {
		ExternalRepositoryName: string;
		ID: string;
		DisplayName: string;
		IconID: string;
		readonly ObjectData: ObjectVersion;
		Set(ExternalRepositoryName: string, ID: string, Name: string, IconID: string): void;
		Clone(): MFilesAPI.ExternalView;
	}

	export interface FolderListingUIState extends IFolderListingUIState {
	}

	export interface IFolderListingUIState {
		Columns: FolderListingColumns;
		ColumnSortings: FolderListingColumnSortings;
		ViewMode: MFilesAPI.MFFolderListingViewMode;
		GroupingMode: MFilesAPI.MFFolderListingItemGroupingMode;
		IconSize: number;
		Clone(): MFilesAPI.FolderListingUIState;
	}

	export interface FolderListingColumns extends IFolderListingColumns {
		[index: number]: FolderListingColumn;
	}

	export interface IFolderListingColumns {
		readonly Count: number;
		Item(Index: number): MFilesAPI.FolderListingColumn;
		Add(Index: number, FolderListingColumn: FolderListingColumn): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.FolderListingColumns;
	}

	export interface FolderListingColumnSortings extends IFolderListingColumnSortings {
		[index: number]: FolderListingColumnSorting;
	}

	export interface IFolderListingColumnSortings {
		readonly Count: number;
		Item(Index: number): MFilesAPI.FolderListingColumnSorting;
		Add(Index: number, FolderListingColumnSorting: FolderListingColumnSorting): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.FolderListingColumnSortings;
	}

	export interface FolderListingColumn extends IFolderListingColumn {
	}

	export interface IFolderListingColumn {
		readonly Name: string;
		readonly ID: number;
		Visible: boolean;
		Width: number;
		Flags: MFilesAPI.MFFolderListingColumnFlags;
		Position: number;
		Clone(): MFilesAPI.FolderListingColumn;
	}

	export interface FolderListingColumnSorting extends IFolderListingColumnSorting {
	}

	export interface IFolderListingColumnSorting {
		ID: number;
		Index: number;
		SortAscending: boolean;
		Clone(): MFilesAPI.FolderListingColumnSorting;
	}

	export interface KeyNamePairs extends IKeyNamePairs {
		[index: number]: KeyNamePair;
	}

	export interface IKeyNamePairs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.KeyNamePair;
	}

	export interface UserAccounts extends IUserAccounts {
		[index: number]: UserAccount;
	}

	export interface IUserAccounts {
		readonly Count: number;
		Item(Index: number): MFilesAPI.UserAccount;
	}

	export interface UserAccount extends IUserAccount {
	}

	export interface IUserAccount {
		ID: number;
		LoginName: string;
		VaultRoles: MFilesAPI.MFUserAccountVaultRole;
		InternalUser: boolean;
		AccessControlList: AccessControlList;
		VaultLanguage: number;
		Enabled: boolean;
		AddVaultRoles(VaultRolesToAdd: MFilesAPI.MFUserAccountVaultRole): void;
		RemoveVaultRoles(VaultRolesToRemove: MFilesAPI.MFUserAccountVaultRole): void;
		Clone(): MFilesAPI.UserAccount;
		CloneFrom(UserAccount: UserAccount): void;
	}

	export interface LoginAccount extends ILoginAccount {
	}

	export interface ILoginAccount {
		readonly AccountName: string;
		FullName: string;
		EmailAddress: string;
		DomainName: string;
		UserName: string;
		AccountType: MFilesAPI.MFLoginAccountType;
		LicenseType: MFilesAPI.MFLicenseType;
		ServerRoles: MFilesAPI.MFLoginServerRole;
		Enabled: boolean;
		Set(LoginAccountType: MFilesAPI.MFLoginAccountType, DomainName: string, UserName: string, ServerRoles: MFilesAPI.MFLoginServerRole, FullName: string, EmailAddress: string, LicenseType: MFilesAPI.MFLicenseType): void;
		Clone(): MFilesAPI.LoginAccount;
		CloneFrom(LoginAccount: LoginAccount): void;
	}

	export interface LoginAccounts extends ILoginAccounts {
		[index: number]: LoginAccount;
	}

	export interface ILoginAccounts {
		readonly Count: number;
		Item(Index: number): MFilesAPI.LoginAccount;
	}

	export interface KeyNamePair extends IKeyNamePair {
	}

	export interface IKeyNamePair {
		readonly Key: number;
		readonly Name: string;
		Clone(): MFilesAPI.KeyNamePair;
	}

	export interface UserGroups extends IUserGroups {
		[index: number]: UserGroup;
	}

	export interface IUserGroups {
		readonly Count: number;
		Item(Index: number): MFilesAPI.UserGroup;
	}

	export interface UserGroup extends IUserGroup {
	}

	export interface IUserGroup {
		ID: number;
		Name: string;
		Members: IDs;
		AccessControlList_DEPRECATED: AccessControlList;
		readonly Predefined: boolean;
		AddMember(ID: number): void;
		RemoveMember(ID: number): void;
		Clone(): MFilesAPI.UserGroup;
		CloneFrom(UserGroup: UserGroup): void;
	}

	export interface UserGroupsAdmin extends IUserGroupsAdmin {
		[index: number]: UserGroupAdmin;
	}

	export interface IUserGroupsAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.UserGroupAdmin;
	}

	export interface UserGroupAdmin extends IUserGroupAdmin {
	}

	export interface IUserGroupAdmin {
		UserGroup: UserGroup;
		AccessControlList: AccessControlList;
		SemanticAliases: SemanticAliases;
		ExternalRepositoryName: string;
		ExternalRepositorySubjectID: string;
		Clone(): MFilesAPI.UserGroupAdmin;
		CloneFrom(UserGroupAdmin: UserGroupAdmin): void;
	}

	export interface NamedACLs extends INamedACLs {
		[index: number]: NamedACL;
	}

	export interface INamedACLs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.NamedACL;
	}

	export interface NamedACLsAdmin extends INamedACLsAdmin {
		[index: number]: NamedACLAdmin;
	}

	export interface INamedACLsAdmin {
		readonly Count: number;
		Item(Index: number): MFilesAPI.NamedACLAdmin;
	}

	export interface NamedACLAdmin extends INamedACLAdmin {
	}

	export interface INamedACLAdmin {
		NamedACL: NamedACL;
		AccessControlListForNamedACL: AccessControlList;
		SemanticAliases: SemanticAliases;
		Clone(): MFilesAPI.NamedACLAdmin;
	}

	export interface TraditionalFolderContents extends ITraditionalFolderContents {
	}

	export interface ITraditionalFolderContents {
		readonly ID: number;
		readonly TraditionalFolders: TraditionalFolders;
		readonly ObjectVersions: ObjectVersions;
	}

	export interface TraditionalFolders extends ITraditionalFolders {
		[index: number]: TraditionalFolder;
	}

	export interface ITraditionalFolders {
		readonly Count: number;
		Item(Index: number): MFilesAPI.TraditionalFolder;
	}

	export interface TraditionalFolder extends ITraditionalFolder {
	}

	export interface ITraditionalFolder {
		readonly ID: number;
		readonly Name: string;
		readonly HasChildren: boolean;
	}

	export interface XMLSearchResult extends IXMLSearchResult {
	}

	export interface IXMLSearchResult {
		readonly SearchResult: string;
		readonly MoreResults: boolean;
	}

	export interface ObjectSearchResults extends IObjectSearchResults {
		[index: number]: ObjectVersion;
	}

	export interface IObjectSearchResults {
		readonly Count: number;
		readonly MoreResults: boolean;
		readonly ObjectVersions: ObjectVersions;
		Item(Index: number): MFilesAPI.ObjectVersion;
		Sort(ObjectComparer: IObjectComparer): void;
		GetAsObjectVersions(): MFilesAPI.ObjectVersions;
		GetScoreOfObject(ObjVer: ObjVer): number;
		ScoreAt(Index: number): number;
		SortByScore(Ascending?: boolean): void;
		Clone(): MFilesAPI.ObjectSearchResults;
	}

	export interface StringData extends IStringData {
	}

	export interface IStringData {
		readonly StringDataType: MFilesAPI.MFStringDataType;
		AsString: string;
		Clone(): MFilesAPI.StringData;
	}

	export interface Expressions extends IExpressions {
		[index: number]: Expression;
	}

	export interface IExpressions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.Expression;
		Add(Index: number, Expression: Expression): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.Expressions;
	}

	export interface VaultProperties extends IVaultProperties {
	}

	export interface IVaultProperties {
		VaultGUID: string;
		DisplayName: string;
		MainDataFolder: string;
		FullTextSearchLanguage: string;
		SQLDatabase: SQLDatabase;
		SeparateLocationForFileData: AdditionalFolders;
		ExtendedMetadataDrivenPermissions: boolean;
		FileDataStorageType: MFilesAPI.MFFileDataStorage;
		FileDataConnectionString: string;
		Icon: number[];
		EncryptionOfFileDataAtRest: boolean;
		Clone(): MFilesAPI.VaultProperties;
	}

	export interface EventHandlers extends IEventHandlers {
		[index: number]: EventHandler;
	}

	export interface IEventHandlers {
		readonly Count: number;
		Item(Index: number): MFilesAPI.EventHandler;
		Add(Index: number, EventHandler: EventHandler): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.EventHandlers;
		GetIndexByGUID(EventHandlerGUID: string): number;
	}

	export interface ExportContentJob extends IExportContentJob {
	}

	export interface IExportContentJob {
		VaultGUID: string;
		TargetFile: string;
		Flags: MFilesAPI.MFExportContentFlag;
		SearchConditions: SearchConditions;
		IgnoreVersionsBefore: Timestamp;
		Impersonation: Impersonation;
		UseSearchConditions: boolean;
		UseIgnoreChangesBefore: boolean;
		IgnoreChangesBefore: Timestamp;
		TargetLocation: string;
		ExportStructureItems: boolean;
		StructureItems: ExportStructureItems;
		IncludeValueListItemsWithStructure: boolean;
		ExportContent: boolean;
		IncludePrivateUISettingsWithStructure: boolean;
		readonly ConnectionString: string;
		readonly ExternalFolderName: string;
		readonly EncryptionPassword_DEPRECATED: string;
		readonly CombinedConnectionString: string;
		ConfigurationID: string;
		Clone(): MFilesAPI.ExportContentJob;
		SetExportAllStructureItems(IncludeValueListItems: boolean): void;
		SetReplicationViaCloud(vbEnableReplicationViaCloud: boolean, bstrConnectionString: string, bstrExternalFolderName: string, bstrEncryptionPassword: string): void;
	}

	export interface ArchiveOldVersionsJob extends IArchiveOldVersionsJob {
	}

	export interface IArchiveOldVersionsJob {
		TargetFile: string;
		Impersonation: Impersonation;
		Flags: MFilesAPI.MFExportContentFlag;
		MarkedForArchiving: boolean;
		UseCheckedInBefore: boolean;
		CheckedInBefore: Timestamp;
		UseAtLeastNVersionsOlder: boolean;
		AtLeastNVersionsOlder: number;
		UseAtLeastNDaysOlder: boolean;
		AtLeastNDaysOlder: number;
		NoVersionTag: boolean;
		TargetLocation: string;
		Clone(): MFilesAPI.ArchiveOldVersionsJob;
	}

	export interface ImportContentJob extends IImportContentJob {
	}

	export interface IImportContentJob {
		VaultGUID: string;
		SourceFile: string;
		Flags: MFilesAPI.MFImportContentFlag;
		Permissions: AccessControlList;
		Impersonation: Impersonation;
		UsePermissions: boolean;
		SourceLocation: string;
		ResetExportTimestamps: boolean;
		UseNamesAsAliases: boolean;
		DisableImportedExternalObjectTypeConnections: boolean;
		DisableImportedExternalUserGroups: boolean;
		DisableImportedVaultEventHandlers: boolean;
		UseDefaultObjectTypePermissions: boolean;
		ActivateAutomaticPermissionsForNewOrChangedDefinitions: boolean;
		IgnoreAutomaticPermissionsDefinedByObjects: boolean;
		MetadataStructureSelectors: MetadataStructureSelectors;
		readonly ConnectionString: string;
		readonly ExternalFolderName: string;
		readonly EncryptionPassword_DEPRECATED: string;
		readonly CombinedConnectionString: string;
		ConfigurationID: string;
		Clone(): MFilesAPI.ImportContentJob;
		SetReplicationViaCloud(vbEnableReplicationViaCloud: boolean, bstrConnectionString: string, bstrExternalFolderName: string, bstrEncryptionPassword: string): void;
	}

	export interface VerifyVaultJobOutput extends IVerifyVaultJobOutput {
	}

	export interface IVerifyVaultJobOutput {
		readonly Errors: Strings;
	}

	export interface VerifyVaultJob extends IVerifyVaultJob {
	}

	export interface IVerifyVaultJob {
		readonly VaultGUID: string;
		readonly FixErrors: boolean;
		readonly VerifyFileContents: boolean;
		Set(GuidVault: string, FixErrors: boolean, VerifyFileContents: boolean): void;
		Clone(): MFilesAPI.VerifyVaultJob;
		GetNumberOfSteps(): number;
		GetOneBasedIndexOfStep(CurrentStep: number): number;
		GetStepProgressText(CurrentStep: number): string;
	}

	export interface SQLDatabase extends ISQLDatabase {
	}

	export interface ISQLDatabase {
		Engine: MFilesAPI.MFDBEngine;
		Server: string;
		Name: string;
		Impersonation: Impersonation;
		BasicUser: Impersonation;
		AdminUser: Impersonation;
		Clone(): MFilesAPI.SQLDatabase;
	}

	export interface AdditionalFolders extends IAdditionalFolders {
		[index: number]: AdditionalFolder;
	}

	export interface IAdditionalFolders {
		readonly Count: number;
		Item(Index: number): MFilesAPI.AdditionalFolder;
		Add(Index: number, AdditionalFolder: AdditionalFolder): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.AdditionalFolders;
	}

	export interface Impersonation extends IImpersonation {
	}

	export interface IImpersonation {
		ImpersonationType: MFilesAPI.MFImpersonationType;
		Account: string;
		Clone(): MFilesAPI.Impersonation;
	}

	export interface AdditionalFolder extends IAdditionalFolder {
	}

	export interface IAdditionalFolder {
		Folder: string;
		LimitInMB: number;
		Impersonation: Impersonation;
		Clone(): MFilesAPI.AdditionalFolder;
	}

	export interface EventHandler extends IEventHandler {
	}

	export interface IEventHandler {
		EventType: MFilesAPI.MFEventHandlerType;
		Active: boolean;
		Description: string;
		VBScript: string;
		readonly GUID: string;
		Clone(): MFilesAPI.EventHandler;
		GetID(): number;
	}

	export interface ExportStructureItems extends IExportStructureItems {
		[index: number]: ExportStructureItem;
	}

	export interface IExportStructureItems {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ExportStructureItem;
		Add(Index: number, ExportStructureItem: ExportStructureItem): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ExportStructureItems;
	}

	export interface ExportStructureItem extends IExportStructureItem {
	}

	export interface IExportStructureItem {
		StructureItemType: MFilesAPI.MFMetadataStructureItem;
		StructureItemID: number;
		StructureItemGUID: string;
		Clone(): MFilesAPI.ExportStructureItem;
	}

	export interface MetadataStructureSelectors extends IMetadataStructureSelectors {
		[index: number]: MetadataStructureSelector;
	}

	export interface IMetadataStructureSelectors {
		readonly Count: number;
		Item(Index: number): MFilesAPI.MetadataStructureSelector;
		Add(Index: number, MetadataStructureSelector: MetadataStructureSelector): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.MetadataStructureSelectors;
	}

	export interface MetadataStructureSelector extends IMetadataStructureSelector {
	}

	export interface IMetadataStructureSelector {
		Name: string;
		ID: string;
		StructureItemType: MFilesAPI.MFMetadataStructureItem;
		StructureItemGUID: string;
		StructureItemSemanticAlias: string;
		StructureItemID: number;
		Flags: MFilesAPI.MFMetadataStructureSelectorFlags;
		Clone(): MFilesAPI.MetadataStructureSelector;
	}

	export interface Language extends ILanguage {
	}

	export interface ILanguage {
		readonly ID: number;
		Name: string;
		LanguageCode: string;
	}

	export interface DataSets extends IDataSets {
		[index: number]: DataSet;
	}

	export interface IDataSets {
		readonly Count: number;
		Item(Index: number): MFilesAPI.DataSet;
		Clone(): MFilesAPI.DataSets;
	}

	export interface ReportAccessCredentials extends IReportAccessCredentials {
	}

	export interface IReportAccessCredentials {
		readonly UserName: string;
		readonly Domain: string;
		readonly Password: string;
		readonly ExtAccount: boolean;
	}

	export interface DataSetExportingStatus extends IDataSetExportingStatus {
	}

	export interface IDataSetExportingStatus {
		readonly IsExporting: boolean;
		readonly CurrentServerTime: Timestamp;
		readonly LatestActivity: Timestamp;
	}

	export interface DataSet extends IDataSet {
	}

	export interface IDataSet {
		readonly ID: number;
		readonly Name: string;
		Clone(): MFilesAPI.DataSet;
	}

	export interface IDRange extends IIDRange {
	}

	export interface IIDRange {
		MinID: number;
		MaxID: number;
		MinID_32bit: string;
		MaxID_32bit: string;
		SetIDs(MinID: number, MaxID: number): void;
		SetIDs_32bit(MinID: string, MaxID: string): void;
		Clone(): MFilesAPI.IDRange;
	}

	export interface ScheduledJobs extends IScheduledJobs {
		[index: number]: ScheduledJob;
	}

	export interface IScheduledJobs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ScheduledJob;
	}

	export interface ScheduledJob extends IScheduledJob {
	}

	export interface IScheduledJob {
		ID: number;
		JobName: string;
		Enabled: boolean;
		Temporary: boolean;
		JobType: MFilesAPI.MFScheduledJobType;
		readonly OptimizeVaultJob: OptimizeVaultJob;
		readonly BackupVaultJob: BackupJob;
		Triggers: ScheduledJobTriggers;
		readonly ExportContentJob: ExportContentJob;
		readonly ImportContentJob: ImportContentJob;
		SetOptimizeVaultJob(OptimizeVaultJob: OptimizeVaultJob): void;
		SetBackupVaultJob(BackupVaultJob: BackupJob): void;
		SetExportContentJob(ExportContentJob: ExportContentJob): void;
		SetImportContentJob(ImportContentJob: ImportContentJob): void;
	}

	export interface ScheduledJobRunInfo extends IScheduledJobRunInfo {
	}

	export interface IScheduledJobRunInfo {
		readonly ScheduledJobOutputInfo: ScheduledJobOutputInfo;
		readonly Running: boolean;
		readonly NextRun: Timestamp;
		readonly LastRun: Timestamp;
		readonly LastRunSucceeded: boolean;
		readonly LastRunErrors: string;
		readonly Cancelled: boolean;
		readonly CurrentStep: number;
		readonly StepCompletionPercent: number;
	}

	export interface OptimizeVaultJob extends IOptimizeVaultJob {
	}

	export interface IOptimizeVaultJob {
		readonly Thorough: boolean;
		readonly VaultGUID: string;
		GarbageCollectFiles: boolean;
		Set(GuidVault: string, Thorough: boolean): void;
		GetNumberOfSteps(): number;
		GetOneBasedIndexOfStep(CurrentStep: number): number;
		GetStepProgressText(CurrentStep: number): string;
	}

	export interface BackupJob extends IBackupJob {
	}

	export interface IBackupJob {
		VaultGUID: string;
		TargetFile: string;
		OverwriteExistingFiles: boolean;
		BackupType: MFilesAPI.MFBackupType;
		FileSizeLimitInMB: number;
		Impersonation: Impersonation;
		Clone(): MFilesAPI.BackupJob;
	}

	export interface ScheduledJobTriggers extends IScheduledJobTriggers {
		[index: number]: ScheduledJobTrigger;
	}

	export interface IScheduledJobTriggers {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ScheduledJobTrigger;
		Add(Index: number, ScheduledJobTrigger: ScheduledJobTrigger): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ScheduledJobTriggers;
	}

	export interface ScheduledJobTrigger extends IScheduledJobTrigger {
	}

	export interface IScheduledJobTrigger {
		BeginYear: number;
		BeginMonth: number;
		BeginDay: number;
		EndYear: number;
		EndMonth: number;
		EndDay: number;
		StartHour: number;
		StartMinute: number;
		ValidEndDate: boolean;
		Type: TriggerType;
		Clone(): MFilesAPI.ScheduledJobTrigger;
	}

	export interface TriggerType extends ITriggerType {
	}

	export interface ITriggerType {
		Type: MFilesAPI.MFTriggerType;
		readonly Daily: DailyTrigger;
		readonly Weekly: WeeklyTrigger;
		readonly MonthlyDate: MonthlyDateTrigger;
		readonly MonthlyDOW: MonthlyDOWTrigger;
		Clone(): MFilesAPI.TriggerType;
		SetDailyTrigger(DailyTrigger: DailyTrigger): void;
		SetWeekly(WeeklyTrigger: WeeklyTrigger): void;
		SetMonthlyDate(MonthlyDateTrigger: MonthlyDateTrigger): void;
		SetMonthlyDOW(MonthlyDOWTrigger: MonthlyDOWTrigger): void;
	}

	export interface DailyTrigger extends IDailyTrigger {
	}

	export interface IDailyTrigger {
		DaysInterval: number;
	}

	export interface WeeklyTrigger extends IWeeklyTrigger {
	}

	export interface IWeeklyTrigger {
		WeeksInterval: number;
		DaysOfTheWeek: MFilesAPI.MFTriggerWeekDay;
	}

	export interface MonthlyDateTrigger extends IMonthlyDateTrigger {
	}

	export interface IMonthlyDateTrigger {
		Days: number;
		Months: MFilesAPI.MFTriggerMonth;
	}

	export interface MonthlyDOWTrigger extends IMonthlyDOWTrigger {
	}

	export interface IMonthlyDOWTrigger {
		WhichWeek: MFilesAPI.MFTriggerWeekOfMonth;
		DaysOfTheWeek: MFilesAPI.MFTriggerWeekDay;
		Months: MFilesAPI.MFTriggerMonth;
	}

	export interface ScheduledJobOutputInfo extends IScheduledJobOutputInfo {
	}

	export interface IScheduledJobOutputInfo {
		ID: number;
		Message: string;
		JobType: MFilesAPI.MFScheduledJobType;
	}

	export interface CustomApplications extends ICustomApplications {
		[index: number]: CustomApplication;
	}

	export interface ICustomApplications {
		readonly Count: number;
		Item(Index: number): MFilesAPI.CustomApplication;
		Clone(): MFilesAPI.CustomApplications;
	}

	export interface CustomApplication extends ICustomApplication {
	}

	export interface ICustomApplication {
		readonly ID: string;
		readonly Name: string;
		readonly Version: string;
		readonly Description: string;
		readonly Publisher: string;
		readonly Enabled: boolean;
		readonly Optional: boolean;
		readonly RequireSystemAccess: boolean;
		readonly ChecksumHash: string;
		readonly MasterApplication: string;
		readonly ApplicationType: MFilesAPI.MFCustomApplicationType;
		readonly MultiServerCompatible: boolean;
		Clone(): MFilesAPI.CustomApplication;
	}

	export interface IServerDataPushSink {
		OnServerDataPush(RequestID: number, JsonDataContent: string): void;
	}

	export interface LoginAccountPersonalInformation extends ILoginAccountPersonalInformation {
	}

	export interface ILoginAccountPersonalInformation {
		readonly AccountName: string;
		readonly FullName: string;
		readonly Email: string;
	}

	export interface AutomaticMetadataResult extends IAutomaticMetadataResult {
	}

	export interface IAutomaticMetadataResult {
		readonly PropertyValueSuggestions: PropertyValueSuggestions;
		ToJSON(): string;
		FromJSON(Json: string): void;
		Clone(): MFilesAPI.AutomaticMetadataResult;
	}

	export interface PropertyValueSuggestions extends IPropertyValueSuggestions {
		[index: number]: PropertyValueSuggestion;
	}

	export interface IPropertyValueSuggestions {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PropertyValueSuggestion;
		Add(Index: number, IPropertyValueSuggestion: PropertyValueSuggestion): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.PropertyValueSuggestions;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface PropertyValueSuggestion extends IPropertyValueSuggestion {
	}

	export interface IPropertyValueSuggestion {
		readonly TypedValue: TypedValue;
		readonly Quality: number;
		readonly IsFact: boolean;
		readonly PropertyDef: number;
		readonly DisplayValue: string;
		readonly IsNewValue: boolean;
		ToJSON(): string;
		FromJSON(Json: string): void;
		Clone(): MFilesAPI.PropertyValueSuggestion;
	}

	export interface SharedLinkInfo extends ISharedLinkInfo {
	}

	export interface ISharedLinkInfo {
		readonly AccessKey: string;
		Description: string;
		readonly CreationTime: Timestamp;
		ExpirationTime: Timestamp;
		readonly CreatedByUser: number;
		ObjVer: ObjVer;
		FileVer: FileVer;
		LinkType: MFilesAPI.MFSharedLinkType;
		Set(ObjVer: ObjVer, FileVer: FileVer): void;
		Clone(): MFilesAPI.SharedLinkInfo;
	}

	export interface SharedLinkInfos extends ISharedLinkInfos {
		[index: number]: SharedLinkInfo;
	}

	export interface ISharedLinkInfos {
		readonly Count: number;
		Item(Index: number): MFilesAPI.SharedLinkInfo;
		Add(Index: number, SharedLink: SharedLinkInfo): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.SharedLinkInfos;
	}

	export interface MigrationResult extends IMigrationResult {
	}

	export interface IMigrationResult {
		readonly ObjVer: ObjVer;
		readonly VersionData: ObjectVersion;
		readonly Properties: PropertyValues;
		readonly MigrationSourceObjectPolicyFulfilled: boolean;
		Clone(): MFilesAPI.MigrationResult;
	}

	export interface MigrateObjectParams extends IMigrateObjectParams {
	}

	export interface IMigrateObjectParams {
		ObjID: ObjID;
		PropertyValuesToSet: PropertyValues;
		MigrationSourceObjectPolicy: MFilesAPI.MFMigrationSourceObjectPolicy;
		SetObjectAndSourcePolicy(ObjID: ObjID, __MIDL__IMigrateObjectParams0000: MFilesAPI.MFMigrationSourceObjectPolicy): MFilesAPI.MigrateObjectParams;
		SetProperties(PropertyValuesToSet: PropertyValues): MFilesAPI.MigrateObjectParams;
		Clone(): MFilesAPI.MigrateObjectParams;
	}

	export interface ObjIDPairs extends IObjIDPairs {
		[index: number]: ObjIDPair;
	}

	export interface IObjIDPairs {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjIDPair;
		Add(Index: number, ObjIDPair: ObjIDPair): void;
		Remove(Index: number): void;
		ToJSON(): string;
		FromJSON(Json: string): void;
		Clone(): MFilesAPI.ObjIDPairs;
	}

	export interface ObjIDPair extends IObjIDPair {
	}

	export interface IObjIDPair {
		readonly ManagedID: ObjID;
		readonly UnmanagedID: ObjID;
		Clone(): MFilesAPI.ObjIDPair;
	}

	export interface ExtensionAuthenticationTargets extends IExtensionAuthenticationTargets {
		[index: number]: ExtensionAuthenticationTarget;
	}

	export interface IExtensionAuthenticationTargets {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ExtensionAuthenticationTarget;
		Add(Index: number, ExtensionAuthenticationTarget: ExtensionAuthenticationTarget): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ExtensionAuthenticationTargets;
	}

	export interface ExtensionAuthenticationResponse extends IExtensionAuthenticationResponse {
	}

	export interface IExtensionAuthenticationResponse {
		ConfigurationName: string;
		AuthenticationData: NamedValues;
		Clone(): MFilesAPI.ExtensionAuthenticationResponse;
	}

	export interface ExtensionAuthenticationStatuses extends IExtensionAuthenticationStatuses {
		[index: number]: ExtensionAuthenticationStatus;
	}

	export interface IExtensionAuthenticationStatuses {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ExtensionAuthenticationStatus;
		Add(Index: number, ExtensionAuthenticationStatus: ExtensionAuthenticationStatus): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ExtensionAuthenticationStatuses;
	}

	export interface ExtensionAuthenticationTarget extends IExtensionAuthenticationTarget {
	}

	export interface IExtensionAuthenticationTarget {
		ID: string;
		DisplayName: string;
		IconID: string;
		RequiresUserSpecificAuthentication: boolean;
		PluginInfos: PluginInfos;
		Clone(): MFilesAPI.ExtensionAuthenticationTarget;
	}

	export interface PluginInfos extends IPluginInfos {
		[index: number]: PluginInfo;
	}

	export interface IPluginInfos {
		readonly Count: number;
		Item(Index: number): MFilesAPI.PluginInfo;
		Add(Index: number, PluginInfo: PluginInfo): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.PluginInfos;
	}

	export interface PluginInfo extends IPluginInfo {
	}

	export interface IPluginInfo {
		IsDefault: boolean;
		IsScopeIndependent: boolean;
		Name: string;
		AssemblyName: string;
		BridgeClassName: string;
		ConfigurationScope: string;
		ConfigurationVaultGUID: string;
		ConfigurationSource: NamedValues;
		Configuration: NamedValues;
		Clone(): MFilesAPI.PluginInfo;
	}

	export interface ExtensionAuthenticationStatus extends IExtensionAuthenticationStatus {
	}

	export interface IExtensionAuthenticationStatus {
		UserID: number;
		ExtensionAuthenticationSpecialUserType: MFilesAPI.MFExtensionAuthenticationSpecialUserType;
		TargetID: string;
		AccountName: string;
		Clone(): MFilesAPI.ExtensionAuthenticationStatus;
	}

	export interface ApplicationTaskInfos extends IApplicationTaskInfos {
		[index: number]: ApplicationTaskInfo;
	}

	export interface IApplicationTaskInfos {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ApplicationTaskInfo;
		Add(Index: number, ApplicationTaskInfo: ApplicationTaskInfo): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ApplicationTaskInfos;
	}

	export interface ApplicationBroadcastMessages extends IApplicationBroadcastMessages {
		[index: number]: ApplicationBroadcastMessage;
	}

	export interface IApplicationBroadcastMessages {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ApplicationBroadcastMessage;
		Add(Index: number, ApplicationBroadcastMessage: ApplicationBroadcastMessage): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ApplicationBroadcastMessages;
	}

	export interface ApplicationTaskInfo extends IApplicationTaskInfo {
	}

	export interface IApplicationTaskInfo {
		QueueID: string;
		TaskID: string;
		State: MFilesAPI.MFTaskState;
		Progress: string;
		TaskType: string;
		TaskData: number[];
		readonly ActivationTimestamp: Timestamp;
		readonly LatestActivityTimestamp: Timestamp;
		Clone(): MFilesAPI.ApplicationTaskInfo;
	}

	export interface ApplicationBroadcastMessage extends IApplicationBroadcastMessage {
	}

	export interface IApplicationBroadcastMessage {
		QueueID: string;
		BroadcastMessageID: string;
		BroadcastType: string;
		BroadcastData: number[];
		Clone(): MFilesAPI.ApplicationBroadcastMessage;
	}

	export interface IFileVers {
		readonly Count: number;
		Item(Index: number): MFilesAPI.FileVer;
		Add(Index: number, FileVer: FileVer): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.FileVers;
	}

	export interface FileVers extends IFileVers {
		[index: number]: FileVer;
	}

	export interface IServerVaultManagementOperations {
		BackupVault(BackupJob: BackupJob): void;
		RestoreVault(RestoreJob: RestoreJob): void;
		GetBackupFileContents(BackupFileFull: string, BackupFileDifferential: string, Impersonation?: Impersonation): MFilesAPI.VaultProperties;
		GetVaultProperties(VaultGUID: string): MFilesAPI.VaultProperties;
		DestroyVault(VaultGUID: string): void;
		BringVaultOnline(VaultGUID: string): void;
		TakeVaultOffline(VaultGUID: string, DisconnectUsers: boolean): void;
		OptimizeVault(OptimizeVaultJob: OptimizeVaultJob): void;
		CopyVault(CopyVaultJob: CopyVaultJob): MFilesAPI.CopyVaultJobOutputInfo;
		AttachVault(VaultProperties: VaultProperties, UpdateAttachmentGUID?: boolean): MFilesAPI.VaultProperties;
		DetachVault(VaultGUID: string): void;
		CreateNewVault(VaultProperties: VaultProperties): string;
		AttachVaultWithOptions(VaultProperties: VaultProperties, Options: AttachVaultOptions): MFilesAPI.VaultProperties;
	}

	export interface RestoreJob extends IRestoreJob {
	}

	export interface IRestoreJob {
		BackupFileFull: string;
		BackupFileDifferential: string;
		VaultProperties: VaultProperties;
		OverwriteExistingFiles: boolean;
		Impersonation: Impersonation;
	}

	export interface CopyVaultJobOutputInfo extends ICopyVaultJobOutputInfo {
	}

	export interface ICopyVaultJobOutputInfo {
		readonly VaultProperties: VaultProperties;
	}

	export interface CopyVaultJob extends ICopyVaultJob {
	}

	export interface ICopyVaultJob {
		VaultGUID: string;
		VaultProperties: VaultProperties;
		CopyflagAllData: boolean;
		CopyflagValueLists: boolean;
		CopyflagPropertyDefinitions: boolean;
		CopyflagDocumentProfiles: boolean;
		CopyflagUserAccounts: boolean;
		CopyflagViews: boolean;
		CopyflagDocuments: boolean;
		CopyflagValueListContent: boolean;
		CopyflagWorkflows: boolean;
		CopyflagExternalLocations: boolean;
		CopyflagEventLog: boolean;
		CopyflagInternalEventHandlers: boolean;
		CopyflagAllExceptData: boolean;
		CopyflagLanguagesAndTranslations: boolean;
		CopyflagDataSets: boolean;
		CopyflagScheduledExportAndImportJobs: boolean;
		CopyflagApplications: boolean;
		CopyflagUseTargetGUID: boolean;
		CopyflagFiles: boolean;
		Clone(): MFilesAPI.CopyVaultJob;
	}

	export interface AttachVaultOptions extends IAttachVaultOptions {
	}

	export interface IAttachVaultOptions {
		Flags: MFilesAPI.MFAttachVaultOptionsFlag;
		DisableExternalObjectTypes: boolean;
		DisableExternalSources: boolean;
		DisableExportedDataSets: boolean;
		DisableExportImportJobs: boolean;
		DisableExternalUserGroups: boolean;
		DisableEventHandlers: boolean;
		UpdateAttachmentGUID: boolean;
		DisableVaultApplications: boolean;
		FailAttachIfBringOnlineFails: boolean;
		readonly DisableRemoteIndexes: boolean;
		DisableAll(): void;
		Clone(): MFilesAPI.AttachVaultOptions;
	}

	export interface IServerManagementOperations {
		BackupMasterDB(BackupFile: string, OverwriteExistingFiles: boolean, FileSizeLimitInMB?: number, Impersonation?: Impersonation): void;
		RestoreMasterDB(BackupFile: string, Impersonation?: Impersonation): void;
		ConfigureWebAccessToDefaultWebSite(): void;
		ConfigureWebAccessToExistingWebSite(WebSite: string): void;
		ConfigureWebAccessToNewWebSite(WebSite: string, Port: string): void;
		ConfigureWebAccessToNewVirtualDirectory(WebSite: string, VirtualDirectory: string): void;
		GetEventHandlers(): MFilesAPI.EventHandlers;
		SetEventHandlers(EventHandlers: EventHandlers): void;
	}

	export interface IServerLicenseManagementOperations {
		SetLicenseCodeAndSerialNumber(SerialNumber: string, LicenseCode: string): void;
		GetLicenseStatus(): MFilesAPI.LicenseStatus;
	}

	export interface IServerScheduledJobManagementOperations {
		GetScheduledJobs(): MFilesAPI.ScheduledJobs;
		GetScheduledJob(ID: number): MFilesAPI.ScheduledJob;
		GetScheduledJobRunInfo(ID: number): MFilesAPI.ScheduledJobRunInfo;
		StartScheduledJob(ID: number): void;
		CancelScheduledJob(ID: number): void;
		AddScheduledJob(ScheduledJob: ScheduledJob): number;
		ModifyScheduledJob(ScheduledJob: ScheduledJob): void;
		RemoveScheduledJob(ID: number): void;
	}

	export interface IShortcutMappingInfo {
		ObjectTypeID: number;
		ObjectTypeName: string;
		ObjectTypeSemanticAliases: SemanticAliases;
		ObjectTypeGUID: string;
	}

	export interface ISharedLinkPublicOperations {
		GetSharedLinkInfo(VaultGUID: string, AccessKey: string, AdditionalData?: NamedValues): MFilesAPI.SharedFileInfo;
		DownloadSharedFileInBlocks_Begin(VaultGUID: string, AccessKey: string, AdditionalData?: NamedValues): MFilesAPI.FileDownloadSession;
		DownloadSharedFileInBlocks_Begin_32bit(VaultGUID: string, AccessKey: string, AdditionalData?: NamedValues): MFilesAPI.FileDownloadSession;
		DownloadSharedFileInBlocks_ReadBlock(VaultGUID: string, AccessKey: string, DownloadID: number, BlockSize: number, Offset: number): number[];
		DownloadSharedFileInBlocks_ReadBlock_32bit(VaultGUID: string, AccessKey: string, DownloadID: number, BlockSize: number, Offset: number): number[];
		UploadSharedFileBlockBegin(VaultGUID: string, AccessKey: string, AdditionalData?: NamedValues): number;
		UploadSharedFileBlock(VaultGUID: string, AccessKey: string, UploadID: number, TotalSizeInBytes: number, Offset: number, Block: number[]): number;
		UploadSharedFileCommit(VaultGUID: string, AccessKey: string, UploadID: number, LogicalSize: number): void;
	}

	export interface SharedFileInfo extends ISharedFileInfo {
	}

	export interface ISharedFileInfo {
		readonly Title: string;
		readonly Extension: string;
		readonly LogicalSize: number;
		readonly LogicalSize_32bit: number;
		readonly ChangeTimeUtc: Date;
		Clone(): MFilesAPI.SharedFileInfo;
	}

	export interface IConnectionData {
		TimeZone: TimeZoneInformation;
		ProtocolSequence: string;
		NetworkAddress: string;
		Endpoint: string;
		EncryptedConnection: boolean;
		LocalComputerName: string;
		AllowAnonymousConnection: boolean;
		AllowUsingAuthenticationPlugins: boolean;
		LogicalTargetServer: string;
		ClientCulture: string;
		ClientCapabilities: ClientCapabilities;
		ClientCertificateValidated: boolean;
		ClientType: MFilesAPI.MFClientType;
		ClientTypeSpecifier: string;
		ClientHostPlatform: string;
		ClientDeviceToken: string;
		Clone(): MFilesAPI.ConnectionData;
	}

	export interface ClientCapabilities extends IClientCapabilities {
	}

	export interface IClientCapabilities {
		PropertyDefSearchabilitySupported: boolean;
		UnmanagedObjectsSupported: boolean;
		ExtensionAuthenticationDataPushSupported: boolean;
		CustomApiDataPushSupported: boolean;
		UnknownFileSizeSupported: boolean;
		TypedMetadataSuggestionsSupported: boolean;
		LongAuthenticationAttemptIdentifierSupported: boolean;
		ReverseGroupingLevelSupported: boolean;
		ObjectPermissionsForClientSupported: boolean;
		Clone(): MFilesAPI.ClientCapabilities;
		LoadWithBaseCapabilitiesForThisVersion(): void;
	}

	export interface ConnectionData extends IConnectionData {
	}

	export interface IVaultConnection {
		Name: string;
		ProtocolSequence: string;
		NetworkAddress: string;
		Endpoint: string;
		ServerVaultGUID: string;
		ServerVaultName: string;
		UserName: string;
		Password: string;
		Domain: string;
		AuthType: MFilesAPI.MFAuthType;
		AutoLogin: boolean;
		UserSpecific: boolean;
		PredefinedCredentials: boolean;
		Icon: number[];
		EncryptedConnection: boolean;
		BindToVault(ParentWindow: number, CanLogIn: boolean, ReturnNULLIfCancelledByUser: boolean): MFilesAPI.Vault;
		GetGUID(): string;
		IsLoggedIn(): boolean;
		TestConnectionToVault(ParentWindow: number): MFilesAPI.MFVaultConnectionTestResult;
		Clone(): MFilesAPI.VaultConnection;
		LogInAs(ParentWindow: number, DefaultAuthType: MFilesAPI.MFAuthType, ReturnNULLIfCancelledByUser: boolean): MFilesAPI.Vault;
		LogInAsUser(AuthType: MFilesAPI.MFAuthType, UserName: string, Password: string, Domain?: object, SPN?: object): MFilesAPI.Vault;
		TestConnectionToVaultSilent(): MFilesAPI.MFVaultConnectionTestResult;
	}

	export interface VaultConnection extends IVaultConnection {
	}

	export interface IVaultConnections {
		readonly Count: number;
		Item(Index: number): MFilesAPI.VaultConnection;
		Add(Index: number, VaultConnection: VaultConnection): void;
		Remove(Index: number): void;
		GetVaultConnectionByName(VaultConnectionName: string): MFilesAPI.VaultConnection;
		GetVaultConnectionIndexByName(VaultConnectionName: string): number;
	}

	export interface IVaultOnServer {
		readonly Name: string;
		readonly GUID: string;
		LogInAsUser(AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, TimeZone?: TimeZoneInformation): MFilesAPI.Vault;
		LogIn(): MFilesAPI.Vault;
		LogInAsUserWithSPN(AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, TimeZone?: TimeZoneInformation): MFilesAPI.Vault;
		LogInAsUserWithAuthenticationData(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation): MFilesAPI.AuthenticationResult;
		LogInEx(AllowUsingAuthenticationPlugins?: boolean): MFilesAPI.Vault;
		LogInEx2(AllowUsingAuthenticationPlugins?: boolean, AdditionalInfoAsJSON?: string): MFilesAPI.Vault;
		LogInAsUserEx(AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, TimeZone?: TimeZoneInformation, AdditionalInfoAsJSON?: string): MFilesAPI.Vault;
	}

	export interface AuthenticationResult extends IAuthenticationResult {
	}

	export interface IVaultsOnServer {
		readonly Count: number;
		Item(Index: number): MFilesAPI.VaultOnServer;
		GetVaultByName(Name: string): MFilesAPI.VaultOnServer;
		GetVaultIndexByName(Name: string): number;
		GetVaultByGUID(GUID: string): MFilesAPI.VaultOnServer;
		GetVaultIndexByGUID(GUID: string): number;
	}

	export interface VaultOnServer extends IVaultOnServer {
	}

	export interface IMFilesClientApplication {
		GetVaultConnections(): MFilesAPI.VaultConnections;
		GetVaultConnectionsWithGUID(GUID: string): MFilesAPI.VaultConnections;
		GetVaultConnection(VaultConnection: string): MFilesAPI.VaultConnection;
		FindObjectVersionAndProperties(Path: string, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionAndProperties;
		FindFile(Path: string, UpdateFromServer?: boolean): MFilesAPI.ObjectVersionFile;
		IsObjectPathInMFiles(Path: string): boolean;
		GetDriveLetter(): string;
		GetClientVersion(): MFilesAPI.MFilesVersion;
		GetAPIVersion(): MFilesAPI.MFilesVersion;
		BindToVault(VaultConnection: string, ParentWindow: number, CanLogIn: boolean, ReturnNULLIfCancelledByUser: boolean): MFilesAPI.Vault;
		TestConnectionToServer(Server?: string, Port?: string, ProtocolSequence?: string): number;
		ShowBalloonTip(Msg: string, Title: string, Timeout?: number, InfoFlags?: number, RemovePrevious?: boolean): void;
		AddVaultConnection(VaultConnection: VaultConnection): void;
		RemoveVaultConnection(VaultConnectionName: string, UserSpecific: boolean): void;
		LogInAs(VaultConnection: string, ParentWindow: number, DefaultAuthType: MFilesAPI.MFAuthType, ReturnNULLIfCancelledByUser: boolean): MFilesAPI.Vault;
		LogInAsUser(VaultConnection: string, AuthType: MFilesAPI.MFAuthType, UserName: string, Password: string, Domain?: object, SPN?: object): MFilesAPI.Vault;
		TestConnectionToServerEx(Server?: string, Port?: string, ProtocolSequence?: string, EncryptedConnection?: boolean): number;
		GetClientLanguage(): string;
	}

	export interface VaultConnections extends IVaultConnections {
		[index: number]: VaultConnection;
	}

	export interface IServerLoginAccountOperations {
		GetLoginAccounts(): MFilesAPI.LoginAccounts;
		GetLoginAccount(AccountName: string): MFilesAPI.LoginAccount;
		ModifyLoginAccount(LoginAccount: LoginAccount): void;
		RemoveLoginAccount(AccountName: string): void;
		AddLoginAccount(LoginAccount: LoginAccount, Password?: string): void;
		GetPersonalInformationFromDomain(AccountName: string): MFilesAPI.LoginAccountPersonalInformation;
		UpdateLoginPassword(AccountName: string, NewPassword: string): void;
		GetPasswordHash(AccountName: string): string;
		SetPasswordHash(AccountName: string, PasswordHash: string): void;
		GetLoginAccountsWithSessions(): MFilesAPI.LoginAccounts;
		ForceLogout(AccountNames: Strings): void;
		CreatePasswordResetRequest(AccountName: string, AccountEmailAddress: string, SiteUrl: string, SendEmail: boolean): string;
		ResetPassword(AccountName: string, ExpirationTime: string, ResetPasswordHash: string, NewPassword: string): void;
		CreatePasswordResetRequestEx(AccountName: string, AccountEmailAddress: string, SiteUrl: string, SendEmail: boolean, VaultGUID?: string): string;
		ResetPasswordEx(AccountName: string, ExpirationTime: string, ResetPasswordHash: string, NewPassword: string, VaultGUID?: string): void;
		GetServerCapabilities(): MFilesAPI.ServerVaultCapabilities;
	}

	export interface IMFilesServerApplication {
		readonly LoginAccountOperations: ServerLoginAccountOperations;
		readonly VaultManagementOperations: ServerVaultManagementOperations;
		readonly ServerManagementOperations: ServerManagementOperations;
		readonly LicenseManagementOperations: ServerLicenseManagementOperations;
		readonly ScheduledJobManagementOperations: ServerScheduledJobManagementOperations;
		readonly SharedLinkPublicOperations: SharedLinkPublicOperations;
		Connect(AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.MFServerConnection;
		GetVaults(): MFilesAPI.VaultsOnServer;
		GetAPIVersion(): MFilesAPI.MFilesVersion;
		GetServerVersion(): MFilesAPI.MFilesVersion;
		Disconnect(): void;
		TestConnectionToServer(Server?: string, Port?: string, ProtocolSequence?: string): number;
		LogInAsUserToVault(VaultGUID: string, TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object): MFilesAPI.Vault;
		LogInToVault(VaultGUID: string): MFilesAPI.Vault;
		ConnectWithTimeZone(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.MFServerConnection;
		ConnectAdministrative(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string): MFilesAPI.MFServerConnection;
		GetOnlineVaults(): MFilesAPI.VaultsOnServer;
		LogInAsUserToVaultWithSPN(VaultGUID: string, TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object): MFilesAPI.Vault;
		ConnectWithSPN(AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.MFServerConnection;
		ConnectWithTimeZoneAndSPN(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.MFServerConnection;
		ConnectAdministrativeWithSPN(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string): MFilesAPI.MFServerConnection;
		TestVaultAvailability(VaultGUID: string, CheckOnlineStatus?: boolean, Server?: string, Port?: string, ProtocolSequence?: string): number;
		GetAuthenticationPlugins(ScopeIndependentOnly?: boolean, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string): MFilesAPI.PluginInfos;
		GetAuthenticationPluginInformation(UserName?: string, Domain?: string, VaultGUID?: string, HostName?: string, AccountType?: MFilesAPI.MFLoginAccountType, TargetPluginName?: string, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string): MFilesAPI.PluginInfos;
		GetTokenAsAuthenticationData(Token: string): MFilesAPI.NamedValues;
		ConnectWithAuthenticationData(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.AuthenticationResult;
		LogInToVaultWithExistingSession(VaultGUID: string): MFilesAPI.Vault;
		LogInToVaultAdministrativeWithExistingSession(VaultGUID: string): MFilesAPI.Vault;
		LogInToVaultAdministrative(VaultGUID: string): MFilesAPI.Vault;
		TestConnectionToServerEx(Server?: string, Port?: string, ProtocolSequence?: string, EncryptedConnection?: boolean): number;
		TestVaultAvailabilityEx(VaultGUID: string, CheckOnlineStatus?: boolean, Server?: string, Port?: string, ProtocolSequence?: string, EncryptedConnection?: boolean): number;
		GetAuthenticationPluginsEx(ScopeIndependentOnly?: boolean, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean): MFilesAPI.PluginInfos;
		GetAuthenticationPluginInformationEx(UserName?: string, Domain?: string, VaultGUID?: string, HostName?: string, AccountType?: MFilesAPI.MFLoginAccountType, TargetPluginName?: string, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean): MFilesAPI.PluginInfos;
		ConnectEx(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.MFServerConnection;
		ConnectAdministrativeEx(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string): MFilesAPI.MFServerConnection;
		LogInToVaultAsImpersonatedUser(VaultGUID: string, UserID: number): MFilesAPI.Vault;
		ConnectWithAuthenticationDataEx(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean): MFilesAPI.AuthenticationResult;
		ConnectWithTimeZoneEx(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean): MFilesAPI.MFServerConnection;
		ConnectEx2(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean): MFilesAPI.MFServerConnection;
		LogInToVaultEx(VaultGUID: string, AllowUsingAuthenticationPlugins?: boolean): MFilesAPI.Vault;
		ConnectEx3(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string): MFilesAPI.MFServerConnection;
		ConnectWithAuthenticationDataEx2(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, LogicalTargetServer?: string): MFilesAPI.AuthenticationResult;
		ConnectEx4(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string): MFilesAPI.MFServerConnection;
		ConnectWithAuthenticationDataEx3(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, LogicalTargetServer?: string, ClientCulture?: string): MFilesAPI.AuthenticationResult;
		ConnectWithoutLogin(TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, LogicalTargetServer?: string, ClientCulture?: string): MFilesAPI.MFServerConnection;
		UseRPCOverCOM(DestinationContext: number): void;
		ConnectEx5(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		ConnectWithAuthenticationDataEx4(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, LogicalTargetServer?: string, ClientCulture?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.AuthenticationResult;
		ConnectAdministrativeEx2(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		ConnectWithoutLoginEx(TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, LogicalTargetServer?: string, ClientCulture?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		ConnectAdministrativeEx3(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, ReturnUnmanagedContent?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string): MFilesAPI.MFServerConnection;
		LogInToVaultAdministrativeEx(VaultGUID: string, AllowUsingAuthenticationPlugins?: boolean): MFilesAPI.Vault;
		ConnectEx6(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		ConnectWithAuthenticationDataEx5(PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string, TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.AuthenticationResult;
		ConnectWithoutLoginEx2(TimeZone?: TimeZoneInformation, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, LocalComputerName?: string, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		LogInToVaultEx2(VaultGUID: string, AllowUsingAuthenticationPlugins?: boolean, AdditionalInfoAsJSON?: string): MFilesAPI.Vault;
		LogInAsUserToVaultEx(VaultGUID: string, TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, AdditionalInfoAsJSON?: string): MFilesAPI.Vault;
		ConnectAdministrativeEx4(TimeZone?: TimeZoneInformation, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, ReturnUnmanagedContent?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string): MFilesAPI.MFServerConnection;
		ConnectInteractive(ServerDisplayName: string, ParentWindow: number, ReturnNoneIfCancelledByUser: boolean, TimeZone?: TimeZoneInformation, DefaultAuthType?: MFilesAPI.MFAuthType, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, AllowAnonymousConnection?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string, ReturnUnmanagedContent?: boolean): MFilesAPI.MFServerConnection;
		ConnectAdministrativeInteractive(ServerDisplayName: string, ParentWindow: number, ReturnNoneIfCancelledByUser: boolean, TimeZone?: TimeZoneInformation, DefaultAuthType?: MFilesAPI.MFAuthType, SPN?: object, ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean, LocalComputerName?: string, ReturnUnmanagedContent?: boolean, AllowUsingAuthenticationPlugins?: boolean, LogicalTargetServer?: string, ClientCulture?: string, AdditionalInfoAsJSON?: string): MFilesAPI.MFServerConnection;
		ConnectWithExistingVaultSession(SessionID: number[], ProtocolSequence?: string, NetworkAddress?: string, Endpoint?: string, EncryptedConnection?: boolean): MFilesAPI.Vault;
		ConnectEx7(ConnectionData: ConnectionData, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object): MFilesAPI.MFServerConnection;
		ConnectWithAuthenticationDataEx6(ConnectionData: ConnectionData, PluginInfo: PluginInfo, AuthenticationData: NamedValues, AttemptIdentifier?: string): MFilesAPI.AuthenticationResult;
		ConnectWithoutLoginEx3(ConnectionData: ConnectionData): MFilesAPI.MFServerConnection;
		ConnectAdministrativeEx5(ConnectionData: ConnectionData, AuthType?: MFilesAPI.MFAuthType, UserName?: object, Password?: object, Domain?: object, SPN?: object): MFilesAPI.MFServerConnection;
		ConnectAdministrativeInteractiveEx(ConnectionData: ConnectionData, ServerDisplayName: string, ParentWindow: number, ReturnNoneIfCancelledByUser: boolean, DefaultAuthType?: MFilesAPI.MFAuthType, SPN?: object): MFilesAPI.MFServerConnection;
	}

	export interface VaultsOnServer extends IVaultsOnServer {
		[index: number]: VaultOnServer;
	}

	export interface ServerLoginAccountOperations extends IServerLoginAccountOperations {
	}

	export interface ServerVaultManagementOperations extends IServerVaultManagementOperations {
	}

	export interface ServerManagementOperations extends IServerManagementOperations {
	}

	export interface ServerLicenseManagementOperations extends IServerLicenseManagementOperations {
	}

	export interface ServerScheduledJobManagementOperations extends IServerScheduledJobManagementOperations {
	}

	export interface SharedLinkPublicOperations extends ISharedLinkPublicOperations {
	}

	export interface IMFResourceManager {
		LoadResourceString(LanguageID: number, ResourceID: number): string;
		GetLocaleSpecificDateFormat(): string;
		GetUICultures(): MFilesAPI.Strings;
	}

	export interface IObjectFileAndObjVer {
		readonly ObjectFile: ObjectFile;
		readonly ObjVer: ObjVer;
		Clone(): MFilesAPI.ObjectFileAndObjVer;
		ToJSON(): string;
		FromJSON(Json: string): void;
	}

	export interface ObjectFileAndObjVer extends IObjectFileAndObjVer {
	}

	export interface IObjectFileAndObjVerOfMultipleFiles {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjectFileAndObjVer;
		Add(Index: number, ObjectFileAndObjVer: ObjectFileAndObjVer): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjectFileAndObjVerOfMultipleFiles;
	}

	export interface ObjectFileAndObjVerOfMultipleFiles extends IObjectFileAndObjVerOfMultipleFiles {
		[index: number]: ObjectFileAndObjVer;
	}

	export interface IObjOrFileVers {
		readonly Count: number;
		Item(Index: number): MFilesAPI.ObjOrFileVer;
		Add(Index: number, ObjOrFileVer: ObjOrFileVer): void;
		Remove(Index: number): void;
		Clone(): MFilesAPI.ObjOrFileVers;
	}

	export interface ObjOrFileVers extends IObjOrFileVers {
		[index: number]: ObjOrFileVer;
	}

	export interface INumber {
		Value: number;
		Clone(): MFilesAPI.Number;
	}

	export interface Number extends INumber {
	}

	export interface IBooleanValue {
		Value: boolean;
		Clone(): MFilesAPI.BooleanValue;
	}

	export interface BooleanValue extends IBooleanValue {
	}

	export interface MFResourceManager extends IMFResourceManager {
	}

	export interface MFilesClientApplication extends IMFilesClientApplication {
	}

	export interface MFilesServerApplication extends IMFilesServerApplication {
	}

	export interface ShortcutMappingInfo extends IShortcutMappingInfo {
	}
}  // end module MFilesAPI
