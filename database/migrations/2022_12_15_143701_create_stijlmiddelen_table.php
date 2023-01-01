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
        Schema::create('stijlmiddelen', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('name')->comment('Name of this stijlmiddel');
            $table->text('description')->nullable();
            $table->string('color')->comment('Tailwind class of highlighted color of this stijlmiddel');
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
        Schema::dropIfExists('stijlmiddelen');
    }
};
