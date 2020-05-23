package com.example.configwidget;

import android.app.Activity;
import android.appwidget.AppWidgetManager;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioGroup;

public class Config extends Activity {
    int widgetId = AppWidgetManager.INVALID_APPWIDGET_ID;
    Intent resultValue;
    public final static String WIDGET_PREF = "WIDGET_PREF_";
    public final static String WIDGET_TEXT = "WIDGET_TEXT_";
    public final static String WIDGET_COLOR = "WIDGET_COLOR_";

    @Override
    public void onCreate (Bundle params) {
        super.onCreate(params);
        Intent intent = getIntent();
        Bundle extras = intent.getExtras();
        if (extras != null) {
            widgetId = extras.getInt(AppWidgetManager.EXTRA_APPWIDGET_ID, AppWidgetManager.INVALID_APPWIDGET_ID);
        }
        if (widgetId == AppWidgetManager.INVALID_APPWIDGET_ID) {
            finish();
        }

        resultValue = new Intent();
        resultValue.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, widgetId);

        setResult(RESULT_CANCELED, resultValue);
        setContentView(R.layout.config);
    }

    public void onClick(View view) {
        EditText editText = findViewById(R.id.editText);
        RadioGroup radioGroup = findViewById(R.id.radioGroup);
        int color = 0;
        switch (radioGroup.getCheckedRadioButtonId()) {
            case R.id.radio_red:
                color = R.color.red;
                break;
            case R.id.radio_orange:
                color = R.color.orange;
                break;
            case R.id.radioB_yellow:
                color = R.color.yellow;
                break;
            case R.id.radio_green:
                color = R.color.green;
                break;
            case R.id.radio_lightblue:
                color = R.color.light_blue;
                break;
            case R.id.radio_darkblue:
                color = R.color.dark_blue;
                break;
            case R.id.radio_purple:
                color = R.color.purple;
                break;
            default:
                color = R.color.red;
        }

        SharedPreferences pref = getSharedPreferences(WIDGET_PREF, MODE_PRIVATE);
        SharedPreferences.Editor edit = pref.edit();
        edit.putString(WIDGET_TEXT+widgetId, editText.getText().toString());
        edit.putInt(WIDGET_COLOR+widgetId, getResources().getColor(color));
        edit.apply();

        AppWidgetManager manager = AppWidgetManager.getInstance(this);
        Widget.updateWidget(this, manager, pref, widgetId);

        setResult(RESULT_OK, resultValue);
        finish();
    }
}
