//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package io.dcloud.common.util;

import android.webkit.JavascriptInterface;
import io.dcloud.common.DHInterface.IJsInterface;
import io.dcloud.common.adapter.util.MessageHandler;
import io.dcloud.common.adapter.util.MessageHandler.IMessages;
import org.json.JSONArray;

public class Birdge implements IJsInterface, IMessages {
    IJsInterface mJsInterface;

    public Birdge(IJsInterface var1) {
        this.mJsInterface = var1;
    }

    @JavascriptInterface
    public String prompt(String var1, String var2) {
        System.out.print("prompt.var1-->" + var1);
        System.out.print("prompt.var2-->" + var2);
        return this.mJsInterface.prompt(var1, var2);
    }

    /** @deprecated */
    @Deprecated
    public String exec(String var1, String var2, String var3) {
        return this.mJsInterface.exec(var1, var2, var3);
    }

    public String exec(String var1, String var2, JSONArray var3) {
        return this.mJsInterface.exec(var1, var2, var3);
    }

    @JavascriptInterface
    public void forceStop(String var1) {
        MessageHandler.sendMessage(this, var1);
    }

    public void execute(Object var1) {
        this.mJsInterface.forceStop((String)var1);
    }
}
