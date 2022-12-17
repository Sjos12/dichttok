<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('highlight_fragments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('analysis_id');
            $table->foreignId('stijlmiddel_id');
            $table->integer('start')->default(0);
            $table->integer('end')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('analysis_fragments');
    }
};
