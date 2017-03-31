//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package io.dcloud.common.util;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.content.pm.PackageManager.NameNotFoundException;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.Uri;
import android.os.Environment;
import android.os.Build.VERSION;
import android.text.TextUtils;
import android.util.Log;
import android.webkit.URLUtil;
import io.dcloud.a.a;
import io.dcloud.application.DCloudApplication;
import io.dcloud.common.DHInterface.ICore;
import io.dcloud.common.DHInterface.ICore.ICoreStatusListener;
import io.dcloud.common.adapter.io.DHFile;
import io.dcloud.common.adapter.util.AndroidResources;
import io.dcloud.common.adapter.util.DeviceInfo;
import io.dcloud.common.adapter.util.InvokeExecutorHelper;
import io.dcloud.common.adapter.util.Logger;
import io.dcloud.common.adapter.util.PlatformUtil;
import io.dcloud.common.adapter.util.UEH;
import io.dcloud.common.constant.StringConst;
import io.dcloud.common.util.XmlUtil.DHNode;
import io.dcloud.feature.internal.sdk.SDK.IntegratedMode;
import io.src.dcloud.adapter.DCloudAdapterUtil;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.security.cert.CertificateException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Set;
import javax.security.auth.x500.X500Principal;

public final class BaseInfo2 {
    public static String sGlobalUserAgent = null;
    public static String sChannel = "default";
    public static String sFontScale = "none";
    public static boolean isPostChcekShortCut = false;
    public static boolean sDoingAnimation = false;
    public static int sOpenedCount = 0;
    public static boolean sFullScreenChanged = false;
    public static boolean sAnimationCaptureC = true;
    public static boolean sAnimationCaptureB = true;
    public static int sTimeoutCapture = 350;
    public static int sTimeOutMax = 3;
    public static int sTimeOutCount = 0;
    public static int mDeStatusBarBackground = -111111;
    public static HashMap<String, BaseInfo2.CmtInfo> mLaunchers = new HashMap();
    public static String sSplashExitCondition = "loaded";
    public static boolean sGlobalFullScreen = false;
    public static String sBaseControlPath;
    public static String sBaseWap2AppTemplatePath;
    public static String sBaseConfigTemplatePath;
    public static String sBaseWap2AppFilePath;
    public static String sRuntimeJsPath;
    public static String sApiConfigPath;
    public static boolean ISDEBUG;
    public static boolean USE_ACTIVITY_HANDLE_KEYEVENT;
    public static boolean sSupportAddByHand;
    public static IntegratedMode sRuntimeMode;
    public static String PDR;
    public static String WGTU_UPDATE_XML;
    public static String APP_WEB_CHACHE;
    public static String APP_JSDATA;
    public static String APP_DB_DATA;
    private static String APPS_NAME;
    public static String sDefaultBootApp;
    public static String sLastRunApp;
    public static String sBaseVersion;
    public static String sWap2AppTemplateVersion;
    public static boolean ISAMU;
    public static boolean s_Is_DCloud_Packaged;
    public static int s_Webview_Count;
    public static int s_Runing_App_Count;
    public static int s_Runing_App_Count_Max;
    public static int s_Runing_App_Count_Trim;
    public static ArrayList<String> sRunningApp;
    public static String sBaseResAppsFullPath;
    public static String sBaseResAppsPath;
    public static String sBaseFsAppsPath;
    public static String sDownloadFullPath;
    public static String sDocumentFullPath;
    public static boolean sCoverApkRuning;
    public static String s_properties;
    public static String sConfigXML;
    public static String APP_WWW_FS_DIR;
    public static final String REL_PRIVATE_WWW_DIR = "_www";
    public static final String REL_PRIVATE_DOC_DIR = "_doc";
    public static final String REL_PUBLIC_DOCUMENTS_DIR = "_documents";
    public static String sBaseNotificationPath;
    public static final String REL_PUBLIC_DOWNLOADS_DIR = "_downloads";
    public static String REAL_PRIVATE_WWW_DIR;
    public static String REAL_PRIVATE_DOC_DIR;
    public static String REAL_PUBLIC_DOCUMENTS_DIR;
    public static String REAL_PUBLIC_DOWNLOADS_DIR;
    public static HashMap<String, String> sAppIsTests;
    public static boolean isStreamAppRuning;
    public static boolean isDefaultAim;
    public static long run5appEndTime;
    public static LinkedHashMap<String, Intent> sAppStateMap;
    private static boolean sParsedControl;
    public static HashMap<String, BaseInfo2.BaseAppInfo> mUnInstalledAppInfoSet;
    public static HashMap<String, BaseInfo2.BaseAppInfo> mInstalledAppInfoSet;
    public static HashMap<String, BaseInfo2.BaseAppInfo> mBaseAppInfoSet;
    public static boolean isStreamSDK;
    private static final X500Principal DEBUG_DN;

    public BaseInfo2() {
    }

    public static synchronized boolean isLoadingLaunchePage() {
        return false;
    }

    public static synchronized void setLoadingLaunchePage(boolean var0, String var1) {
    }

    public static String getCrashLogsPath(Context var0) {
        return isForQihooBrowser(var0)?DeviceInfo.sBaseFsRootPath + "logs/browser_qihoo/":(isForQihooHelper(var0)?DeviceInfo.sBaseFsRootPath + "logs/appsotre_qihoo/":(isStreamApp(var0)?DeviceInfo.sBaseFsRootPath + "logs/streamapps/":DeviceInfo.sBaseFsRootPath + "/log/"));
    }

    public static void updateBaseInfo() {
        if(!APPS_NAME.equals("/")) {
            sBaseResAppsFullPath = DeviceInfo.sBaseResRootFullPath + APPS_NAME;
            sBaseFsAppsPath = DeviceInfo.sBaseFsRootPath + APPS_NAME;
            sBaseWap2AppTemplatePath = sBaseFsAppsPath;
            sBaseResAppsPath = DeviceInfo.sBaseResRootPathName + APPS_NAME;
            DHFile.createNewFile(sBaseFsAppsPath);
        }

        if(sDownloadFullPath != null && sDownloadFullPath.indexOf("sdcard/") > -1) {
            sDownloadFullPath = PdrUtil.appendByDeviceRootDir(sDownloadFullPath);
        } else {
            sDownloadFullPath = DeviceInfo.sBaseFsCachePath + REAL_PUBLIC_DOWNLOADS_DIR;
        }

        if(sDocumentFullPath != null && sDocumentFullPath.indexOf("sdcard/") > -1) {
            sDocumentFullPath = PdrUtil.appendByDeviceRootDir(sDocumentFullPath);
        } else {
            sDocumentFullPath = DeviceInfo.sBaseFsRootPath + REAL_PUBLIC_DOCUMENTS_DIR;
        }

    }

    public static void updateBaseInfoByApp(String var0, String var1) {
        if(var0 != null) {
            PDR = var0;
        }

        if(var1 != null) {
            DeviceInfo.sBaseFsRootPath = var1;
        }

        DeviceInfo.initBaseFsRootPath();
    }

    public static String[] parseControl(ICore var0, ICoreStatusListener var1) {
        HashMap var2 = null;
        String[] var3 = null;
        boolean var4 = false;
        if(!sParsedControl) {
            try {
                InputStream var5 = PlatformUtil.getResInputStream(sBaseControlPath);
                if(var5 == null) {
                    DeviceInfo.initBaseFsRootPath();
                } else {
                    DHNode var6 = XmlUtil.XML_Parser(var5);
                    IOUtil.close(var5);
                    if(var6 != null) {
                        ISDEBUG = Boolean.parseBoolean(XmlUtil.getAttributeValue(var6, "debug", "false"));
                        isStreamSDK = !PdrUtil.isEmpty(XmlUtil.getAttributeValue(var6, "streamapp", (String)null));
                        ISAMU = Boolean.parseBoolean(XmlUtil.getAttributeValue(var6, "amu", "false"));
                        String var7 = AndroidResources.getMetaValue("DCLOUD_STREAMAPP_CHANNEL");
                        sChannel = PdrUtil.isEmpty(var7)?XmlUtil.getAttributeValue(var6, "channel", sChannel):var7;
                        sSplashExitCondition = XmlUtil.getAttributeValue(var6, "back", sSplashExitCondition);
                        s_Is_DCloud_Packaged = Boolean.parseBoolean(XmlUtil.getAttributeValue(var6, "ns", "false"));
                        String var8 = XmlUtil.getAttributeValue(var6, "fontscale", sFontScale);
                        if(!TextUtils.isEmpty(var8)) {
                            sFontScale = var8;
                        }

                        sSupportAddByHand &= ISDEBUG;
                        if(TextUtils.isEmpty(sBaseVersion)) {
                            sBaseVersion = XmlUtil.getAttributeValue(var6, "version");
                        }

                        DHNode var9 = XmlUtil.getElement(var6, "apps");
                        String var10 = XmlUtil.getAttributeValue(var9, "max");
                        s_Runing_App_Count_Max = PdrUtil.parseInt(var10, s_Runing_App_Count_Max);
                        if(s_Runing_App_Count_Max <= 0) {
                            s_Runing_App_Count_Max = 2147483647;
                        }

                        var10 = XmlUtil.getAttributeValue(var9, "trim");
                        s_Runing_App_Count_Trim = PdrUtil.parseInt(var10, s_Runing_App_Count_Trim);
                        if(s_Runing_App_Count_Trim <= 0) {
                            s_Runing_App_Count_Trim = 0;
                        }

                        ArrayList var20 = XmlUtil.getElements(var9, "app");
                        if(var20 != null) {
                            boolean var11 = true;
                            int var12 = var20.size();

                            for(int var13 = 0; var13 < var12; ++var13) {
                                DHNode var14 = (DHNode)var20.get(var13);
                                String var15 = XmlUtil.getAttributeValue(var14, "appid");
                                if(var13 == 0) {
                                    var3 = new String[]{var15};
                                    sDefaultBootApp = var15;
                                    updateBaseInfoByApp(var15, (String)null);
                                    var11 = sCoverApkRuning = DeviceInfo.checkCoverInstallApk();
                                    if(isBase(DCloudApplication.getInstance())) {
                                        var11 &= !ISDEBUG;
                                    }

                                    loadInstalledAppInfo(var0);
                                    var2 = mInstalledAppInfoSet;
                                }

                                String var16 = XmlUtil.getAttributeValue(var14, "appver");
                                BaseInfo2.BaseAppInfo var17 = new BaseInfo2.BaseAppInfo(var15, var16);
                                mBaseAppInfoSet.put(var15, var17);
                                if(var11 && var2.containsKey(var15)) {
                                    BaseInfo2.BaseAppInfo var18 = (BaseInfo2.BaseAppInfo)var2.get(var15);
                                    if(!sCoverApkRuning && !var17.high(var18)) {
                                        var17.mMoreRecent = false;
                                        mBaseAppInfoSet.remove(var15);
                                    } else {
                                        Log.i("Main_Path", var15 + " App has new version! it is " + var17.mAppVer);
                                        var4 = true;
                                        var17.clearBundleData();
                                        var2.remove(var15);
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (Exception var19) {
                var19.printStackTrace();
            }

            sParsedControl = true;
            if(ISDEBUG) {
                Logger.setOpen(true);
            }

            if(var4) {
                PlatformUtil.setBundleData(PDR, "apps", installAppMapToString());
            }
        }

        if(var1 != null) {
            Log.i("Main_Path", "will exc coreListener.onCoreReady");
            var1.onCoreReady(var0);
        }

        return var3;
    }

    public static void loadInstalledAppInfo(ICore var0) {
        String var1 = PlatformUtil.getBundleData(PDR, "apps");
        String[] var2;
        String[] var3;
        int var4;
        int var5;
        String var6;
        if(var1 != null) {
            var2 = var1.split("\\|");
            var3 = var2;
            var4 = var2.length;

            for(var5 = 0; var5 < var4; ++var5) {
                var6 = var3[var5];
                String var7 = PlatformUtil.getBundleData(PDR, var6 + "_" + "appver");
                BaseInfo2.BaseAppInfo var8 = new BaseInfo2.BaseAppInfo(var6, var7);
                boolean var9 = Boolean.parseBoolean(PlatformUtil.getBundleData(PDR, var6 + "_" + "deleted"));
                var8.mDeleted = var9;
                if(var9) {
                    mUnInstalledAppInfoSet.put(var6, var8);
                } else if(!PdrUtil.isEmpty(var6)) {
                    mInstalledAppInfoSet.put(var6, var8);
                }
            }
        }

        if(var0 != null && !var0.isStreamAppMode() && sSupportAddByHand) {
            var2 = PlatformUtil.listFsAppsFiles(sBaseFsAppsPath);
            if(var2 != null) {
                var3 = var2;
                var4 = var2.length;

                for(var5 = 0; var5 < var4; ++var5) {
                    var6 = var3[var5];
                    if(!mInstalledAppInfoSet.containsKey(var6)) {
                        BaseInfo2.BaseAppInfo var10 = new BaseInfo2.BaseAppInfo(var6, "0");
                        mInstalledAppInfoSet.put(var6, var10);
                    }
                }
            }
        }

    }

    private static String installAppMapToString() {
        StringBuffer var0 = new StringBuffer();
        Set var1 = mInstalledAppInfoSet.keySet();
        int var2 = var1.size();
        Iterator var3 = var1.iterator();

        while(var3.hasNext()) {
            String var4 = (String)var3.next();
            var0.append(var4).append("|");
        }

        if(var2 > 1) {
            var0.deleteCharAt(var0.length() - 1);
        }

        return var0.toString();
    }

    public static void saveInstalledAppInfo() {
        String var0 = installAppMapToString();
        PlatformUtil.setBundleData(PDR, "apps", var0);
    }

    /** @deprecated */
    public static void loadCustomPath(String var0) {
        String[] var1 = var0.split("\\||\r\n|\n");
        int var2 = var1.length;
        if(var2 > 0) {
            boolean var3 = true;

            for(int var4 = 0; var4 < var2; ++var4) {
                String[] var5 = var1[var4].split("=");
                String var6 = var5[0];
                String var7 = var5[1];
                if(var6.equals("control_xml_path")) {
                    sBaseControlPath = var7;
                } else if(var6.equals("fs_root_path")) {
                    var7 = var7.substring(var7.indexOf("sdcard/") + "sdcard/".length());
                    DeviceInfo.sBaseFsRootPath = DeviceInfo.sDeviceRootDir + "/" + var7;
                } else if(var6.equals("downloads")) {
                    REAL_PUBLIC_DOWNLOADS_DIR = var7;
                } else if(var6.equals("documents")) {
                    REAL_PUBLIC_DOCUMENTS_DIR = var7;
                } else if(var6.equals("doc")) {
                    REAL_PRIVATE_DOC_DIR = var7;
                } else if(var6.equals("runtime_apps")) {
                    APPS_NAME = var7;
                } else if(var6.equals("www")) {
                    APP_WWW_FS_DIR = var7;
                    REAL_PRIVATE_WWW_DIR = var7;
                }
            }

            if(var3) {
                DeviceInfo.updatePath();
            }
        }

    }

    public static boolean isBase(Context var0) {
        return var0.getPackageName().equals("io.dcloud.HBuilder");
    }

    public static boolean existsBase() {
        try {
            return (new File(Environment.getExternalStorageDirectory() + "/Android/data/io.dcloud.HBuilder")).exists();
        } catch (Exception var1) {
            var1.printStackTrace();
            return false;
        }
    }

    public static boolean isQihooLifeHelper(Context var0) {
        return var0.getPackageName().equals("com.qihoo.life");
    }

    public static boolean useStreamAppStatistic(Context var0) {
        boolean var1 = false;

        try {
            var1 |= var0.getPackageName().equals("io.dcloud.streamapp");
            var1 |= var0.getPackageName().equals("com.qihoo.appstore");
            var1 |= var0.getPackageName().equals("io.dcloud.streamapps");
            var1 |= var0.getPackageName().equals("io.dcloud.HBuilder");
            var1 |= var0.getPackageName().equals("com.qihoo.life");
            var1 |= var0.getPackageName().equals("com.qihoo.browser");
        } catch (Throwable var3) {
            var3.printStackTrace();
        }

        return var1;
    }

    public static boolean isTrafficFree() {
        try {
            Context var0 = DCloudApplication.getInstance();
            if(var0 != null) {
                Context var1 = var0.getApplicationContext();
                return var1.getPackageName().equals("com.qihoo.life") && !isWifi(var1);
            }
        } catch (Exception var2) {
            var2.printStackTrace();
        }

        return false;
    }

    public static boolean isStreamApp(Context var0) {
        return var0.getPackageName().equals("io.dcloud.streamapps");
    }

    public static boolean isShowTitleBarForStreamAppSDK() {
        boolean var0 = false;
        String var1 = AndroidResources.getMetaValue("DCLOUD_STREAMAPP_ACTIONBAR");
        if(PdrUtil.isEquals("standard", var1)) {
            var0 = true;
        }

        Logger.e("StreamSdk", "isshowtitlebar==" + var0);
        return var0;
    }

    public static boolean isForQihooHelper(Context var0) {
        return var0.getPackageName().equals("io.dcloud.streamapp") || var0.getPackageName().equals("com.qihoo.appstore");
    }

    public static boolean isShowTitleBar(Context var0) {
        return isForQihooBrowser(var0) || isShowTitleBarForStreamAppSDK();
    }

    public static boolean isForQihooBrowser(Context var0) {
        return var0.getPackageName().equals("com.qihoo.browser") || var0.getPackageName().equals("com.qihoo.bclplugintest") || var0.getPackageName().equals("io.dcloud.streamapp");
    }

    public static boolean isForQihooHelper5_0(Context var0) {
        return var0.getPackageName().equals("io.dcloud.streamapp");
    }

    public static String getShortCutActivity(Context var0) {
        Object var1 = null;
        return (String)var1;
    }

    public static String getRunningActivity(Context var0) {
        String var1 = "io.dcloud.appstream.StreamAppMainActivity";
        if(isForQihooHelper(var0)) {
            if(DCloudAdapterUtil.isPlugin()) {
                var1 = "io.src.dcloud.adapter.StreamAppActivity";
            } else {
                var1 = "io.dcloud.appstream.StreamAppListActivity";
            }
        }

        return var1;
    }

    public static boolean isGlobal(Context var0) {
        return isForQihooBrowser(var0) || isForQihooHelper(var0) || isStreamApp(var0) || TextUtils.equals("io.dcloud.html5pframework", var0.getPackageName()) || isStreamSDK;
    }

    public static boolean isWifi(Context var0) {
        ConnectivityManager var1 = (ConnectivityManager)var0.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo var2 = var1.getActiveNetworkInfo();
        return var2 != null && var2.getType() == 1;
    }

    public static void putLauncherData(String var0, String var1) {
        BaseInfo2.CmtInfo var2 = getCmitInfo(var0);
        var2.plusLauncher = var1;
    }

    public static String getLauncherData(String var0) {
        BaseInfo2.CmtInfo var1 = (BaseInfo2.CmtInfo)mLaunchers.get(var0);
        return var1 == null?"default":(TextUtils.isEmpty(var1.plusLauncher)?"default":var1.plusLauncher);
    }

    public static String getLaunchType(Intent var0) {
        if(var0 == null) {
            return "default";
        } else {
            Uri var1 = var0.getData();
            String var2 = "default";
            if(var0.hasExtra("plus.runtime.launcher")) {
                String var3 = var0.getStringExtra("plus.runtime.launcher");
                var2 = var3;
            }

            if(var1 != null && !URLUtil.isNetworkUrl(var1.toString())) {
                if(var0.getBooleanExtra("from_barcode", false)) {
                    var2 = "barcode";
                } else {
                    var2 = "scheme";
                }
            } else if(var0.getExtras() != null) {
                if(!TextUtils.isEmpty(var0.getStringExtra("__launcher__"))) {
                    var2 = var0.getStringExtra("__launcher__");
                } else if(var0.getBooleanExtra("from_short_cut_start", false)) {
                    var2 = "shortcut";
                } else if(var0.getBooleanExtra("from_barcode", false)) {
                    var2 = "barcode";
                } else if(var0.getIntExtra("__start_from__", -1) == 3) {
                    var2 = "push";
                } else if(var0.getIntExtra("__start_from__", -1) == 5) {
                    var2 = "myapp";
                }
            }

            return var2;
        }
    }

    public static String getLastKey(LinkedHashMap<String, Intent> var0) {
        String var1 = null;
        if(var0 != null) {
            for(Iterator var2 = var0.keySet().iterator(); var2.hasNext(); var1 = (String)var2.next()) {
                ;
            }
        }

        return var1;
    }

    public static void clearData() {
        sParsedControl = false;
        sAppStateMap.clear();
        sGlobalFullScreen = false;
        UEH.sInited = false;
        sLastRunApp = null;
        sRunningApp = null;
        s_Webview_Count = 0;
        s_Runing_App_Count = 0;
    }

    private static boolean isDebugSignature(Context var0) {
        boolean var1 = false;

        try {
            PackageInfo var2 = var0.getPackageManager().getPackageInfo(var0.getPackageName(), PackageManager.GET_SIGNATURES);
            Signature[] var3 = var2.signatures;

            for(int var4 = 0; var4 < var3.length; ++var4) {
                CertificateFactory var5 = CertificateFactory.getInstance("X.509");
                ByteArrayInputStream var6 = new ByteArrayInputStream(var3[var4].toByteArray());
                X509Certificate var7 = (X509Certificate)var5.generateCertificate(var6);
                var1 = var7.getSubjectX500Principal().equals(DEBUG_DN);
                if(var1) {
                    break;
                }
            }
        } catch (NameNotFoundException var8) {
            ;
        } catch (CertificateException var9) {
            ;
        } catch (Exception var10) {
            ;
        }

        return var1;
    }

    public static boolean isWap2AppCompleted(String var0) {
        return isWap2AppAppid(var0) && InvokeExecutorHelper.AppStreamUtils.invoke("hasCompletedFile", var0, false);
    }

    public static boolean isWap2AppAppid(String var0) {
        if(var0 == null) {
            return false;
        } else {
            var0 = var0.toLowerCase();
            return var0.startsWith("__w2a__") || "H52588A9C".equalsIgnoreCase(var0) || "H5B5EEFBB".equalsIgnoreCase(var0) || "H5A0B1958".equalsIgnoreCase(var0) || "H5EA885FD".equalsIgnoreCase(var0) || "H592E7F63".equalsIgnoreCase(var0) || "H5BCD03E4".equalsIgnoreCase(var0);
        }
    }

    public static boolean isTest(String var0) {
        return sAppIsTests.containsKey(var0);
    }

    public static boolean checkAppIsTest(String var0) {
        String var1 = StringConst.STREAMAPP_KEY_ROOTPATH + "apps/" + var0 + "/.test";
        File var2 = new File(var1);
        return var2.exists();
    }

    public static boolean checkTestOpenFile() {
        String var0 = DeviceInfo.sDeviceRootDir + "/.system/d85a37c6-afdc-11e6-80f5-76304dec7eb7";
        File var1 = new File(var0);
        return var1.exists();
    }

    public static void removeTestFile(String var0) {
        String var1 = StringConst.STREAMAPP_KEY_ROOTPATH + "apps/" + var0 + "/.test";
        File var2 = new File(var1);
        if(var2.exists()) {
            var2.delete();
        }

    }

    public static void createAppTestFile(String var0) {
        String var1 = StringConst.STREAMAPP_KEY_ROOTPATH + "apps/" + var0 + "/.test";
        File var2 = new File(var1);
        if(!var2.exists()) {
            try {
                var2.mkdirs();
                var2.createNewFile();
            } catch (IOException var4) {
                var4.printStackTrace();
            }
        }

    }

    public static String getkey(Context var0) {
        return a.a(var0);
    }

    public static String getiv() {
        return a.a();
    }

    public static BaseInfo2.CmtInfo getCmitInfo(String var0) {
        BaseInfo2.CmtInfo var1 = (BaseInfo2.CmtInfo)mLaunchers.get(var0);
        if(var1 == null) {
            var1 = new BaseInfo2.CmtInfo();
            mLaunchers.put(var0, var1);
        }

        return var1;
    }

    static {
        sBaseControlPath = DeviceInfo.sBaseResRootPathName + "data/dcloud_control.xml";
        sBaseWap2AppTemplatePath = null;
        sBaseConfigTemplatePath = DeviceInfo.sBaseResRootPathName + "data/wap2app/__template.json";
        sBaseWap2AppFilePath = DeviceInfo.sBaseResRootPathName + "data/wap2app/__wap2app.js";
        sRuntimeJsPath = "io/dcloud/all.js";
        sApiConfigPath = DeviceInfo.sBaseResRootPathName + "data/api.json";
        ISDEBUG = false;
        USE_ACTIVITY_HANDLE_KEYEVENT = true | VERSION.SDK_INT < 19;
        sSupportAddByHand = true;
        sRuntimeMode = null;
        PDR = "pdr";
        WGTU_UPDATE_XML = "update.xml";
        APP_WEB_CHACHE = "webcache/";
        APP_JSDATA = "jsdata/";
        APP_DB_DATA = "dbdata/";
        APPS_NAME = "apps/";
        ISAMU = false;
        s_Is_DCloud_Packaged = false;
        s_Webview_Count = 0;
        s_Runing_App_Count = 0;
        s_Runing_App_Count_Max = 3;
        s_Runing_App_Count_Trim = 0;
        sRunningApp = null;
        sBaseResAppsFullPath = null;
        sBaseResAppsPath = null;
        sBaseFsAppsPath = null;
        sDownloadFullPath = null;
        sDocumentFullPath = "";
        sCoverApkRuning = false;
        s_properties = "/data/dcloud_properties.xml";
        sConfigXML = "manifest.json";
        APP_WWW_FS_DIR = "www/";
        sBaseNotificationPath = null;
        REAL_PRIVATE_WWW_DIR = "www/";
        REAL_PRIVATE_DOC_DIR = "doc/";
        REAL_PUBLIC_DOCUMENTS_DIR = "documents/";
        REAL_PUBLIC_DOWNLOADS_DIR = "downloads/";
        sAppIsTests = new HashMap();
        isStreamAppRuning = false;
        isDefaultAim = VERSION.SDK_INT >= 21;
        run5appEndTime = 0L;
        sAppStateMap = new LinkedHashMap();
        sParsedControl = false;
        mUnInstalledAppInfoSet = new HashMap();
        mInstalledAppInfoSet = new HashMap();
        mBaseAppInfoSet = new HashMap();
        isStreamSDK = false;
        DEBUG_DN = new X500Principal("CN=Android Debug,O=Android,C=US");
    }

    public static class CmtInfo {
        public String templateVersion;
        public String plusLauncher;
        public String sfd;
        public boolean rptCrs = true;
        public boolean rptJse = true;
        public boolean needUpdate = true;

        public CmtInfo() {
        }
    }

    public static class BaseAppInfo {
        public boolean mMoreRecent = true;
        public boolean mDeleted = false;
        String mAppid = null;
        public String mAppVer = null;

        public BaseAppInfo(String var1, String var2) {
            this.mAppid = var1;
            this.mAppVer = var2;
        }

        boolean high(BaseInfo2.BaseAppInfo var1) {
            return compareVersion(this.mAppVer, var1.mAppVer);
        }

        public static final boolean compareVersion(String var0, String var1) {
            boolean var2 = false;

            try {
                String[] var3 = var0.split("\\.");
                String[] var4 = var1.split("\\.");
                int var5 = var3.length;
                int var6 = var4.length;

                for(int var7 = 0; var7 < var5; ++var7) {
                    if(var7 >= var6) {
                        var2 = true;
                        break;
                    }

                    int var8 = Integer.parseInt(var3[var7]);
                    int var9 = Integer.parseInt(var4[var7]);
                    if(var8 > var9) {
                        var2 = true;
                        break;
                    }

                    if(var8 < var9) {
                        var2 = false;
                        break;
                    }
                }
            } catch (NumberFormatException var10) {
                var10.printStackTrace();
            }

            return var2;
        }

        public void saveToBundleData() {
            PlatformUtil.setBundleData(BaseInfo2.PDR, this.mAppid + "_" + "appver", this.mAppVer);
            PlatformUtil.setBundleData(BaseInfo2.PDR, this.mAppid + "_" + "deleted", String.valueOf(this.mDeleted));
            String var1 = BaseInfo2.installAppMapToString();
            StringBuffer var2 = new StringBuffer();
            if(!PdrUtil.isEmpty(var1)) {
                var2.append(var1).append("|");
            }

            var2.append(this.mAppid);
            PlatformUtil.setBundleData(BaseInfo2.PDR, "apps", var2.toString());
        }

        public void clearBundleData() {
            PlatformUtil.removeBundleData(BaseInfo2.PDR, this.mAppid + "_" + "appver");
        }
    }
}
